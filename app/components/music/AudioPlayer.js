import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

var AudioPlayer = React.createClass({
	render: function(){
		return (
			<ReactAudioPlayer
				src={this.props.src} />
		)
	}
})

module.exports = AudioPlayer