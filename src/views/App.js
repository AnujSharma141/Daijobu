import React, {useState, useEffect} from 'react'
import Ring from '../assets/img/ring.jpg'
import Dots from '../assets/img/dots.jpg'
import {Link} from 'react-router-dom'
import TextTransition, { presets } from "react-text-transition";
import anime from 'animejs'
import '../style/app.css'


export default function App(props) {
    
    const textA = [{text:'explore new and popular animes and expand your watchlist.',title:'explore'},{text:'track your watchlist, shows and no of episodes binge.',title:'track'},{text:'search from millions of animes shows and movies',title:'discover'}]
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);


  

    const animationRef = React.useRef(null);
    React.useEffect(() => {
    animationRef.current = anime({
      targets: [".app-title"],
      opacity: [0,1],
      translateY: [-30,0],
      loop: false,
      duration:800,
      easing: "easeInOutSine"
    });
    animationRef.current = anime({
        targets: [".app-ills-main"],
        opacity: [0,1],
        translateY: [-30,0],
        loop: false,
        delay: anime.stagger(200) ,
        easing: "easeInOutSine"
      });
    animationRef.current = anime({
        targets: [".app-ills-main-text"],
        opacity: [0,1],
        translateY: [-30,0],
        loop: false,
        delay: anime.stagger(200) ,
        easing: "easeInOutSine"
      });
      animationRef.current = anime({
        targets: [".app-ills-main-title"],
        delay: anime.stagger(200) ,
        opacity: [0,1],
        translateY: [-30,0],
        loop: false,
        easing: "easeInOutSine"
      });

    }, []);
    return (
        <>
            <div className="app-cont">
                <div className='app-counter'> 
                <div className='app-head'>
                <h1 className="app-title">Your Weeb Watchlist</h1>
                <Link to="/explore" className='link-un' >
                    <button className="app-switch">Get Started</button>
                </Link>
                </div>
                <div className='app-illustration'>
                <img src={Dots} className='app-ills-dots' alt=""/>
                <div className='app-ills-main'>
                <p className='app-ills-main-title'>
                    <TextTransition
                    text={ textA[index % textA.length].title}
                    springConfig={ presets.wobbly }
                    /></p>  
                    <p className='app-ills-main-text'>
                    <TextTransition
                    text={ textA[index % textA.length].text }
                    springConfig={ presets.wobbly }
                    />
                    </p> 
                    
                </div>
                <img src={Ring} className='app-ills-ring' alt=""/>
                </div>
                </div>
                <div className='app-ft'>
                    <div className='app-cpr'>DAIJOBU 2021</div>
                    <div className='app-social'></div>
                </div>
            </div>
        </>
    )
}
