import { reduceByKey, transformData } from '../actionService';
import { receiveFilters } from './filters';
import { receiveMaxPageNumber } from './pagination';
import { getData } from '../../utils/apiService';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECT_SORT = 'SELECT_SORT';

const DEFAULT_STATE = {
	isLoading: false,
	records: [],
	headers: ['musician', 'song', 'year', 'genre'],
	selectedSort: {
		key: 'musician',
		sort: 'ASC'
	}
};

function requestData() {
	return {
		type: REQUEST_DATA
	}
}

function receiveData(data) {
	return {
		type: RECEIVE_DATA,
		payload: data
	}
}

export function selectSort(config) {
	return (dispatch) => {
		dispatch({type: SELECT_SORT, payload: config});
		dispatch(fetchTableData());
	};
}

export function fetchTableData() {
	return (dispatch, getState) => {
		dispatch(requestData());
		return getData().then((data) => {
			const state = getState();

			dispatch(receiveData(data));

			const filters = reduceByKey(state.table.headers, data);
			dispatch(receiveFilters(filters));

			const dataConfig = transformData(data,
				state.filters.selectedFilters, state.pagination, state.table.selectedSort);

			dispatch(receiveMaxPageNumber(dataConfig.maxPageNumber));
			dispatch(receiveData(dataConfig.data));
		});
	}
}

/* TODO: perhaps, we need to move choosing sort order to another reducer... ? Like use composition */
export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case REQUEST_DATA:
			return {
				...state,
				isLoading: true,
				records: []
			};
		case RECEIVE_DATA:
			return {
				...state,
				isLoading: false,
				records: action.payload
			};
		case SELECT_SORT:
			return {
				...state,
				selectedSort: {
					key: action.payload.key,
					sort: state.selectedSort.key === action.payload.key ?
						(state.selectedSort.sort === 'DESC' ? 'ASC' : 'DESC')
						: 'ASC'
				}
			};
		default:
			return state;
	}
};