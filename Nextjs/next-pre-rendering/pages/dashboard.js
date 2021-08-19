import {useState,useEffect} from 'react'

function Dashboard(){

    const[data,setData]=useState(null)
    const[isLoading,setIsLoding]=useState(true)

    useEffect(() => {
        async function fetchDashboard(){
            const response = await fetch('http://localhost:3800/Dashboard')
            const data = await response.json()

            setData(data)
            setIsLoding(false)

        }
        fetchDashboard()

    },[])

    if(isLoading){
        return(
     <h2>Loading...........</h2>
        )
    }
    return(
        <div>
          ***  Facebook Dashboard ***
          <hr></hr>
          <h3>Posts {data.posts}</h3>
          <h3>Likes {data.Likes}</h3>
            <h3> Followers {data.followers}</h3>
            <h3> Following {data.following}</h3>
        </div>
    )
}

export default Dashboard