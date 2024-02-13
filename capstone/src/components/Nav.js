import React from "react";
import '../App.css';
import BookingPage from "./BookingPage";

const Nav = () => {

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
    <nav className="navStyle">
        <ul>
            <li> <a href="/">HOME</a></li>
            <li> <a href="#about" onClick={handleClick("About")}>ABOUT</a></li>
            <li> <a href="#specials" onClick={handleClick("Highlights")}>MENU</a></li>
            <li> <a href="">RESERVATIONS</a></li>
            <li> <a href="">ORDER ONLINE</a></li>
            <li> <a href="/booking" element={<BookingPage />}>BOOKING</a></li>
        </ul>
    </nav>
  );
};

export default Nav;