import React from "react";
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
      <Router>
        <Footer/>
        <Routes>
            
        </Routes>
      </Router>
    </div>
  );
};

export default App;
