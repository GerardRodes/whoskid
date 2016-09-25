import React from 'react'
import Menu from './menu/Menu.js'

var contentStyles = {
	left: 0
},
menuStyles = {
	left: -1
}

const sections = [
	{
		text: 'Home',
		path:  '/home',
		name: 'home',
		icon: 'H'
	},
	{
		text: 'Contact',
		path:	'/contact',
		name: 'contact',
		icon: 'C'
	},
	{
		text: 'Blog',
		path:	'/blog',
		name: 'blog',
		icon: 'B'
	},
	{
		text: 'Music',
		path:	'/music',
		name: 'music',
		icon: 'M'
	}
]

var App = React.createClass({
	getInitialState: function(){
		return {
			show: 'content'
		}
	},
	componentDidMount: function(){
		this.menuWrapper = document.getElementsByClassName('menu-wrapper')[0]
		this.contentWrapper = document.getElementsByClassName('content-wrapper')[0]
		
		this.menuWrapper.style.left = -this.menuWrapper.offsetWidth + 35 +"px"
		
		this.contentWidth = window.innerWidth - 35
		this.contentLeft = window.innerWidth - this.contentWidth
		
		this.contentWrapper.style.maxWidth = this.contentWidth + "px"
		this.contentWrapper.style.left = this.contentLeft + "px"
		
		this.body = document.getElementsByTagName('body')[0]
		this.body.classList.remove("loading")
		this.body.classList.add("loaded")
	},
	componentWillUpdate: function(nextProps, nextState){
		this.updateStyles(nextState)
	},
	toggleShow: function(){
		let show = this.state.show == 'content' ? 'menu' : 'content'
		this.setState({
			show: show
		})
	},
	updateStyles: function(state) {
		let menu = this.menuWrapper
		contentStyles = {
			left: state.show == 'content' ? this.contentLeft : menu.offsetWidth
		}
		
		menuStyles = {
			left: state.show == 'content' ? -menu.offsetWidth + 35 : 0
		}
	},
	render: function() {
		return (
			<div>
				<div className={ this.state.show == 'menu' ? "menu-wrapper onview" : "menu-wrapper offview" } style={menuStyles}>
					<Menu toggleShow={this.toggleShow} sections={sections}/>
				</div>
				<div className={ this.state.show == 'content' ? "content-wrapper onview" : "content-wrapper offview" }
						 style={contentStyles}>
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = App;