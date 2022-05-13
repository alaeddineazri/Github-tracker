import React  from 'react'
import Users from '../components/users/Users'


const Home = () => {


  return (
    <div>
        <Users /> 
        {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  )
}

export default Home