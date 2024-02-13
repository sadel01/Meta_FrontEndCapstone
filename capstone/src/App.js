import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import React from "react";



function App() {
  return (
    <>
      <div className="headerNav">
        <Header/>
        <Nav/>
      </div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
