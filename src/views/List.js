import React from 'react'
import Search from '../components/Search'
import '../style/list.css'
 
export default function List(props) {
    return (
        <div className='list'>
            <div className='list-counter'>
                <button className='list-switch' onClick={()=>props.switch()}>Back</button>
                <Search inpclass="list-inp" placeholder="Search an anime ..." subclass="list-sub" />
            </div>
            <ul className='list-option'>
                <li className='list-opt-item list-opt-active'>Complete</li>
                <li className='list-opt-item'>Remaining</li>
            </ul>
            <div className='list-display'></div>
        </div>
    )
}
