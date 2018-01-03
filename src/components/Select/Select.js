import React from 'react';
import PropTypes from 'prop-types';

const Select = ({name, value, label, options, handleChange}) => (
	<label>
		<span className="label-text">{label}</span>
		<select value={value}
				name={name}
				onChange={handleChange}>
			<option value="">None selected</option>
			{options && options.length > 0 && options.map((option, index) => {
				return (<option value={option} key={index}>{option}</option>)
			})}
		</select>
	</label>
);

Select.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.array,
	handleChange: PropTypes.func
};

export default Select;