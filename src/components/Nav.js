import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'

export default function Nav() {
    return (
        <span className="nav">
            <p className='nav-title'><Link className='link-un' to="/">DAIJOBU</Link></p>
            <ul className='nav-list'>
                <li className='nav-list-item nav-button'>CONTRIBUTE</li>
            </ul>
        </span>
    )
}
