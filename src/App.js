import React from 'react'
import {Link} from 'react-router-dom'

import section  from './assets/img/exp-graphics.svg'
import gradient from './assets/img/inst-graphics.svg'
import box from './assets/img/box-window.svg'
import heart from './assets/icons/heart.svg'
import logo from './assets/icons/logo.svg'
import slide1 from './assets/img/slide-cont-1.svg'
import slide2 from './assets/img/slide-cont-2.svg'
import slide3 from './assets/img/slide-cont-3.svg'

import './style/base.sass'


export default function App(props) {    
  return (
    <div className='site'>
      <div className='site-header'>
        <img src={logo} className='site-logo' />
        <p className='site-label'>DAIJOBU</p> 
        <h1 className='site-title'>Your Weeb Watchlist!</h1>
      </div>

      <div className='wrap-container' style={{backgroundImage:'url('+box+')', backgroundSize: 'cover'}}>
        <img src={slide1} className='wrap-slide' />
        <div className='wrap-button'>create watchlist</div>
      </div>

        <div className='section-container'>
          <div className='section'>
              <h2 className='section-title'>discover</h2>
              <p className='section-text'>explore from thousands of anime and expand your watchlist.</p>
              <Link to='/explore' className='section-link'>Explore</Link>
          </div>
          <img src={section} className='section-img' />
        </div>   

        <div className='grad-container'>
          <img src={gradient} className='grad'/>
          <div className='grad-cont'>
            <h2 className='grad-title'>works on all devices</h2>
            <p className='grad-text'>not in washing machine tho.</p>
          </div>
          <Link to='/explore' className='grad-link'>INSTALL</Link>
        </div>

        <div className='site-footer'>
          <div className='site-footer-nav'>
            <div className='site-footer-social'>
              <div className='site-footer-social-icons'></div>
              <div className='site-footer-social-icons'></div>
            </div>
            <div className='site-footer-title'>DAIJOBU 2021</div>
          </div>
          <div className='site-footer-credits'>
            <div className='site-footer-donate'>BUY ME A COFFEE</div>
            <div className='site-footer-dev'>made with <img src={heart} className='site-footer-dev-icon' /> by <span className='site-footer-name'>Anuj Sharma</span></div>
          </div>
        </div>
      </div>

    )
}
