import React,{useState} from 'react'
import '../style/tab.css'
import Skeleton from './skeletons/tab'

let display
export default function Tab() {
    const [option, setOption] = useState({active:'popular'})
    const setActive = value =>{
        setOption({active:value})
    }
    if(option.active === 'popular') display = '<popular />'
    if(option.active === 'new') display = '<new />'
    if(option.active === 'recommended') display = '<recommended />' 

    return (
        <div className='tab'>
        <ul className='tab-options'>
            <li className='tab-opt-item' onClick={()=>setActive('popular')}>Popular</li>
            <li className='tab-opt-item' onClick={()=>setActive('new')}>New</li>
            <li className='tab-opt-item' onClick={()=>setActive('recommended')}>Recommended</li>
        </ul>
        <div className='tab-display'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
        </div>
    )
}
