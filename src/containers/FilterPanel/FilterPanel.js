import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../../components/Select/Select';

class FilterPanel extends Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit() {

	}

	handleChange() {

	}

	render() {
		const filters = this.props.filters;
		return (
			<div className="filter-panel">
				<form className="form" onSubmit={this.handleSubmit}>
					<Select label="Musician" options={filters.musician} name="musician"/>
					<Select label="Year" options={filters.year} name="year"/>
					<Select label="Album" options={filters.album} name="album"/>
					<Select label="Genre" options={filters.genre} name="genre"/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filters
});

export default connect(mapStateToProps)(FilterPanel);