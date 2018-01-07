import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks/index';
import { loadState } from '../localstorage';

const persistedState = loadState();

const enhancer = composeWithDevTools(
	applyMiddleware(thunk, logger)
);

const store = createStore(rootReducer, persistedState, enhancer);

export default store;