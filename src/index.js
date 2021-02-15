import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav'
import App from './views/App'
import List from './views/List';

const Switch = () =>{
    const [app, setApp] = useState(true)
    const switchApp = () => setApp(!app)
    return( 
        <>
        <Nav />
        {app?<App switch={switchApp} /> : <List switch={switchApp} />}
        </>
    )
}

ReactDOM.render(<Switch />,document.getElementById('root'));

