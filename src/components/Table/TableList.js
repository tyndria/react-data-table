import React from 'react';
import TableItem from './TableItem/TableItem';
import './TableList.css';

export default class TableList extends React.Component {
	render() {
		const data = this.props.data.records;
		const headers = this.props.data.headers;
		return (
			<div>
				<table className="table">
					<tbody>
						<tr>
							{
								headers && headers.map((header, index) =>
									(<th key={index}>{header} <button onClick={this.props.onSortChange} value={header}>
											<i className="fa fa-sort"/></button></th>))
							}
						</tr>
						{
							data.map((item, index) => {
								return (
									<TableItem item={item} key={index} headers={headers}/>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}