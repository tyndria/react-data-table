export const RECEIVE_MAX_PAGE_NUMBER = 'RECEIVE_MAX_PAGE_NUMBER';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const CHANGE_DATA_CHUNK = 'CHANGE_DATA_CHUNK';

const DEFAULT_STATE = {
	dataChunks: [10, 20, 50],
	selectedDataChunk: 10,
	pageNumber: 1,
	maxPageNumber: undefined
};

export function receiveMaxPageNumber(data) {
	return {
		type: RECEIVE_MAX_PAGE_NUMBER,
		payload: data
	}
}

export function changeDataChunk(chunk) {
	return {
		type: CHANGE_DATA_CHUNK,
		payload: chunk
	}
}

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case NEXT_PAGE:
			return {
				...state,
				pageNumber : state.pageNumber + 1,
			};
		case PREV_PAGE:
			return {
				...state,
				pageNumber: state.pageNumber - 1
			};
		case CHANGE_DATA_CHUNK:
			return {
				...state,
				selectedDataChunk: action.payload
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
