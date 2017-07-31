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
	}

	componentDidMount() {
		this.setState(this.props.selectedFilters);
	}

	handleSubmit(event) {
		this.props.selectFilters(this.state);
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
			<div>
				<form onSubmit={this.handleSubmit}>
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