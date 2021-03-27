import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/icons/icon.png'
import '../style/nav.css'

export default function Nav() {
    return (
        <span className="nav">
            <p className='nav-title'><Link className='link-un nav-title-span' to="/">
                <img src={icon} className='nav-icon' alt=""/>
                DAIJOBU</Link></p>
            <ul className='nav-list'>
                <a className='nav-list-item nav-button' href="https://github.com/AnujSharma141/Daijobu">CONTRIBUTE</a>
            </ul>
        </span>
    )
}
