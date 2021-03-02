import React,{useState} from 'react'
import '../style/tab.css'
import Skeleton from './skeletons/tab'
import { useQuery, gql } from '@apollo/client';


export default function Tab(props) {
    //menu
    const [option, setOption] = useState({active:'popular'})
    const setActive = value =>{
        setOption({active:value})
    }

    //data
    const TAB_QUERY = gql`
    {
        ${option.active}{
        name
        link
        image
        rating
        }
    }`
    
    const { loading , data } = useQuery(TAB_QUERY);
    let list = []
    if(!loading) list = data[option.active].slice(0,10)

    return (
        <div className='tab'>
            <h1 className='tab-title'>Explore</h1>
        <ul className='tab-options'>
            <li className={option.active === 'popular'? 'tab-opt-item tab-opt-active': 'tab-opt-item'} onClick={()=>setActive('popular')}>Popular</li>
            <li className={option.active === 'new'? 'tab-opt-item tab-opt-active': 'tab-opt-item'} onClick={()=>setActive('new')}>New</li>
            <li className={option.active === 'rated'? 'tab-opt-item tab-opt-active': 'tab-opt-item'} onClick={()=>setActive('rated')}>Top Rated</li>
        </ul>
        <div className='tab-display'>
            {loading?<>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </>
            :
            list.map(item=> {return(
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
        </div>
        </div>
    )
}
