export const RECEIVE_FILTERS = 'RECEIVE_FILTERS';
export const SELECT_FILTERS = 'SELECT_FILTERS';

const DEFAULT_STATE = {
	filters: {
		genre: [],
		musician: [],
		year: [],
		album: []
	},
	selectedFilters: {
		genre: '',
		musician: '',
		record: '',
		album: ''
	}
};

export function receiveFilters(data) {
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

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SELECT_FILTERS:
			return {
				...state,
				selectedFilters: action.payload
			};
		case RECEIVE_FILTERS:
			return {
				...state,
				filters: action.payload
			};
		default:
			return state;
	}
};
