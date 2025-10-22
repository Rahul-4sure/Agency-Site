import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react';
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import Ourwork from './Components/Ourwork';
import Teams from './Components/teams';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light');

  return ( 
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <Ourwork/>
      <Teams/>
    </div>
  )
}

export default App