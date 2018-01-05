import { combineReducers } from 'redux';
import paginationReducer from './pagination';
import filtersReducer from './filters';
import tableReducer from './table';

const rootReducer = combineReducers({
	tableState: tableReducer,
	paginationState: paginationReducer,
	filtersState: filtersReducer
});

export default rootReducer;