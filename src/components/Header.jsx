import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg header-navbar">
        <div className="container">
          <NavLink className="navbar-brand logo" to="/">
            IMDb
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/populor"
                >
                  Populor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/top_rated">
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/upcoming">
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
