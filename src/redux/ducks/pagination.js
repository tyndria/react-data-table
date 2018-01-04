export const RECEIVE_PAGINATION = 'RECEIVE_PAGINATION';
export const SELECT_PAGINATION = 'SELECT_PAGINATION';
export const RECEIVE_MAX_PAGE_NUMBER = 'RECEIVE_MAX_PAGE_NUMBER';

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

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case RECEIVE_PAGINATION:
			return {
				...state,
				pagination: action.payload
			};
		case SELECT_PAGINATION:
			return {
				...state,
				selectedPagination: action.payload
			};
		case RECEIVE_MAX_PAGE_NUMBER:
			return {
				...state,
				maxPageNumber: action.payload
			};
		default:
			return state;
	}
};
