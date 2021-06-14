import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-animated-slider'
import Fade from 'react-reveal/Fade'
import "react-animated-slider/build/vertical.css";


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
  const slides = [slide1, slide2, slide3]

  return (
    <div className='site'>
      <div className='site-header'>
        
        <img src={logo} className='site-logo' />
        <Fade bottom>
        <p className='site-label'>DAIJOBU</p> 
        </Fade>
        <Fade bottom>
        <h1 className='site-title'>Your Weeb Watchlist!</h1>
        </Fade>
      </div>

      <Fade bottom>
      <div className='wrap-container' style={{backgroundImage:'url('+box+')', backgroundSize: 'cover'}}>
      <img className='wrap-slide' src={slide1} />
    
      
        <Link to='/list' className='wrap-button'>create watchlist</Link>
      </div>
      </Fade>

        <div className='section-container'>
          <div className='section'>
              <h2 className='section-title'>discover</h2>
              <p className='section-text'>explore from thousands of anime and expand your watchlist.</p>
              <Link to='/explore' className='section-link'>Explore</Link>
          </div>
          <Fade right>
          <img src={section} className='section-img' />
          </Fade>
        </div>   

        <div className='grad-container'>
          <img src={gradient} className='grad'/>
          <div className='grad-cont'>
            <h2 className='grad-title'>works on all devices</h2>
            <p className='grad-text'>not in the washing machine tho.</p>
          </div>
          
        </div>

        <div className='site-footer'>
          <div className='site-footer-nav'>
            <div className='site-footer-social'>
              <a className='site-footer-social-icons' href="https://github.com/AnujSharma141/daijobu"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className='site-footer-social-icon' alt="" /></a>
              <a className='site-footer-social-icons' href="https://dribbble.com/skiptree"><img src="https://www.searchpng.com/wp-content/uploads/2019/01/Dribbble-icon-Logo-PNG-Image.png " className='site-footer-social-icon' alt="" /></a>
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
