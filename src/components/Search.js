import React from 'react'

export default function Search(props) {
    return (
        <form>
            <input className={props.inpclass} type="text" placeholder={props.placeholder} name="" id=""/>
            <button className={props.subclass} type="submit">ADD</button>
        </form>
    )
}
