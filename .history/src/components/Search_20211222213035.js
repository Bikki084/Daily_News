import React from 'react'
import SearchItems from '../SearchItems'


export default function Search() {

  return (

    <>

      <div>
        <form className="d-flex mx-5">
          <input className="form-control me-2" type="search"  name="query" id="Search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <SearchItems/>

      

    </>
  )
}

export default SEarchItems


