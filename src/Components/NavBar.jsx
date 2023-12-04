import React from "react";

const NavBar = ({ onNavItemClick, reloadPage, searchNews }) => {
  return (
    <nav>
      <div className="main-nav container flex">
        <a href="/" onClick={reloadPage} className="company-logo">
          <h1 style={{ textDecoration: "none" }}>ABC NEWS</h1>
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li
              className="hover-link nav-item"
              onClick={() => onNavItemClick("ipl")}
              id="ipl"
            >
              IPL
            </li>
            <li
              className="hover-link nav-item"
              onClick={() => onNavItemClick("finance")}
              id="finance"
            >
              Finance
            </li>
            <li
              className="hover-link nav-item"
              onClick={() => onNavItemClick("politics")}
              id="politics"
            >
              Politics
            </li>
          </ul>
        </div>
        <div className="search-bar flex">
          <input
            type="text"
            className="news-input"
            id="search-text"
            placeholder="e.g. Science"
          />
          <button
            id="search-button"
            className="search-button"
            onClick={searchNews}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
