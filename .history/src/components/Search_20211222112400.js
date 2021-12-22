import React from 'react'

const Search = () => {


   
  function change() {
    alert('Hello!');
  }

    return (

        <>
        
        <div>

            <form className="d-flex mx-5"  onChnage = {(event) => {
                
                
            }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" onClick = {change} type="submit">Search</button>
            </form>

        
        </div>
        
                </>
    )
}

export default Search;

constr url = https://newsapi.org/v2/everything?q=tesla&from=2021-11-22&sortBy=publishedAt&apiKey=fe00171e9be447c891c180edc15dc131
