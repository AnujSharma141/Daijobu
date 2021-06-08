import React,{useRef} from 'react'
import { useQuery, gql } from '@apollo/client';

import Skeleton from './skeletons/tab'
import right from '../assets/icons/right-arr.svg'
import left from '../assets/icons/left-arr.svg'

import util from '../util/common-func'
import '../style/vendor.sass'

export default function Slider(props) {
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
    
    const list = useQuery(QUERY)
    let data = []
    if(!list.loading) data = list.data[`${props.query}`].slice(0,13)

    return (
        <>
        <div className='carousal'>
        <div className='carousal-arrow carousal-arrowleft' onClick={()=>util.scrollLeft('.carousal','.carousal-arrowleft')}>
            <img src={left} className="carousal-arrow-icon"/>
        </div>
        {list.loading?<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
            :data.map(item=> {return(
                <div className='carousal-card' style={{backgroundImage:`url(${item.image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
                    <div className='carousal-card-gradient'>
                    <div className='carousal-card-rec'>
                    <div className='carousal-card-title'>{item.name.length > 20 ? item.name : item.name}</div>
                    </div>
                    <div className='carousal-card-button' onClick={()=>props.card(item.link)}>VIEW</div>
                    </div>
                </div>
            )})}
            <div className='carousal-fade'></div>
            <div className='carousal-arrow carousal-arrowright' onClick={()=>util.scrollRight('.carousal','.carousal-arrowleft')}> 
                <img src={right} className="carousal-arrow-icon" />
            </div>
            </div>
        </>
    )
}
