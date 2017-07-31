import React from 'react';
import TableItem from './TableItem/TableItem';

export default class TableList extends React.Component {
	render() {
		const data = this.props.data.records;
		return (
			<div className="table-container">
				<table>
					<tbody>
						<tr>
							<th>Musician <button onClick={this.props.onSortChange} value="musician"><i className="fa fa-sort"/></button></th>
							<th>Song <button onClick={this.props.onSortChange} value="song"><i className="fa fa-sort"/></button></th>
							<th>Year <button onClick={this.props.onSortChange} value="year"><i className="fa fa-sort"/></button></th>
							<th>Genre <button onClick={this.props.onSortChange} value="genre"><i className="fa fa-sort"/></button></th>
						</tr>
						{
							data.map((item, index) => {
								return (
									<TableItem item={item} key={index}/>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}