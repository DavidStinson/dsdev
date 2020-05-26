import React from "react";
import { Link } from "gatsby";

import Social from "./social";

import "./foundation.css";

export default function Foundation({ children }) {
  const year = new Date().getFullYear();
  return (
    <div className="foundation-grid">
      <header className="header container">
        <nav className="nav container">
          <Social />
          <div className="main-nav">
            <Link to="/" className="link" activeClassName="active">
              Portfolio & Contact
            </Link>
            <Link to="/blog/" className="link" activeClassName="active">
              Blog
            </Link>
          </div>
        </nav>
      </header>
      <React.Fragment>{children}</React.Fragment>
      <footer className="footer">
        <p className="footer-item">&copy; {year} David Stinson</p>
      </footer>
    </div>
  );
}
