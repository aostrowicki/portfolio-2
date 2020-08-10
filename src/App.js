import React, { useState } from 'react';
import { NavContext } from './context'
import Sidebar from './sections/Sidebar'
import Hero from './sections/Hero';
import About from './sections/About';
import What from './sections/What';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import { useMediaQuery } from 'react-responsive'

function App() {

  const [active, setActive] = useState('home');
  const showNavbar = useMediaQuery({ maxWidth: 1350 })

  return (
    <>
      <NavContext.Provider value={{ active, setActive }}>
        {!showNavbar && <Sidebar />}
        {showNavbar && <Navbar />}
        <main className="push">
          <Hero />
          <About />
          <What />
          <Work />
          <Contact />
        </main>
      </NavContext.Provider>
      <Footer />
    </>
  );
}

export default App;