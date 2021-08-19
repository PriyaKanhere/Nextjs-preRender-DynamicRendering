import Link from 'next/link'

function Home(){
  return(<div>
    Pre-Rendering Home page
    <hr>
    </hr>
    <Link href="/users" >
    <a>Users</a>
    </Link>

    <Link href="/posts">
    <a>
      Post
    </a>
    </Link>
  </div>)
}

export default Home