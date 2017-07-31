import React from 'react';
class TableItem extends React.Component {
	render() {
		const item = this.props.item;
		return (
			<tr className="list-item">
				<td>{item.musician}</td>
				<td><i className="fa fa-play-circle-o"/> {item.song}</td>
				<td>{item.year}</td>
				<td>{item.genre}</td>
			</tr>
		);
	}
}

export default TableItem;
