import React from 'react'

var Section = React.createClass({
	render: function(){
		return (
				<a
					href={this.props.path} 
					data-name={this.props.name}
					onClick={this.props.onClick}
					className={this.props.active ? 'active' : ''} >
					{this.props.text}
				</a>
		)
	}
})

module.exports = Section