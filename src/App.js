
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/home';
import React from 'react';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Services from '../src/components/services/Services';
import Projects from '../src/components/projects/Projects';
import Contact from '../src/components/contact/Contact';
import Footer from '../src/components/footer/Footer';
const App = () => (
  
      <>
      <Header/>
      <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Qualification />
            <Services />
            <Projects />
            <Contact />
            <Footer />
      </main>
      </>
    
);

export default App;