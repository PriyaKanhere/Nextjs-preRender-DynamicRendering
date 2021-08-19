function NewsArticleList({news}){
return(
    <div>
    <h1>List of news articles</h1>
    
    {news.map((post) => {
        return(
        <div key={post.id}> 
            <p>{post.title}</p>
            <p>{post.Description}</p>
        </div>
        )
    })}
    
    </div>

)
}

export default NewsArticleList


export async function getServerSideProps()
{
    const response = await fetch('http://localhost:3800/news')
    const data = await response.json()

    return{
        props: {
            news: data
        }
    }
}