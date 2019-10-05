import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img src="data:image/png;base64,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" alt="google-logo"></img>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/library"
              className={window.location.pathname === "/library" ? "nav-link active" : "nav-link"}
            >
              My Library
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Nav;