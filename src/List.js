import React from 'react'
import toast from 'react-hot-toast'
import Nav from './components/Nav'

import cross from './assets/icons/x.svg'
 
export default function List(props) {

    const labels = []
    props.cache.data.map(item=>{
      labels.push(item.main.name)
    })
    
    const ep = []
    props.cache.data.map(item=>{
      ep.push(item.current)
    })
    
    const changeHandler = (e,c) =>{
      props.edit(c,e.target.value)
    }

    const remove = item =>{
      toast('removed',{
        duration: 2000,
        className: '',
        icon: '🗑️',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
      props.remove(item)
    }

    return (
    <>
        <Nav card={props.card} />

        <div className='list'>
        <div className='list-container'>
        
        <h2 className='list-title'>watchlist</h2>    
        
            {props.cache.data.length === 0? 
            <>
            empty
            </>

            :
            <div className='list-display'>{
            props.cache.data.map(item=>
            <>
            
            <div className='list-item'>
                <div className='list-item-status'></div>
                <div className='list-item-name'>{item.main.name}</div>
                <div className='list-item-date'>{item.date}</div> 
                <select name='list-item-episodes' onChange={e=>changeHandler(e,item)}>
                {item.episode.map(ep=>{return(
                  item.current === ep + 1? 
                  <option value={ep+1} onClick={()=>{props.edit(item,ep+1)}} selected> Episode {ep+1}</option>
                :<option value={ep+1} onClick={()=>{props.edit(item,ep+1)}}>Episode {ep+1}</option>               
                )})}
                </select>
                <div className='list-item-remove'>
                    <img className='list-item-remove-icon' onClick={()=>{remove(item)}} src={cross} alt=""/>
                </div>
            </div>
            <div className='list-item-border'></div>
            </>
            )}
            </div>
        }
        
        </div>

        <div className='list-stats'>
            <div className='list-stats-label'>STATS</div>
            <hr className='list-stats-line' />
            <div className='list-stats-table'>
            <div className='list-stats-title'><div className='list-stats-text'>pending</div>{props.pending}</div>         
            <div className='list-stats-title'><div className='list-stats-text'>completed</div>{props.completed}</div>
            </div>
        </div>
        </div>
    </>
    )
}
