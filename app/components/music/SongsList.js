import React from 'react'
import SongItem from './SongItem.js'

var SongsList = React.createClass({
	componentWillMount: function(){
		this.songsItemsList = []
		this.props.list
			.forEach( (song, i) =>
				this.songsItemsList.push(
					<SongItem
						key={i}
						item={song}
						onClick={this.props.setCurrentSong} />
				)
			)
	},
	render: function() {
		return (
			<div className="songs-list">
				{this.songsItemsList}
			</div>
		);
	}
});

module.exports = SongsList