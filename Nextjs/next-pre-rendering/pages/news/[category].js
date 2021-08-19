function ArticleListByCategory({articles}){
    return(
        <div>
        <div>
            Showing news for 
        </div>
        {articles.map((article) => {
                return(
                    <div key={article.id}>
                    {article.title} | {article.Description} <hr></hr>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context){
    const {params, req, res , query} = context
    const { category } = params
    console.log(category)
    res.setHeader('Set-Cookie',"Name = Priya")
    console.log(query)

    const response = await fetch(`http://localhost:3800/news?Category=${category}`)

    const data = await response.json()

    console.log(data)
    return {
        props : {
            articles: data,
        }
    }

}