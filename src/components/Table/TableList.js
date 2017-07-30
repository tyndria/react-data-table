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
							<td>Musician</td>
							<td>Song</td>
							<td>Year</td>
							<td>Genre</td>
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