import React, { useState } from 'react';
import { NavContext } from './context'
import Sidebar from './sections/Sidebar'
import Hero from './sections/Hero';
import About from './sections/About';
import What from './sections/What';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {

  const [active, setActive] = useState('home');

  return (
    <>
      <NavContext.Provider value={{ active, setActive }}>
        {/* <Sidebar /> */}
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
