import { getData, transformData } from '../services/apiService';
import {RECEIVE_DATA, REQUEST_DATA, RECEIVE_FILTERS, SELECT_FILTERS, SELECT_PAGINATION, SELECT_SORT} from './constants';
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
			dispatch(receiveData(data));

			const filters = reduceByKey(getState().recordList.headers, data);
			dispatch(receiveFilters(filters));

			const {selectedFilters, selectedPagination, selectedSort} = getState();
			dispatch(receiveData(transformData(data, selectedFilters, selectedPagination, selectedSort)));
		});
	}
}
