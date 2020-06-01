import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import Social from "./social";
import Legal from "./Legal";

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
            <div className="dark-mode-container">
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <>
                    <input
                      id="dm-checkbox"
                      type="checkbox"
                      aria-label="dark mode checkbox"
                      onClick={(e) =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    <label htmlFor="dm-checkbox" id="dm-checkbox-label"></label>
                  </>
                )}
              </ThemeToggler>
            </div>
          </div>
        </nav>
      </header>
      <React.Fragment>{children}</React.Fragment>
      <footer className="footer">
        <p className="footer-item">
          &copy; {year} David Stinson - <Legal />
        </p>
      </footer>
    </div>
  );
}
