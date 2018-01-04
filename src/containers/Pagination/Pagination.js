import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPagination } from '../../redux/ducks/pagination';
import './Pagination.css';

class Pagination extends Component {

	/* TODO: add possibility to navigate not only with next/prev buttons */

	constructor(props) {
		super(props);

		this.state = {
			dataChunk: 10
		};
		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleDataChunk = this.handleDataChunk.bind(this);
	}

	handleNext() {
		this.props.selectPagination({
			pageNumber: this.props.selectedPagination.pageNumber + 1,
			dataChunk: this.props.selectedPagination.dataChunk
		})
	}

	handlePrevious() {
		this.props.selectPagination({
			pageNumber: this.props.selectedPagination.pageNumber - 1,
			dataChunk: this.props.selectedPagination.dataChunk
		})
	}

	handleDataChunk(event) {
		this.props.selectPagination({
			pageNumber: this.props.selectedPagination.pageNumber,
			dataChunk: +event.target.value
		})
	}

	render() {
		const dataChunks = this.props.dataChunks;
		return(
			<div className="pagination">
				<span className="navigation-container">
					<button disabled={this.props.selectedPagination.pageNumber === 1}
							onClick={this.handlePrevious}>Previous</button>
					<button disabled={this.props.maxPageNumber &&
					this.props.maxPageNumber <= this.props.selectedPagination.pageNumber}
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
	dataChunks: state.pagination.pagination.dataChunks,
	selectedPagination: state.pagination.selectedPagination,
	maxPageNumber: state.pagination.maxPageNumber
});

const mapDispatchToProps = dispatch => {
	return {
		selectPagination: (paginationConfig) => {
			dispatch(selectPagination(paginationConfig));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);