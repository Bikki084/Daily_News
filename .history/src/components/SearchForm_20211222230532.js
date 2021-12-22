import React, { useState } from 'react'

export default function SearchForm() {

    const [Text, setText] = useState('')
    return (
        <div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
