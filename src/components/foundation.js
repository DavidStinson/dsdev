import React from "react";
import { Link } from "gatsby";

import "./foundation.css"

const Foundation = ({ children }) => (
  <React.Fragment>
    <header>
      <nav className="nav">
        <Link exact to="/" className="">
          Portfolio
        </Link>
      </nav>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
);

export default Foundation;
