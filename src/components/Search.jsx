import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';

export default function Search(props) {
    const [key, setKey] = useState({handle: null, val: {name:null, link:null}, status: false, list: null})

    const changeHandler = e => {
        if(e.target.value.length > 3)setKey({...key, handle: e.target.value, status: false})
        if(e.target.value.length <= 3) setKey({...key,handle: null,status:false ,list:null})
    }

    const SEARCH_QUERY = gql`
    {
        search(key: "${key.handle}"){
        name
        link
        }
    }`

    const { loading , data } = useQuery(SEARCH_QUERY,{skip: key.handle === null, onCompleted: ()=>setKey({...key, status: true, list: data})});

    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input className='search' onChange={changeHandler} onFocus={()=>setKey({...key, val:{name: null, link: null}})} value={key.val.name} type="text" placeholder='search'/>
            {key.status?<div className='search-list'>
            {key.list.search.slice(0,4).map(item =><div className='search-list-item' onClick={()=>{setKey({...key,val:{name: ''}, status:false, list: null}); props.card(item.link);}}>{item.name}</div>)}
            </div>:null}
        </form>
    )
}
