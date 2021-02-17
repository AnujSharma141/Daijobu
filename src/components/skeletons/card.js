import React from 'react'

export default function Skeleton() {
    return (
        <div className='card-sk'>
            <div className='card-shimmer'></div>
             <div className='card-l'>
            <div className='card-sk-img'></div>
            <div className='card-sk-tr'></div>
            </div>
           <div className='card-r'>
            <div className='card-sk-title'></div>
            <div className='card-sk-genre'></div>
            <div className='card-sk-text'></div>
            <div className='card-sk-text'></div>
            <div className='card-sk-text'></div>
            </div>
        </div>
    )
}
