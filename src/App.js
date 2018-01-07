import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { storeState } from './localstorage';
import VisibleTable from '../src/containers/VisibleTable/VisibleTable';
import FilterPanel from '../src/containers/FilterPanel/FilterPanel';
import './App.css';

/* actually, we do not need to store all state, it's just for an example */
store.subscribe(() => {
	storeState(store.getState());
});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<div className="content">
						<VisibleTable/>
						<FilterPanel/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
