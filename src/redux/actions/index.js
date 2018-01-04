import { getData } from '../../utils/apiService';
import {
	RECEIVE_DATA,
	REQUEST_DATA,
	RECEIVE_FILTERS,
	SELECT_FILTERS,
	SELECT_PAGINATION,
	SELECT_SORT,
	RECEIVE_MAX_PAGE_NUMBER
} from './constants';
import { reduceByKey, transformData } from './actionService';

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

export function receiveMaxPageNumber(data) {
	return {
		type: RECEIVE_MAX_PAGE_NUMBER,
		payload: data
	}
}

export function selectPagination(data) {
	return {
		type: SELECT_PAGINATION,
		payload: data
	}
}

export function selectSort(data) {
	return {
		type: SELECT_SORT,
		payload: data
	}
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
				state.filters.selectedFilters, state.pagination.selectedPagination, state.table.selectedSort);

			dispatch(receiveMaxPageNumber(dataConfig.maxPageNumber));
			dispatch(receiveData(dataConfig.data));
		});
	}
}
