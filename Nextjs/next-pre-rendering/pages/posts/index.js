import Link from 'next/link'

function Postlist({posts}){
    return(
        <div>
            List of blogs
            {posts.map((post) => {
                return(
                <div key={post.id}>
                    <p>
                        <Link href={`posts/${post.id}`} passHref >
                       <a> {post.id}  {post.title} </a>
                        </Link>
                        </p>
                </div>
                )
            })}
        </div>
    )
}

export default Postlist

export async function getStaticProps(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return{
        props : {
            posts : data
        }
    }

}