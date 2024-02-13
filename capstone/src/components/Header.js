import React from "react";
import { ReactComponent as Logo } from '../logo.svg';
import HamburguerMenu from '../assets/icon _hamburger menu.svg';

const Header = () => {
  return (
    <header className="headerStyle">
        <Logo className="logo"/>
        <button class="hamburger">
            <img src={HamburguerMenu} alt="Hamburguer Menu" />
        </button>
    </header>
  );
};
export default Header;