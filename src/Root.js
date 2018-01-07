import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './App';

const store = configureStore();
class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route path="/" component={ App } />
				</Router>
			</Provider>
		);
	}
}

export default Root;
