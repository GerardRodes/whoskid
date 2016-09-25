import React from 'react'

var Toggler = React.createClass({
	render: function() {
		return (
			<div className={this.props.mode == 'open' ? 'toggler cross' : 'toggler sandwich' }
					 onClick={this.props.onClick} >
				<div className="top"></div>
				<div className="mid"></div>
				<div className="bot"></div>
			</div>
		)
	}
})

module.exports = Toggler