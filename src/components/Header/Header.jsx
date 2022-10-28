import React, { useState } from "react";
import "./Header.scss";
import Header_logo from "../../assets/icons/Header_logo.svg";
import buttonTheme from "../../assets/icons/buttonTheme.svg";
function Header({ fetchData, handleToggleTheme }) {
  const [searchCity, setSearchCity] = useState("");
  const handleChangeSearchInput = (e) => {
    setSearchCity(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchData(searchCity)
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={Header_logo} alt="logo" /> react weather
      </div>
      <div className="search-toggle">
        <button onClick={handleToggleTheme}>
          <img src={buttonTheme} alt="смена темы" />
          </button>
        <input
          placeholder="Могилёв"
          onChange={handleChangeSearchInput}
          onKeyDown={handleKeyDown}
          value={searchCity}
        />
      </div>
    </div>
  );
}

export default Header;
