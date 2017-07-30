import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTableData } from '../../actions/index';
import TableList from "../../components/Table/TableList";

class VisibleTable extends Component {
	componentDidMount() {
		this.props.fetchTableData();
	}

	render() {
		const data = this.props.recordList;
		return (
			<div>
				<TableList data={data}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	recordList: state.recordList
});

const mapDispatchToProps = dispatch => {
	return {
		fetchTableData: () => {
			dispatch(fetchTableData());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTable);