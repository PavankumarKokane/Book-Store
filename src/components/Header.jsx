import React from "react";
import Logo from "../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo-div">
            <Link to="/">
              <img loading="eager" src={Logo} width={200} height={92} alt="Logo" />
            </Link>
          </div>
          {/* <div className="nav-links">
            <ul>
              <li>
                <Link to="/search">Search By Name</Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
