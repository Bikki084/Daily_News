import React, { useState } from 'react'

export default function SearchForm() {

    const [Text, setText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div>
            <form class="d-flex" onSubmit = {handleSubmit}>
                <input className ="form-control me-2" type="text" placeholder="Search" value = {setText(e.target.value)} onChange = {(e) => }/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
