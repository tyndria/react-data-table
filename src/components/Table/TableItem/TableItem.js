import React from 'react';
class TableItem extends React.Component {
	render() {
		const item = this.props.item;
		return (
			<tr className="list-item">
				{
					this.props.headers.map((header, index) =>
						(<td key={index}> {header === 'song' && <i className="fa fa-play-circle-o"/>} {item[header]}</td>)
					)
				}
			</tr>
		);
	}
}

export default TableItem;
