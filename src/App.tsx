import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
