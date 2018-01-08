import React from 'react';
import Row from './Row/Row';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ReactLoading from 'react-loading';
import './DataTable.css';

const DataTable = ({data, headers, onSortChange, isLoading}) => (
	<div className="data-table">
		{ isLoading ?
			<ReactLoading className="data-table-loader" delay="0" type="bubbles" color=""/> :
			<table className="table">
				<tbody>
				<tr>
					{
						headers && headers.map((header, index) =>
							(<th key={index}>{header} <Button onClick={onSortChange} value={header}>
								<i className="fa fa-sort"/></Button></th>))
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
		}
	</div>
);

DataTable.propTypes = {
	data: PropTypes.array,
	headers: PropTypes.array,
	onSortChange: PropTypes.func
};

export default DataTable;
