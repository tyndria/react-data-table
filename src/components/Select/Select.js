import React from 'react';

class Select extends React.Component {
	render() {
		const options = this.props.options;
		return (
			<label>
				<span className="label-text">{this.props.label}</span>
				{
					options && options.length > 0 &&
					<select value={this.props.value}
							name={this.props.name}
							onChange={this.props.handleChange}>
						{options.map((option, index) => {
							return (<option value={option} key={index}>{option}</option>)
						})}
					</select>
				}
			</label>
		);
	}
}

export default Select;