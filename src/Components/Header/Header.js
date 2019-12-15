import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <header className="searchbar">
        <h1 className="nba">NBA-Dash</h1>
        <input type="text" name="search" placeholder=" Search any player" />
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </header>
    </div>
  );
};

export default Header;
