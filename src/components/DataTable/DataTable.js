import React from 'react';
import Row from './Row/Row';
import PropTypes from 'prop-types';
import './DataTable.css';

const DataTable = ({data, headers, onSortChange}) => (
	<div>
		<table className="table">
			<tbody>
			<tr>
				{
					headers && headers.map((header, index) =>
						(<th key={index}>{header} <button onClick={onSortChange} value={header}>
							<i className="fa fa-sort"/></button></th>))
				}
			</tr>
			{
				data.map((item, index) => {
					return (
						<Row item={item} key={index} headers={headers}/>
					);
				})
			}
			</tbody>
		</table>
	</div>
);

DataTable.propTypes = {
	data: PropTypes.array,
	headers: PropTypes.array,
	onSortChange: PropTypes.func
};

export default DataTable;