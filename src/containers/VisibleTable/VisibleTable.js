import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTableData, selectSort } from '../../redux/actions/index';
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

		const currentSelectedPagination = this.props.selectedPagination;
		const nextSelectedPagination = nextProps.selectedPagination;

		const currentSelectedSort = this.props.selectedSort;
		const nextSelectedSort = nextProps.selectedSort;

		if (currentSelectedFilters !== nextSelectedFilters
		|| currentSelectedPagination !== nextSelectedPagination
		|| currentSelectedSort !== nextSelectedSort) {
			this.props.fetchTableData();
		}
	}

	onSortChange(event) {
		this.props.selectSort({
			key: event.currentTarget.value,
			sort: event.currentTarget.value === this.props.selectedSort.key ? 'DESC' : 'ASC'
		});
	}

	render() {
		const props =
			{onSortChange: this.onSortChange, data: this.props.records, headers: this.props.headers};
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
	selectedFilters: state.filters.selectedFilters,
	selectedPagination: state.pagination.pagination.selectedPagination,
	selectedSort: state.table.selectedSort
});

const mapDispatchToProps = dispatch => {
	return {
		fetchTableData: () => {
			dispatch(fetchTableData());
		},
		selectSort: (sortConfig) => {
			dispatch(selectSort(sortConfig));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTable);