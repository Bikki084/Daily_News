import React from 'react'


export default function Search() {

  return (

    <>

      <div>
        <form className="d-flex mx-5">
          <input className="form-control me-2" type="search" name="query" id="Search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>

    </>
  )
}



