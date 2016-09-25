import React from 'react'
import kidLogo from './../../images/kid-logo.png'
import kidAvatar from './../../images/kid-avatar.jpg'
var Home = React.createClass({
	render: function(){
		return (
			<div className="home section"
					 style={{backgroundImage: 'url('+kidLogo+')'}}>
				<div className="row">
					<div className="small-12 columns">
						<h1 className="head-line text-center">WHOSKID</h1>
						<div className="avatar-wrapper">
							<div className="kid-avatar" style={{backgroundImage: 'url('+kidAvatar+')'}} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="small-12 columns">
						<h2 className="thin">WHO AM I</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum mattis leo a condimentum. Etiam non velit at metus consequat iaculis quis et ex. Donec ac magna in lacus lacinia finibus in vitae mauris. In in odio nisi. In suscipit risus nisi, eu dictum dolor condimentum id. Sed egestas lectus eget diam dapibus, nec luctus quam elementum. Proin lacinia elit ac consequat blandit. Ut turpis risus, sollicitudin sed purus eget, venenatis faucibus tortor. Ut vehicula, nibh at tempus vehicula, magna lacus ultrices velit, eget vehicula libero diam vitae massa. Suspendisse a fermentum mauris, vulputate ultricies justo. Nam diam ante, facilisis id est nec, ultrices vulputate erat.
						</p>
						<p>
							Fusce vitae purus eu ex malesuada lacinia id et nibh. Curabitur ultricies risus in urna auctor tempor. Nulla quis dui blandit tellus volutpat ultricies scelerisque eget magna. Maecenas sed libero felis. Proin in feugiat sem, a sollicitudin nulla. Donec maximus nulla et leo eleifend gravida. Vivamus ut orci sit amet leo egestas lacinia sit amet condimentum eros. Aenean ac neque vel purus mollis pellentesque. Praesent faucibus libero et est rhoncus, et dignissim nunc ornare. Etiam urna neque, rhoncus sit amet odio sit amet, cursus sollicitudin metus. Nunc felis nisl, dignissim vitae risus a, varius tristique risus. Cras vitae est non mauris iaculis convallis. Ut congue risus non diam auctor, quis cursus libero faucibus. Nulla arcu quam, blandit sed scelerisque vitae, pharetra a mi.
						</p>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Home