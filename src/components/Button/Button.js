import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({ children, className, disabled, ...otherProps }) => (
	<button className={classNames('custom-btn', className, { 'disabled': disabled })} {...otherProps}>{children}
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