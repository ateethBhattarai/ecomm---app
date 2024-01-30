import React from "react";
import "../../styles/Header.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div>
        <a href="https://www.subedisaroj.com.np">SAROJ</a>
      </div>
      <nav className="dashboard-nav">
        <ul>
          <li>Logout</li>
          <li>Theme</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
