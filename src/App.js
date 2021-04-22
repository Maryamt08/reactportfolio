import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Header />
      <Projects/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
