import React from "react";
import "../css/bootstrap.min.css";
import "../css/nav.css";
import "../css/app.css";
// Navbar

function Nav() {
  return (
    <a>
      <nav className="navbar nav">
        <img
          href="#"
          src="https://cdn.acroford.com/acroford_logo.webp"
          width="auto"
          height="75"
          alt="logo"
        />
        <div className="cs3">
          <a className="navbar-brand a mont" href="#">
            QR Code Generator
          </a>
          <p className="normal a">A Simple, Minimalist QR Code Generator</p>
        </div>
      </nav>
    </a>
  );
}

export default Nav;

