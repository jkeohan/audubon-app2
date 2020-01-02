import React from "react";
import "./header.style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header-link">
        <h2>Abudon Society</h2>
      </Link>
    </nav>
  )
}
export default Header