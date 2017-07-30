import {REQUEST_DATA, RECEIVE_DATA} from '../actions/constants';

const DEFAULT_STATE = {
	recordList: {
		isLoading: false,
		records: []
	}
};

function tableDataReducer(state, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return {
				isLoading: true,
				records: []
			};
		case RECEIVE_DATA:
			return {
				isLoading: false,
				records: action.payload
			};
		default:
			return state;
	}
}

export default function rootReducer(state = DEFAULT_STATE, action) {
	return {
		recordList: tableDataReducer(state.recordList, action)
	};
}