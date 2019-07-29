import React, { Component } from "react";
import HeaderMenu from "./headerMenu";

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header">
        <a href="/" className="headerLogo">
          Ani
          <strong>
            :<span>me</span>
          </strong>
        </a>
        <HeaderMenu />
        <div className="headerMenuUser">
          <a href="">Войти</a>
        </div>
      </header>
    );
  }
}

export default Header;
