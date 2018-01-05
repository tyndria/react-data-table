import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NEXT_PAGE, PREV_PAGE, changeDataChunk} from '../../redux/ducks/pagination';
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
	dataChunks: state.paginationState.pagination.dataChunks,
	pageNumber: state.paginationState.pageNumber,
	maxPageNumber: state.paginationState.maxPageNumber
});

const mapDispatchToProps = dispatch => {
	return {
		changeChunk: (chunk) => dispatch(changeDataChunk(chunk)),
		nextPage: () => dispatch({type: NEXT_PAGE}),
		prevPage: () => dispatch({type: PREV_PAGE}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);