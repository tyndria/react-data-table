import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import VisibleTable from '../src/containers/VisibleTable/VisibleTable';
import FilterPanel from '../src/containers/FilterPanel/FilterPanel';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="content">
					<div className="header">
					</div>
					<div>
						<VisibleTable/>
						<FilterPanel/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;