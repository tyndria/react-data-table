import React, { Component } from 'react';
import { connect } from 'react-redux';
import {nextPage, prevPage, changeDataChunk} from '../../redux/ducks/pagination';
import Button from '../../components/Button/Button';
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
					<Button disabled={this.props.pageNumber === 1}
							onClick={this.handlePrevious}>Previous</Button>
					<Button disabled={this.props.maxPageNumber &&
					this.props.maxPageNumber <= this.props.pageNumber}
							onClick={this.handleNext}>Next</Button>
				</span>
				<span className="page-chunk-container">
					{
						dataChunks.map((chunk, index) => {
							return (<Button className="custom-btn"
											key={index}
											value={chunk}
											onClick={this.handleDataChunk}>{chunk}</Button>)
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
	nextPage: () => dispatch(nextPage()),
	prevPage: () => dispatch(prevPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);