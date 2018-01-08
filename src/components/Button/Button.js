import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ children, ...otherProps }) => (
	<button className="custom-btn" {...otherProps}>{children}
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
};


Button.defaultProps = {
	onClick: () => null,
	disabled: false,
};

export default Button;