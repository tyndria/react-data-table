import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTableData, selectSort } from '../../redux/ducks/table';
import DataTable from '../../components/DataTable/DataTable';
import Pagination from '../Pagination/Pagination';

class VisibleTable extends Component {
	constructor() {
		super();
		this.onSortChange = this.onSortChange.bind(this);
	}

	componentDidMount() {
		this.props.fetchTableData();
	}

	componentWillReceiveProps(nextProps) {
		const currentSelectedFilters = this.props.selectedFilters;
		const nextSelectedFilters = nextProps.selectedFilters;

		const currentPage = this.props.pageNumber;
		const nextPage = nextProps.pageNumber;
		const currentDataChunk = this.props.selectedDataChunk;
		const nextDataChunk = nextProps.selectedDataChunk;

		if (currentSelectedFilters !== nextSelectedFilters
			|| currentPage !== nextPage || currentDataChunk !== nextDataChunk) {
			this.props.fetchTableData();
		}
	}

	onSortChange(event) {
		this.props.selectSort({
			key: event.currentTarget.value
		});
	}

	render() {
		const props =
			{onSortChange: this.onSortChange, data: this.props.records, headers: this.props.headers, isLoading: this.props.isLoading};
		return (
			<div className="table-container">
				<span className="header">Playlist</span>
				<DataTable {...props}/>
				<Pagination/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	records: state.table.records,
	headers: state.table.headers,
	isLoading: state.table.isLoading,
	pageNumber: state.pagination.pageNumber,
	selectedDataChunk: state.pagination.selectedDataChunk,
	selectedFilters: state.filters.selectedFilters,
	selectedSort: state.table.selectedSort
});

const mapDispatchToProps = dispatch => ({
	fetchTableData: () => dispatch(fetchTableData()),
	selectSort: (sortConfig) => dispatch(selectSort(sortConfig))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTable);