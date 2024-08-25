import React, { useContext } from 'react'
import { ThemeContex } from './ThemeContext'

function Main() {

    const {theme,handleTheme} = useContext(ThemeContex);
  return (
    <>
        <h1 className="text-black dark:text-teal-50">You are at main page</h1>
        <button onClick={handleTheme} className="text-black p-1 border-2 border-red-200 dark:text-white ">{theme==='dark'?'light Mode 🌞':'dark Mode 🌚'}</button>
    </>
  )
}

export default Main
