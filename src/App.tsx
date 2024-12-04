import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Properties } from './components/Properties';
import { Features } from './components/Features';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Properties />
      <Features />
      <Contact />
    </div>
  );
}

export default App;