import React from "react";

import "./navbar.scss";
import "../Hero/hero.scss";

export const Navbar = ({children}) => {

  return (
    <header className={`navBar`}>
      {children}
    </header>
  );
};
