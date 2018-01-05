import { combineReducers } from 'redux';
import pagination from './pagination';
import filters from './filters';
import table from './table';

const rootReducer = combineReducers({
	table,
	pagination,
	filters
});

export default rootReducer;