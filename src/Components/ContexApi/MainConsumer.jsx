import React, { useContext } from 'react'
import { UserContext } from './UserContex'

function MainConsumer() {
const{user,setUser}= useContext(UserContext)
  return (
    <div>
      <h1 className='text-white'>main user {user.name}</h1>
    </div>
  )
}

export default MainConsumer
