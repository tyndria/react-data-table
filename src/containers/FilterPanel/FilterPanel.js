import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFilters } from '../../actions/index';
import Select from '../../components/Select/Select';

class FilterPanel extends Component {
	constructor(props) {
		super(props);
		this.state = props.selectedFilters;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	componentDidMount() {
		this.setState(this.props.selectedFilters);
	}

	handleSubmit(event) {
		this.props.selectFilters(this.state);
		event.preventDefault();
	}

	handleReset(event) {
		event.preventDefault();
		this.setState(() => {
			this.state = {};
			this.props.selectFilters(this.state);
		});
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
					<input type="submit" value="Submit" />
					<input type="reset" value="Reset" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filters,
	selectedFilters: state.selectedFilters,
	headers: state.recordList.headers
});

const mapDispatchToProps = dispatch => {
	return {
		selectFilters: (filtersConfig) => {
			dispatch(selectFilters(filtersConfig));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);