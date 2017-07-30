import data from '../data/index.js';
import {RECEIVE_DATA, REQUEST_DATA} from './constants';

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

export default function fetchTableData() {
	return (dispatch) => {
		dispatch(requestData());
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		}).then((data) => {
			dispatch(receiveData(data));
		});
	}
}
