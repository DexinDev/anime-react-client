import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="searchWrapper">
        <form>
          <input type="text" placeholder="Поиск" className="searchInput" />
        </form>
      </div>
    );
  }
}

export default Search;
