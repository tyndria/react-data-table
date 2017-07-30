import React from 'react';
class TableItem extends React.Component {
	render() {
		const item = this.props.item;
		return (
			<div className="list-item">
				<h3 className="list-item-cell">
					{item.musician.name}
				</h3>
			</div>
		);
	}
}

export default TableItem;
