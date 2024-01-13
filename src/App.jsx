import React from 'react'

import './App.css'
import Header from './components/Header'
import Notes from './components/Notes'
import { useState } from 'react'

const App = () => {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
         <div className='main'>
            <Header handleToggleDarkMode={setDarkMode}/>
            <Notes/>
         </div>
    </div>
    
  )
}

export default App
