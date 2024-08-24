import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContex';

function HomeConsumer() {
    const {user,setUser} = useContext(UserContext);
    useEffect(() => {
    setUser({
        name:"manish",age:30,education:"BE"
    })
    }, [])
  return (
    <div>
      <h1 className='text-white'>Home {user.name}</h1>
    </div>
  )
}

export default HomeConsumer
