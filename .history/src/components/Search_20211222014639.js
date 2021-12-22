import React from 'react'

const Search = () => {
    return (
        <div>
            <form class="d-flex" method="get" action="/Search"/>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            
        </div>
    )
}

export default Search;
