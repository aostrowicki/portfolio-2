import React, { useState } from 'react';
import { NavContext } from './context'
import Sidebar from './sections/Sidebar'
import Hero from './sections/Hero';
import About from './sections/About';
import What from './sections/What';

function App() {

  const [active, setActive] = useState('home');

  return (
    <>
      <NavContext.Provider value={{ active, setActive }}>
        <Sidebar />
        <main>
          <Hero />
          <About />
          <What />
        </main>
      </NavContext.Provider>
    </>
  );
}

export default App;
