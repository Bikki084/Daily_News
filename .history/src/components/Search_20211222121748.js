import React from 'react'

const Search = () => {



   
  function change() {
    alert('Hello!');
    const [articles, setArticles] = useState([])
    setArticles(parsedData.articles)
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


