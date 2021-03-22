import React from 'react'
import {Link} from 'react-router-dom'
import colors from '../assets/data/colors'
import Search from '../components/Search'
import {Pie} from 'react-chartjs-2'
import anime from 'animejs'
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

import '../style/list.css'

import cros from '../assets/icons/x.svg'
import empty from '../assets/icons/box.svg'

 
export default function List(props) {
    const labels = []
    props.data.data.map(item=>{
      labels.push(item.main.name)
    })
    const ep = []
    props.data.data.map(item=>{
      ep.push(item.current)
    })
    const bar = {
        labels: labels,
        datasets: [
          {
            label: 'Episodes',
            data: ep,
            borderWidth: 0,
            backgroundColor: colors
          },
        ],
      }

      const options = {legend: 
        {labels: {  // This more specific font property overrides the global property
        fontSize: 0,
        },display:false,},
        intainAspectRatio:false,
            scales: { yAxes: [{ gridLines:{
            color:'rgba(0, 100, 0, 0)',
            drawBorder:true,
            zeroLineColor:'rgba(0, 100, 0, 0)'},
            ticks: { display:true,
                beginAtZero: true,
        fontFamily:'Poppins',
        fontColor:'#fff'},},],
         xAxes:[{gridLines:{
        color:'rgba(0, 100, 0, 0.0)',
        zeroLineColor:'rgba(0, 100, 0, 0)'},
        ticks: {display:true,
        beginAtZero: true,
        fontFamily:'Poppins',
        fontColor:'#000'},
        display:false
        },]},}

    const animationRef = React.useRef(null);
    React.useEffect(() => {
    animationRef.current = anime({
      targets: [".list-switch"],
      opacity: [0,1],
      translateY: [-30,0],
      loop: false,
      duration:800,
      easing: "easeInOutSine"
    });
    animationRef.current = anime({
        targets: [".list-display"],
        opacity: [0,1],
        translateY: [-30,0],
        loop: false,
        delay: anime.stagger(200) ,
        easing: "easeInOutSine"
      });
      animationRef.current = anime({
        targets: [".list-gr"],
        delay: anime.stagger(200) ,
        opacity: [0,1],
        translateY: [-30,0],
        loop: false,
        easing: "easeInOutSine"
      });


    }, []);

    const changeHandler = (e,c) =>{
      props.edit(c,e.target.value)
    }
    return (
        <div className='list'>
            <div className='list-counter'>
                <Link to="explore" className='list-switch link-un'>Explore</Link>
                <Search searchIcon="list-search-icon" card={props.cardOpen} inpclass="list-inp" listClass='list-search-list' itemClass='list-search-item' placeholder="search" subclass="list-sub" />
            </div>
            <div className='list-high'>
                <div className='list-gr'>
                    <div className='list-gr-title'>{props.pending}<div className='list-gr-text'>pending</div></div>
                     
                    <div className='list-gr-title'>{props.completed}<div className='list-gr-text'>completed</div></div>
                    
                    <div className='list-gr-bar'>
                        <Pie data={bar} options={options} />
                    </div>
                </div>
                <div className='list-display'>
                {props.data.data.length === 0? <>
                <img src={empty} className='list-emp-img' alt=""/>
                <div className='list-emp-txt'>Watchlist Empty!</div>

                </>:    
                props.data.data.map(item=>
                <>
                <div className='list-item'>
                    <div className='list-item-name-sp'>
                <div className='list-item-pr'>
                    <div className='list-item-pr-tr' style={{width: `${(item.current/item.episode.length)*19}vw`}}></div>
                </div>
                <div className='list-item-name'>{item.main.name}</div>
                </div>
                <div className='list-item-date'>{item.date}</div>
                <select name="list-item-episodes" onChange={e=>changeHandler(e,item)}>
               {item.episode.map(ep=>{return(
                  item.current === ep + 1? 
                  <option value={ep+1} onClick={()=>{props.edit(item,ep+1)}} selected> Episode {ep+1}</option>
                :<option value={ep+1} onClick={()=>{props.edit(item,ep+1)}}>Episode {ep+1}</option>               
                )
               })}
                </select>
                <div className='list-item-rem'>
                    <img className='list-item-rem-icon' onClick={()=>{props.remove(item);toast.notify('removed',{duration:2000});}} src={cros} alt=""/>
                </div>
                </div>
                <div className='list-item-hr'></div>
                </>
                )
            }
            </div>
        
            </div>
            </div>
    )
}
