import React from "react";
import { Link } from "gatsby";

import "./foundation.css";

const Foundation = ({ children }) => (
  <div className="foundation-grid">
    <header className="header container">
      <nav className="nav container">
        <Link to="/"className="site-name-hero">
          <div className="site-name-hero-container">David Stinson</div>
        </Link>
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
  </div>
);

export default Foundation;
