import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Welcome from './Welcome';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about-me" element={<About />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>        
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;

