import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Skeleton from './skeletons/card'
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
        }
    }`
    const { loading , data } = useQuery(CARD_QUERY);
    if(!loading) console.log(data)
    return (
        props.status?
        <div className='card-bg'>
        <div className='card' onClick={props.cardClose}>
            {!loading?<>
                <div className='card-l'>
            <div className='card-img' style={{backgroundImage:`url(${data.detail.image})`}}></div>
            <div className='card-tr'>Trailer</div>
            </div>
           <div className='card-r'>
            <h2 className='card-title'>{data.detail.name}</h2>
            <div className='card-genre'>{data.detail.genre.slice(0,3).map(item=>{return <div className='genre-item'>{item}</div>})}</div>
            <p className='card-text'>{data.detail.description.length > 156?  data.detail.description.slice(0,175)+"...":data.detail.description}</p>
            <span className='card-rating'>{data.detail.rating}</span>
            </div>
            </>:<Skeleton />}
        </div>
        </div>
        :null
      
    )
}
