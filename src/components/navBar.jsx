import React from "react";
import { Link, NavLink } from "react-router-dom";
//import NavLink from "./../../node_modules/react-router-dom/es/NavLink";
//import Rentals from "./rentals";
import img from "./common/vidly.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      {/* <div className="container-fluid"> */}
      <Link className="navbar-brand" to="/">
        <img src={img} alt="" height={90} width={120} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link active" aria-current="page" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
          {/* <NavLink className="nav-link disabled">Disabled</NavLink> */}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
