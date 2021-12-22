import React, { useState } from 'react'

export default function SearchForm() {

    const [Text, setText] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div>
            <form class="d-flex" onSubmit = {handleSubmit}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange = {(e) => setText(e.target.value)}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
