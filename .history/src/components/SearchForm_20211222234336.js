import React, { useState } from 'react'

export default function SearchForm() {

    const [Text, setText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div>
            <form class="d-flex" onSubmit = {handleSubmit}>
                <input className ="py-1 px-1" type="text" placeholder="Search" onChange = {(e) => setText(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
