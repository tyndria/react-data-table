import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilters, RESET_FILTERS } from '../../redux/ducks/filters';
import './FilterPanel.css';
import Select from '../../components/Select/Select';

class FilterPanel extends Component {
	constructor(props) {
		super(props);
		this.state = props.selectedFilters;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps.selectedFilters);
	}

	handleSubmit(event) {
		this.props.selectFilters(this.state);
		event.preventDefault();
	}

	handleReset(event) {
		this.props.resetFilters();
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const filters = this.props.filters;
		const headers = this.props.headers;
		return (
			<div className="filter-panel">
				<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<span className="header">Filters</span>
					{
						headers && headers.map((header, index) => {
							return (<Select key={index}
											label={header}
											value={this.state[header]}
											options={filters[header]}
											name={header}
											handleChange={this.handleChange}/>)
						})
					}
					<div className="action-buttons">
						<input type="reset" value="Reset" />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filtersState.filters,
	selectedFilters: state.filtersState.selectedFilters,
	headers: state.tableState.headers,
	isLoading: state.tableState.isLoading
});

const mapDispatchToProps = dispatch => {
	return {
		selectFilters: (filtersConfig) => dispatch(setFilters(filtersConfig)),
		resetFilters: () => dispatch({type: RESET_FILTERS})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);