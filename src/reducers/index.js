import {REQUEST_DATA, RECEIVE_DATA, RECEIVE_FILTERS} from '../actions/constants';

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
		album: [],
		selectedFilters: {
			genre: null,
			musician: null,
			record: null,
			album: null
		}
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

function filterPanelReducer(state, action) {
	switch(action.type) {
		case RECEIVE_FILTERS:
			return action.payload;
		default:
			return state;
	}
}

export default function rootReducer(state = DEFAULT_STATE, action) {
	return {
		recordList: tableDataReducer(state.recordList, action),
		filters: filterPanelReducer(state.filters, action)
	};
}