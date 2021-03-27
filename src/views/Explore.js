import React from 'react'
import '../style/explore.css'
import Tab from '../components/Tab'
import Search from '../components/Search'
import { Link } from 'react-router-dom'


export default function Explore(props) {
    return (
        <div className='exp'>
            <div className='exp-list'>
                <div className='exp-list-status'>
                <p className='exp-list-num'>{props.pending}</p>
                <p className='exp-list-text'>shows pending</p>
                </div>
                <Link className='link-un' to='/list'><h2 className='exp-list-link'>WATCHLIST</h2></Link>
            </div>
            <Search card={props.cardOpen} searchIcon="exp-search-icon" inpclass="exp-inp" listClass='exp-search-list' itemClass='exp-search-item' placeholder="search" subclass="exp-sub"/>
            <div className='tab'>
            <Tab card={props.cardOpen} query="new" name="Airing" />
            <Tab card={props.cardOpen} query="popular" name="Popular" />
            <Tab card={props.cardOpen} query="rated" name="Top Rated" />
            </div>
            
        </div>
    )
}
