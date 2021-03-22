import React,{useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import Skeleton from './skeletons/card'
import toast from 'toasted-notes' 
import searchYouTube from 'youtube-search-api-with-axios';

import 'toasted-notes/src/styles.css';
import '../style/card.css'

export default function Card(props) {

    const CARD_QUERY = gql`
    {
        detail(link:"${props.link}"){
        name        
        genre
        rating
        image
        description
        episodes
        }
    }`
    const { loading , data } = useQuery(CARD_QUERY)


    //validation
    const valid = e =>{
        let filter = props.data.data.filter(item=> item.main.name === e.name)
        if(filter.length >0) toast.notify('already added',{duration:2000})
        else {props.add(e)
            toast.notify('added',{duration:2000})}
    }


    return (
        props.status?
        <div className='card-bg'>
        <div className='card'>
        <div className='card-close'><div className='card-close-button'  onClick={props.cardClose}>x</div></div>
            {!loading?<>
                <div className='card-l'>
            <div className='card-img' style={{backgroundImage:`url(${data.detail.image})`}}>
            <div className='card-img-gradient'>
                <div className='card-title'>{data.detail.name}</div>
            </div>
            </div>
            
            </div>
           <div className='card-r'>
            <div className='card-r-up'>
            
            <div className='card-rating'>RATING {data.detail.rating}</div>
            <div className='card-genre'>{data.detail.genre.slice(0,3).map(item=>{return <div className='genre-item'>{item}</div>})}</div>
            <p className='card-text'>{data.detail.description.length > 156 ?  data.detail.description.slice(0,175)+"...":data.detail.description}</p>
            <div className='card-tr'>TRAILER</div>
            </div>
            <div className='card-add-sp'>
                <div className='card-add' onClick={()=>valid(data.detail)}>ADD</div>
            </div>
            </div>

            </>
            
            :<Skeleton />}
        </div>
        </div>
        :null
      
    )
}
