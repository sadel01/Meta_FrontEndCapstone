import React from "react";
import '../App.css';
import BookingPage from "./BookingPage";
import { useState } from 'react';
import { useEffect } from 'react';
import HamburguerMenu from '../assets/icon _hamburger menu.svg';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // Limpiar el controlador de eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <nav className={`navStyle ${isOpen ? 'open' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
            <img src={HamburguerMenu} alt="Hamburguer Menu" />
        </button>

        <ul className={`menu ${isOpen ? 'open' : ''}`}>
            <li> <a href="/">HOME</a></li>
            <li> <a href="#about" onClick={handleClick("About")}>ABOUT</a></li>
            <li> <a href="#specials" onClick={handleClick("Highlights")}>MENU</a></li>
            <li> <a href="">ORDER ONLINE</a></li>
            <li> <a href="/booking" element={<BookingPage />}>BOOKING</a></li>
        </ul>
    </nav>
  );
};

export default Nav;