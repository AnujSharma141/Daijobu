import React, { useState } from 'react'
import Search from './Search.jsx'
import Menu from './Menu'
import menuIcon from '../assets/icons/nav-menu.svg'

export default function Nav(props) {
    const [menu, setMenu] = useState(false)
    const menuOpen = () => setMenu(true)
    const menuClose = () => setMenu(false)
 
    return (
        <>
        <span className='nav'>
            <div className='nav-menu'>
                <img src={menuIcon} onClick={menuOpen} className='nav-menu-icon' />
            </div>

            <div className='nav-list'>
            <Search card={props.card} />
            <div className='nav-beta'></div>
            </div>
        </span>

        <Menu switch={menu} close={menuClose} /> 
        </>
    )
}
