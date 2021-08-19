import useSWR from 'swr'

function DashboardSWE(){

   const fetchDashboard = async() => {
        const response = await fetch('http://localhost:3800/Dashboard')
        const data = await response.json()
        return data
    }

    const {data,error} = useSWR('dashboard', fetchDashboard )

    if(error) return 'An error has occured'
    if(!data) return 'Loading...'

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

export default DashboardSWE