import React,{useState} from 'react'
import Nav from './components/Nav.jsx'
import Slider from './components/Carousal.jsx'

export default function Explore(props) {
    const [active, setActive] = useState({name: 'new'})
    const label = query =>{
        setActive({name: query})      
    }

    return (
        <>
        <Nav card={props.card}/>
        <div className='exp'>
            <h2 className='exp-title'>explore</h2>
            <div className='exp-menu'>
                <li className={active.name==='new'?'exp-menu-item exp-new exp-active':'exp-menu-item exp-new'} onClick={()=>label('new')}>airing</li>
                <li className={active.name==='popular'?'exp-menu-item exp-popular exp-active':'exp-menu-item exp-popular'} onClick={()=>label('popular')}>popular</li>
                <li className={active.name==='rated'?'exp-menu-item exp-rated exp-active':'exp-menu-item exp-rated'} onClick={()=>label('rated')}>top rated</li>
            </div>

            <div className='carousal-container'> 
            <Slider card={props.card} query={active.name} />
            </div>
            
        </div>
        </>
    )
}
