import React from 'react'
import Search from '../components/Search'
import Tab from '../components/Tab'
import '../style/app.css'

export default function App(props) {
    return (
        <>
            <div className="app-cont">
                <div className='app-counter'>
                <h1 className="app-title">Your Weeb Watchlist!</h1>
                <Search inpclass="app-search-inp" placeholder="Search ..." subclass="app-search-sub" />
                <button onClick={()=>props.switch()} className="app-switch">View Watchlist</button>
                </div>
                <Tab />
            </div>
        </>
    )
}
