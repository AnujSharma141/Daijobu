import React from 'react' 
import {Link} from 'react-router-dom'
import heart from '../assets/icons/heart.svg'

export default function Menu(props) {
    return (
        <div className={props.switch === 'true'?'menu-fadein menu-container':props.switch === 'false'?'menu-fadeout menu-container':'menu-container'} onClick={props.close}>
            <div className={props.switch === 'true'?'menu-slidein menu':props.switch === 'false'?'menu-slideout menu':'menu'}>
                <Link className='menu-title' to="/">DAIJOBU</Link>
                <Link className='menu-item' to="/explore">explore</Link>
                <Link className='menu-item' to="/list">watchlist</Link>

                <div className='menu-social'>
                    <a className='menu-social-icon' href="https://github.com/AnujSharma141/daijobu"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className='menu-social-icons' alt="" /></a>
                    <a className='menu-social-icon' href="https://dribbble.com/skiptree"><img src="https://www.searchpng.com/wp-content/uploads/2019/01/Dribbble-icon-Logo-PNG-Image.png " className='menu-social-icons' alt="" /></a>
                </div>

                <div className='menu-donate'>BUY ME A COFFEE</div>
                <div className='menu-dev'>made with <img src={heart} className='menu-dev-icon' /> by <span className='menu-dev-name'>Anuj Sharma</span></div>
            </div>
        </div>
    )
}
