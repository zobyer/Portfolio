import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/navbar.css";

const NavBar: React.FunctionComponent = () => {
  const [hamburgerClass, setHamburgerClass] = useState("close");
  const [topNavBarClass, setTopNavBarClass] = useState("");
  const [bottomMenuClass, setBottomMenuClass] = useState("d-none");

  const hamburgerOnClick = () => {
    if (hamburgerClass === "close") {
      setHamburgerClass("open");
      setTopNavBarClass("top-navbar-expand");
      setBottomMenuClass("");
    } else {
      setHamburgerClass("close");
      setTopNavBarClass("top-navbar-enclose");
      setBottomMenuClass("d-none");
    }
  };

  return (
    <div className="App bg-grey">
      <div className={`py-4 px-4 ${topNavBarClass}`}>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Zobyer</h5>
          </div>

          <div className="hidden-xxs">
            <Link to="/" className="fg-grey1 text-decoration-none me-4">
              Home
            </Link>

            <Link to="/work" className="fg-grey1 text-decoration-none me-4">
              Work
            </Link>
            {/* <Link to="/" className="fg-grey1 text-decoration-none me-4">
              Project
            </Link>
            <Link to="/" className="fg-grey1 text-decoration-none">
              Contact
            </Link> */}
          </div>

          <div className="hamburger-container d-block d-sm-none">
            <div
              onClick={hamburgerOnClick}
              id="nav-icon2"
              className={hamburgerClass}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div></div>
        </div>

        <div className={`sm-navbar ${bottomMenuClass}`}>
          <ul className="list-style-none font-size-medium fg-grey font-size-medium1 p-0">
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
