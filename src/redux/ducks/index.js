import { combineReducers } from 'redux';
import paginationReducer from './pagination';
import filtersReducer from './filters';
import tableReducer from './table';

const rootReducer = combineReducers({
	table: tableReducer,
	pagination: paginationReducer,
	filters: filtersReducer
});

export default rootReducer;