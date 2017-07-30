import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const enhancer = composeWithDevTools(
	applyMiddleware(thunk, logger)
);

const store = createStore(rootReducer, enhancer);

export default store;