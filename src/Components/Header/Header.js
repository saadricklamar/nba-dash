import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <header className="searchbar">
        <button>NBA</button>
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
