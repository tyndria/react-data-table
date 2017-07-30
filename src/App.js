import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import VisibleTable from '../src/containers/VisibleTable/VisibleTable';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="content">
					<div className="header">
					</div>
					<div>
						<VisibleTable/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
