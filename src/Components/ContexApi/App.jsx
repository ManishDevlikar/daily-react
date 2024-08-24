import React from 'react'
import { UserProvider } from './UserContex'
import HomeConsumer from './HomeConsumer'
import FooterConsumer from './FooterConsumer'
import MainConsumer from './MainConsumer'

function App() {
  return (
    <>
    <h1 className='text-white'>Application</h1>
    <UserProvider>
      <HomeConsumer/>
      <FooterConsumer/>
      <MainConsumer/>
    </UserProvider>
    </>
  )
}

export default App
