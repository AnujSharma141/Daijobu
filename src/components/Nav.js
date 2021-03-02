import React from 'react'
import '../style/nav.css'

export default function Nav() {
    return (
        <span className="nav">
            <h1 className='nav-title'>DAIJOBU</h1>
            <ul className='nav-list'>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item nav-button'>Contribute</li>
            </ul>
        </span>
    )
}
