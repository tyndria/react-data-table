import React, { Component } from 'react';
import VisibleTable from '../src/containers/VisibleTable/VisibleTable';
import FilterPanel from '../src/containers/FilterPanel/FilterPanel';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="content">
					<VisibleTable/>
					<FilterPanel/>
				</div>
			</div>
		);
	}
}

export default App;
