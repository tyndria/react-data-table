import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import VisibleTable from '../src/containers/VisibleTable/VisibleTable';
import FilterPanel from '../src/containers/FilterPanel/FilterPanel';
import './App.css';

const store = configureStore();
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
