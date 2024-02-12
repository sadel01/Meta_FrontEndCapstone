import React from "react";
import { ReactComponent as Logo } from '../logo.svg';

const Header = () => {
  return (
    <header className="headerStyle">
        <Logo className="logo"/>
    </header>
  );
};
export default Header;