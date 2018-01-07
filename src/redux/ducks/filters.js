export const RECEIVE_FILTERS = 'RECEIVE_FILTERS';
export const SET_FILTERS = 'SET_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';

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

export const receiveFilters = (data) => ({
	type: RECEIVE_FILTERS,
	payload: data
});

export const setFilters = (data) => ({
	type: SET_FILTERS,
	payload: data
});

export const resetFilters = () => ({
	type: RESET_FILTERS
});

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SET_FILTERS:
			return {
				...state,
				selectedFilters: action.payload
			};
		case RECEIVE_FILTERS:
			return {
				...state,
				filters: action.payload
			};
		case RESET_FILTERS:
			return {
				...state,
				selectedFilters: DEFAULT_STATE.selectedFilters
			};
		default:
			return state;
	}
};
