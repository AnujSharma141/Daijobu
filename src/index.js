import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav'
import App from './views/App'
import List from './views/List';
import Card from './components/Card'
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
  
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/api'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})  

const Switch = () =>{
    //views
    const [app, setApp] = useState(true)
    const [card, setCard] = useState({status: false, link:null})
    const switchApp = () => setApp(!app)
    const cardOpen = link => setCard({status: true, link: link})
    const cardClose = () => setCard({status: false, link: null})

    //list data
    
    return( 
        <>
        <Nav />
        <Card status={card.status} link={card.link} cardClose={cardClose} />
        {app?<App switch={switchApp} cardOpen={cardOpen} /> 
        :<List switch={switchApp} cardOpen={cardOpen}  />}
        </>
    )
}

ReactDOM.render(<ApolloProvider client={client}><Switch /></ApolloProvider>,document.getElementById('root'));

