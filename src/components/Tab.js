import React,{useState} from 'react'
import '../style/tab.css'
import rightarr from '../assets/icons/right-arr.svg'
import leftarr from '../assets/icons/left-arr.svg'
import Skeleton from './skeletons/tab'
import { useQuery, gql } from '@apollo/client';

export default function Tab(props) {
    //query
    const QUERY = gql`
    {
        ${props.query}{
        name
        link
        image
        rating
        }
    }`
    
    const list = useQuery(QUERY);
    let data = []
    if(!list.loading) data = list.data[`${props.query}`].slice(0,13)

    //carousal 
    const scrollRight = (name,arr) =>{
        let element = document.querySelector(name)
        element.scrollBy({
            top: 0,
            left: +760,
            behavior: 'smooth'
        })
            document.querySelector(arr).style.cssText = "opacity: 1;" 

    }
    const scrollLeft = (name,arr) =>{
        let element = document.querySelector(name)
        
        element.scrollBy({
            top: 0,
            left: -760,
            behavior: 'smooth'
        })
        setTimeout(() => {
            if(element.scrollLeft==0) document.querySelector(arr).style.cssText = "opacity: 0;"            
            console.log('test')
        }, 600)

    }
    return (
        <>
        <h2 className='tab-display-title'>{props.name}</h2>
        <div className='tab-display tab-new'>
            <div className='tab-carousal-ar-r' onClick={()=>scrollRight('.tab-new','.carousal-one')}> <img src={rightarr} className="arrow" alt=""/> </div>
        {list.loading?<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
            :
            data.map(item=> {return(
                <div className='tab-card' style={{backgroundImage:`url(${item.image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
                    <div className='tab-card-gradient'>
                    <div className='tab-card-rec'>
                    <div className='tab-card-title'>{item.name.length > 20 ? item.name : item.name}</div>
                    <p className='tab-card-rating'>Rating : {item.rating}</p>
                    </div>
                    <div className='tab-card-button' onClick={()=>props.card(item.link)}>VIEW</div>
                    </div>
                </div>
            )})
            }
            <div className='tab-corousal-dr'></div>
            <div className='tab-carousal-ar-l carousal-one' onClick={()=>scrollLeft('.tab-new','.carousal-one')}> <img src={leftarr} className="arrow" alt=""/> </div>
            </div>
        </>
    )
}
