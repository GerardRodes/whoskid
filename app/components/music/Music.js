import requireContext from 'webpack-require_context'
import React from 'react'
import AudioPlayer from './AudioPlayer.js'
import SongsList from './SongsList.js'
import songs from './../../songs/songs.js'

var reqMp3 = require.context('./../../songs',true,/.mp3$/)
var reqArtwork = require.context('./../../songs',true,/.jpg$/)
const defaultArtwork = reqArtwork('./default-artwork.jpg')

var Music = React.createClass({
	getInitialState: function(){
		return {
			currentSong: {}
		}
	},
	componentWillMount: function(){
		songs.songs.forEach(song => {
			song.src = reqMp3('./'+song.folder+'/'+song.file)
			try {
				song.artwork = reqArtwork('./'+song.folder+'/artwork.jpg')
			} catch (e) {
				song.artwork = defaultArtwork
			}
		})
	},
	setCurrentSong: function(songItem){
		this.setState({currentSong:songItem})
	},
	render: function(){
		let currentSong = this.state.currentSong
		return (
			<div>
				<div className="row">
					<div className="small-12 columns">
						<h1 className="head-line text-center">MUSIC</h1>
						<div className="row">
							<div className="medium-5 columns">
								<SongsList
									list={songs.songs}
									setCurrentSong={this.setCurrentSong} />
							</div>
							<div className="medium-7 columns player"
									style={{display: Object.keys(currentSong).length === 0 ? 'none' : 'block' }}>
								<div className="display">
									<div
										className="artwork"
										style={{ backgroundImage: 'url('+currentSong.artwork+')' }} />
									<div className="title">{currentSong.title}</div>
								</div>
			  				<AudioPlayer
			  					src={currentSong.src} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Music