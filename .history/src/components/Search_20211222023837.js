import React from 'react'

const Search = () => {


    const change = ()
    return (

        <>
        
        <div>

            <form className="d-flex mx-5"  onChnage = {(event) => {
                
                
            }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" onLCick = {change} type="submit">Search</button>
            </form>

        </div>
          
        <div>

        </div>
                </>
    )
}

export default Search;
