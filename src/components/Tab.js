import React,{useState} from 'react'
import '../style/tab.css'
import Skeleton from './skeletons/tab'
import { useQuery, gql } from '@apollo/client';

export default function Tab(props) {
    //data
    const NEW_QUERY = gql`
    {
        new{
        name
        link
        image
        rating
        }
    }`
    const POPULAR_QUERY = gql`
    {
        popular{
        name
        link
        image
        rating
        }
    }`
    const RATED_QUERY = gql`
    {
        rated{
        name
        link
        image
        rating
        }
    }`
    
    const newList = useQuery(NEW_QUERY);
    let newData = []
    if(!newList.loading) newData = newList.data.new.slice(0,10)

    const popularList = useQuery(POPULAR_QUERY);
    let popularData = []
    if(!popularList.loading) popularData = popularList.data.popular.slice(0,10)

    const ratedList = useQuery(RATED_QUERY);
    let ratedData = []
    if(!ratedList.loading) ratedData = ratedList.data.rated.slice(0,10)

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
        <div className='tab'>

        <h2 className='tab-display-title'>New</h2>
        <div className='tab-display tab-new'>
            <div className='tab-carousal-ar-r' onClick={()=>scrollRight('.tab-new','.carousal-one')}> {'>'} </div>
        {newList.loading?<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
            :
            newData.map(item=> {return(
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
            <div className='tab-carousal-ar-l carousal-one' onClick={()=>scrollLeft('.tab-new','.carousal-one')}> {'<'} </div>
            </div>


            <h2 className='tab-display-title'>Popular</h2>
            <div className='tab-display tab-popular'>
            <div className='tab-carousal-ar-r' onClick={()=>scrollRight('.tab-popular','.carousal-two')}> {'>'} </div>
            {popularList.loading?<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
            :
            popularData.map(item=> {return(
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
            <div className='tab-carousal-ar-l carousal-two' onClick={()=>scrollLeft('.tab-popular','.carousal-two')}> {'<'} </div>
        </div>
        

        <h2 className='tab-display-title'>Top Rated</h2>
            <div className='tab-display tab-rated'>
            <div className='tab-carousal-ar-r' onClick={()=>scrollRight('.tab-rated','.carousal-three')}> {'>'} </div>
            {ratedList.loading?<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
            :
            ratedData.map(item=> {return(
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
            <div className='tab-carousal-ar-l carousal-three' onClick={()=>scrollLeft('.tab-rated','.carousal-three')}> {'<'} </div>
        </div>
        </div>
    )
}
