import React from 'react'

const Search = () => {



   
  function change = async()=> {
    
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-22&sortBy=publishedAt&apiKey=fe00171e9be447c891c180edc15dc131`
    const [articles, setArticles] = useState([])
    let data = await fetch(url);
    setArticles(parsedData.articles)
    console.log(articles)
  }

  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-22&sortBy=publishedAt&apiKey=fe00171e9be447c891c180edc15dc131`;
    setLoading(true)
    let data = await fetch(url);
    
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
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


