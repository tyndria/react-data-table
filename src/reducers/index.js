import {
	REQUEST_DATA,
	RECEIVE_DATA,
	RECEIVE_FILTERS,
	SELECT_FILTERS,
	RECEIVE_PAGINATION,
	SELECT_PAGINATION,
	SELECT_SORT,
	RECEIVE_MAX_PAGE_NUMBER
} from '../actions/constants';

const DEFAULT_STATE = {
	recordList: {
		isLoading: false,
		records: [],
		headers: ['musician', 'song', 'year', 'genre']
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
	},
	pagination: {
		dataChunks: [10, 20, 50]
	},
	selectedPagination: {
		pageNumber: 1,
		dataChunk: 10
	},
	maxPageNumber: undefined,
	selectedSort: {
		key: 'musician',
		sort: 'ASC'
	}
};

/* TODO: separate all reducers into different files and combine them after */
/* TODO: think of better state's structure */

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

function paginationReduce(state, action) {
	switch(action.type) {
		case RECEIVE_PAGINATION:
			return action.payload;
		default:
			return state;
	}
}

function selectedPaginationReduce(state, action) {
	switch(action.type) {
		case SELECT_PAGINATION:
			return action.payload;
		default:
			return state;
	}
}

function selectedSortReducer(state, action) {
	switch(action.type) {
		case SELECT_SORT:
			return action.payload;
		default:
			return state;
	}
}

function maxPageNumberReducer(state, action) {
	switch(action.type) {
		case RECEIVE_MAX_PAGE_NUMBER:
			return action.payload;
		default:
			return state;
	}
}


export default function rootReducer(state = DEFAULT_STATE, action) {
	return {
		recordList: tableDataReducer(state.recordList, action),
		filters: filtersReducer(state.filters, action),
		selectedFilters: selectedFiltersReducer(state.selectedFilters, action),
		pagination: paginationReduce(state.pagination, action),
		selectedPagination: selectedPaginationReduce(state.selectedPagination, action),
		selectedSort: selectedSortReducer(state.selectedSort, action),
		maxPageNumber: maxPageNumberReducer(state.maxPageNumber, action)
	};
}