import React from 'react'
import Toggler from './Toggler.js'
import {Link} from 'react-router'


var Menu = React.createClass({
	getInitialState: function() {
		return {
			mode: 'closed',
			active: 'home'
		}
	},
	componentWillMount: function() {
		this.buildSections(this.state)
	},
	componentWillUpdate: function(nextProps,nextState) {
		this.buildSections(nextState)
	},
	buildSections: function(state) {
		this.sections = []
		this.props.sections.map((section,i) => {
			this.sections.push(
				<li key={i}>
					<Link
						to={section.path}
					 	data-name={section.name}
					 	activeClassName="active"
					 	onClick={this.switchSection} >
						{section.text}
						<div className="icon">{section.icon}</div>
					</Link>
				</li>
			)
		})
	},
	switchSection: function(e) {
		this.setState({active: e.target.attributes['data-name'].value})
	},
	toggleMode: function(){
		this.props.toggleShow()
		this.setState({
			mode: this.state.mode == 'open' ? 'closed' : 'open'
		})
	},
	render: function() {
		return (
			<div>
				<div className="toggler-wrapper">
					<Toggler onClick={this.toggleMode}
					 				 mode={this.state.mode} />
				</div>
				<ul>{this.sections}</ul>
			</div>
		)
	}
})

module.exports = Menu