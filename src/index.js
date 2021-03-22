import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Nav from './components/Nav'
import App from './views/App'
import Explore from './views/Explore'
import List from './views/List'
import Card from './components/Card'
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'
import * as serviceWorker from './service-worker';
  
const httpLink = createHttpLink({
    uri: 'https://apikaizen.herokuapp.com/api'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})  

let cacheList = JSON.parse(localStorage.getItem('watchlist'))

const Util = () =>{
    //card
    const [card, setCard] = useState({status: false, link:null})
    const cardOpen = link => setCard({status: true, link: link})
    const cardClose = () => setCard({status: false, link: null})

    //cache
    const [cache, setCache] = useState(cacheList == null? {data : []} :{data: cacheList.data})

    //list functions
    const episode = episodes =>{
        let list = []
        for (let index = 0; index < episodes; index++) {
            list.push(index)
        }
        console.log(list)
        return list
    }

    const addList = e => {
        let sub = cache.data
        const date = new Date
        const month = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        sub.push({main: e, status:false, current: 1, episode:episode(e.episodes),  date: `${date.getDate()} ${month[date.getMonth()]}`})
        setCache({data: sub})
        cardClose()
    }

    const removeList = e =>{
        let sub = cache.data
        let filter = sub.filter(items =>
            items.main.name !== e.main.name     
        )
        setCache({data: filter})
    }

    const completeItem = e =>{
        let sub = cache.data
        let filt = sub.map(item =>
            item.main.name === e.main.name ? item = {...item , status: true} : item)
        console.log('filter',filt)
        setCache({data: filt    })
        console.log('cache',cache)
    }

    const editItem = (e,c) =>{
        let sub = cache.data
        if(e.episode.length == parseInt(c)) {completeItem(e)
        }
        let filter = sub.map(item =>
            item.main.name === e.main.name ? item = {...item , current: parseInt(c)} : item)
        setCache({data: filter})
    }

    let completed =  cache.data.filter(items =>
        items.status == true     
    )

    let pending =  cache.data.filter(items =>
        items.status == false     
    )

    localStorage.setItem('watchlist',JSON.stringify(cache))
    return( 
        <>
        <Card status={card.status} add={addList} link={card.link} cardClose={cardClose} />
        <Router>
        <Nav />
        <Switch>
        <Route exact path="/">
        <App cardOpen={cardOpen} /> 
        </Route>
        <Route exact path="/explore">
        <Explore data={cache} cardOpen={cardOpen} pending={pending.length} />
        </Route>
        <Route exact path="/list">
        <List data={cache} edit={editItem} remove={removeList} pending={pending.length} completed={completed.length} cardOpen={cardOpen}  />
        </Route>
        </Switch>
        </Router>
        </>
    )
}

ReactDOM.render(<ApolloProvider client={client}><Util /></ApolloProvider>,document.getElementById('root'))
