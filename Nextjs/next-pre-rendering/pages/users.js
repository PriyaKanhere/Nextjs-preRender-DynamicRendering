
function UserList({users}){
return(
        <div>
        <h1>List of users</h1>

        {users.map((user) => {
           return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <hr></hr>
                    <p>{user.email}</p>
                </div>
           )
        })}

        </div>

)
}

export default UserList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return{
        props: {
            users : data,

        },
    }
}