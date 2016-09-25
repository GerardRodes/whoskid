import React from 'react';

var SongItem = React.createClass({
	componentWillMount: function(){
		console.log(this.props.item)
	},
	switchSong: function(){
		this.props.onClick(this.props.item)
	},
	render: function() {
		return (
			<div
				className="song-item"
				onClick={this.switchSong} >
				<div
					className="artwork"
					style={{backgroundImage: 'url('+this.props.item.artwork+')'}} />
				<div className="title">{this.props.item.title}</div>
			</div>
		);
	}
});

module.exports = SongItem