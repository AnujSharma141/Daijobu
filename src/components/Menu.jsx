import React from 'react' 
import heart from '../assets/icons/heart.svg'
import {motion} from 'framer-motion'

export default function Menu(props) {
    const fade = {
        visible:{opacity : 1,
        display: "flex"
        },
        hidden:{opacity: 0,
        display: "none"
        }
    }
    const slide ={
        visible:{x: 0},
        hidden:{x: -50,
        transition: {delay: 0.5}
    }
    }
      
    return (
        <motion.div className='menu-container' onClick={props.close} animate={props.switch?"visible":"hidden"} variants={fade}>
            <motion.div className='menu' initial="hidden" animate={props.switch?"visible":"hidden"} variants={slide} >
                <p className='menu-title'>DAIJOBU</p>
                <div className='menu-item'>explore</div>
                <div className='menu-item'>watchlist</div>

                <div className='menu-social'>
                    <div className='menu-social-icon'></div>
                    <div className='menu-social-icon'></div>
                </div>

                <div className='menu-donate'>BUY ME A COFFEE</div>
                <div className='menu-dev'>made with <img src={heart} className='menu-dev-icon' /> by <span className='menu-dev-name'>Anuj Sharma</span></div>
            </ motion.div>
        </motion.div>
    )
}
