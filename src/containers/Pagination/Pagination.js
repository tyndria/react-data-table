import React, { Component } from 'react';
import { connect } from 'react-redux';
import {nextPage, prevPage, changeDataChunk} from '../../redux/ducks/pagination';
import './Pagination.css';

class Pagination extends Component {
	constructor(props) {
		super(props);

		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleDataChunk = this.handleDataChunk.bind(this);
	}

	handleNext() {
		this.props.nextPage();
	}

	handlePrevious() {
		this.props.prevPage();
	}

	handleDataChunk(event) {
		this.props.changeChunk(+event.target.value);
	}

	render() {
		const dataChunks = this.props.dataChunks;
		return(
			<div className="pagination">
				<span className="navigation-container">
					<button disabled={this.props.pageNumber === 1}
							onClick={this.handlePrevious}>Previous</button>
					<button disabled={this.props.maxPageNumber &&
					this.props.maxPageNumber <= this.props.pageNumber}
							onClick={this.handleNext}>Next</button>
				</span>
				<span className="page-chunk-container">
					{
						dataChunks.map((chunk, index) => {
							return (<button key={index} value={chunk} onClick={this.handleDataChunk}>{chunk}</button>)
						})
					}
				</span>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	dataChunks: state.pagination.dataChunks,
	pageNumber: state.pagination.pageNumber,
	maxPageNumber: state.pagination.maxPageNumber
});

const mapDispatchToProps = dispatch => ({
	changeChunk: (chunk) => dispatch(changeDataChunk(chunk)),
	nextPage: () => nextPage(),
	prevPage: () => prevPage(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);