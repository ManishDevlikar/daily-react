import React, { useContext } from 'react'
import { UserContext } from './UserContex'

function FooterConsumer() {
    const {user}= useContext(UserContext);
  return (
    <div>
      <h1 className='text-white'>footer {user?.name}</h1>
    </div>
  )
}

export default FooterConsumer
