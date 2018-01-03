import React from 'react';
import PropTypes from 'prop-types';

const Row = ({item, headers}) => (
	<tr className="list-item">
		{
			headers.map((header, index) =>
				(<td key={index}>
					{header === 'song' && <i className="fa fa-play-circle-o"/>}
					{item[header]}
				</td>)
			)
		}
	</tr>
);

Row.propTypes = {
	item: PropTypes.object.isRequired,
	headers: PropTypes.arrayOf(PropTypes.string)
};

export default Row;
