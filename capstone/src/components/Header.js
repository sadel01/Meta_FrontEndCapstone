import React from "react";
import { ReactComponent as Logo } from '../logo.svg';
import HamburguerMenu from '../assets/icon _hamburger menu.svg';
import { useState } from 'react';
import Nav from './Nav';

const Header = () => {

  return (
    <header className="headerStyle">
        <a href="/"><Logo className="logo"/></a>
    </header>
  );
};
export default Header;