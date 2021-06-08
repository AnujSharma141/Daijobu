import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'
  
import App from './App'
import Explore from './Explore'
import List from './List'
import Card from './components/Card.jsx'
import months from './util/common-func'

import * as serviceWorker from './serviceWorker'

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
        return list
    }

    const addList = e => {
        let sub = cache.data
        const date = new Date
        const month = months
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

    const editItem = (e,c) =>{
        let sub = cache.data
        let filter = sub.map(item =>
            item.main.name === e.main.name ? item = {...item , current: parseInt(c),status:e.episode.length == parseInt(c)?true: false} : item)
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
        <Card status={card.status} data={cache} add={addList} link={card.link} cardClose={cardClose} />
        <Router>
        <Switch>
        <Route exact path="/">
        <App /> 
        </Route>
        <Route exact path="/explore">
        <Explore cache={cache} card={cardOpen} pending={pending.length} />
        </Route>
        <Route exact path="/list">
        <List cache={cache} card={cardOpen} edit={editItem} remove={removeList} pending={pending.length} completed={completed.length} />
        </Route>
        </Switch>
        </Router>
        </>
    )
}

ReactDOM.render(<ApolloProvider client={client}><Util /></ApolloProvider>,document.getElementById('root'))

serviceWorker.register()