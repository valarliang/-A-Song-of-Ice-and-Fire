import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<div className='container navbar' >
			<Link to='/' >Home</Link>
			<nav className='nav-links' >
				<Link to='/characters' >Characters</Link>
				<Link to='/houses' >Houses</Link>
			</nav>
		</div>
	)
}