import { getData, filterData } from '../services/apiService';
import {RECEIVE_DATA, REQUEST_DATA, RECEIVE_FILTERS, SELECT_FILTERS} from './constants';
import { reduceByKey } from '../services/actionService';

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

function receiveFilters(data) {
	return  {
		type: RECEIVE_FILTERS,
		payload: data
	}
}

export function selectFilters(data) {
	return  {
		type: SELECT_FILTERS,
		payload: data
	}
}

export function fetchTableData() {
	return (dispatch, getState) => {
		dispatch(requestData());
		return getData().then((data) => {
			dispatch(receiveData(data));

			const filters = reduceByKey(getState().recordList.headers, data);
			dispatch(receiveFilters(filters));

			const {selectedFilters} = getState();
			dispatch(receiveData(filterData(data, selectedFilters)));
		});
	}
}
