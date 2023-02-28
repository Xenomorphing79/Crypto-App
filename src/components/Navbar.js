import React from "react";
import { FaCoins, FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Link to="/">
      <div className="navbar d-flex justify-content-around">
        {!isHomePage && <FaArrowLeft className="icon" />}
        <div className="d-flex align-items-center mx-auto">
          <FaCoins className="icon" />
          <h1 className="ml-2 mb-0">
            Coin <span className="purple">Search</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
