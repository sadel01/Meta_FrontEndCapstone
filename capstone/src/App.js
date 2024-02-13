import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="headerNav">
        <Header/>
        <Nav/>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
