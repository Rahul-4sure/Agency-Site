import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react';
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import Ourwork from './Components/Ourwork';
import Teams from './Components/teams';
import ContactUs from './Components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light');

  return ( 
    <div className='dark:bg-gray-950 relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <Ourwork/>
      <Teams/>
      <ContactUs/>
      <Footer theme = {theme}/>
    </div>
  )
}

export default App