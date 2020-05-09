import React from "react";
import { Link } from "gatsby";

import "./foundation.css";

const Foundation = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <nav className="nav">
        <Link className="site-name-hero">
          <div className="site-name-hero-container">David Stinson</div>
        </Link>
        <div className="main-nav">
          <Link exact to="/" className="link" activeClassName="active">
            Portfolio & Contact
          </Link>
          <Link exact to="/blog" className="link" activeClassName="active">
            Blog
          </Link>
        </div>
      </nav>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
);

export default Foundation;
