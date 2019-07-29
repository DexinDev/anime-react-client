import React, { Component } from "react";

class HeaderMenu extends Component {
  state = {
    links: [
      { name: "Все", link: "/" },
      { name: "Мне повезёт", link: "/random" },
      { name: "Мои", link: "/my" }
    ]
  };

  render() {
    return <menu className="headerMenu">{this.renderLinks()}</menu>;
  }

  renderLinks() {
    if (this.state.links.length === 0) return null;
    return this.state.links.map(element => (
      <li key={element.name} class="headerMenuElement">
        <a href={element.link}>{element.name}</a>
      </li>
    ));
  }
}

export default HeaderMenu;
