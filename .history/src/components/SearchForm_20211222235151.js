import React, { useState } from 'react'

export default function SearchForm() {


    return (
        <div>
            <form class="d-flex" onSubmit = {handleSubmit}>
                <input className ="form-control me-2" type="text" placeholder="Search" onChange = {(e) => setText(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
