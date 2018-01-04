import {
	RECEIVE_PAGINATION,
	SELECT_PAGINATION,
	RECEIVE_MAX_PAGE_NUMBER
} from '../actions/constants';

const DEFAULT_STATE = {
	pagination: {
		dataChunks: [10, 20, 50]
	},
	selectedPagination: {
		pageNumber: 1,
		dataChunk: 10
	},
	maxPageNumber: undefined
};

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case RECEIVE_PAGINATION:
			return action.payload;
		case SELECT_PAGINATION:
			return action.payload;
		case RECEIVE_MAX_PAGE_NUMBER:
			return action.payload;
		default:
			return state;
	}
};
