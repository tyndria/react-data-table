import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks/index';
import { loadState, storeState } from '../localstorage';


const configureStore = () => {
	const persistedState = loadState();

	const enhancer = composeWithDevTools(
		applyMiddleware(thunk, logger)
	);

	const store = createStore(rootReducer, persistedState, enhancer);

	/* actually, we do not need to store all state, it's just for an example */
	store.subscribe(() => {
		storeState(store.getState());
	});

	return store;
};

export default configureStore;