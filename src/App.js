import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import VisibleTable from '../src/containers/VisibleTable/VisibleTable';
import FilterPanel from '../src/containers/FilterPanel/FilterPanel';
import './App.css';

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
