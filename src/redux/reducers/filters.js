import {
	RECEIVE_FILTERS,
	SELECT_FILTERS
} from '../actions/constants';

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

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SELECT_FILTERS:
			return action.payload;
		case RECEIVE_FILTERS:
			return action.payload;
		default:
			return state;
	}
};
