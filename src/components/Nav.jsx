import React, { useState } from 'react'
import Search from './Search.jsx'
import Menu from './Menu'
import menuIcon from '../assets/icons/nav-menu.svg'

export default function Nav(props) {
    const [menu, setMenu] = useState('')
    const menuOpen = () => setMenu('true')
    const menuClose = () => setMenu('false')
 
    return (
        <>
        <span className='nav'>
            <div className='nav-menu'>
                <img src={menuIcon} onClick={menuOpen} className='nav-menu-icon' />
            </div>

            <div className='nav-list'>
            <Search card={props.card} />
            {/* <div className='nav-beta'>
                
            </div>
            <div className='nav-beta-suggestions'>
                <p className='nav-beta-suggestion-label'>BETA</p>
                <p className='nav-beta-suggestions-title'>choose your favourite genres</p>
                <div className='nav-beta-suggestions-list'>
                <span className='nav-beta-suggestions-item'>ACTION</span>
                <span className='nav-beta-suggestions-item'>DRAMA</span>
                <span className='nav-beta-suggestions-item'>MYSTERY</span>
                <span className='nav-beta-suggestions-item'>THRILLER</span>
                <span className='nav-beta-suggestions-item'>COMEDY</span>
                <span className='nav-beta-suggestions-item'>SPORT</span>
                </div>
            </div> */}
            </div>
        </span>

        <Menu switch={menu} close={menuClose} /> 
        </>
    )
}
