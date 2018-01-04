import {
	REQUEST_DATA,
	RECEIVE_DATA,
	SELECT_SORT
} from '../actions/constants';

const DEFAULT_STATE = {
	recordList: {
		isLoading: false,
		records: [],
		headers: ['musician', 'song', 'year', 'genre']
	},
	selectedSort: {
		key: 'musician',
		sort: 'ASC'
	}
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case REQUEST_DATA:
			return {
				recordList: {
					isLoading: true,
					records: []
				}
			};
		case RECEIVE_DATA:
			return {
				isLoading: false,
				records: action.payload,
				headers: DEFAULT_STATE.recordList.headers
			};
		case SELECT_SORT:
			return action.payload;
		default:
			return state;
	}
}; 