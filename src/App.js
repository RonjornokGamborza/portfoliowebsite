import React from 'react';
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
