import {REQUEST_DATA, RECEIVE_DATA, RECEIVE_FILTERS, SELECT_FILTERS} from '../actions/constants';

const DEFAULT_STATE = {
	recordList: {
		isLoading: false,
		records: [],
		headers: ['musician', 'year', 'genre', 'song', 'album']
	},
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
				records: action.payload,
				headers: DEFAULT_STATE.recordList.headers
			};
		default:
			return state;
	}
}

function filtersReducer(state, action) {
	switch(action.type) {
		case RECEIVE_FILTERS:
			return action.payload;
		default:
			return state;
	}
}

function selectedFiltersReducer(state, action) {
	switch(action.type) {
		case SELECT_FILTERS:
			return action.payload;
		default:
			return state;
	}
}

export default function rootReducer(state = DEFAULT_STATE, action) {
	return {
		recordList: tableDataReducer(state.recordList, action),
		filters: filtersReducer(state.filters, action),
		selectedFilters: selectedFiltersReducer(state.selectedFilters, action)
	};
}