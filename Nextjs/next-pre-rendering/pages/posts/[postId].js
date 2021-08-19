import useRouter from 'next/router'

function Post({post}){
return(
    <div>
        Individual post page
       <p>{post.title}</p> <hr></hr>
       <p>{post.body}</p>

    </div>
)

}

export default Post

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const data = await response.json()

    return{
        props: {
            post: data,
        }
    }
}

export async function getStaticPaths(){

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const data = await response.json()
    const paths = data.map((post) => {
        return{
            params:{
                postId:`${post.id}`,
            },
        }
    })

    return{
        paths,
        fallback: true,
    }
}