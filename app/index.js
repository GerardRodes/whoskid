import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home/Home.js'
import Blog from './components/Blog/Blog.js'
import Contact from './components/Contact/Contact.js'
import Music from './components/Music/Music.js'

import './styles/reset.css'
import './styles/foundation.min.css'
import './styles/main.scss'

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="home" component={Home} />
			<Route path="blog" component={Blog} />
			<Route path="music" component={Music} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>
), document.getElementById('app'))