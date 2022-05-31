import { Toolbar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainContent() {
  return (
    <>
      <Toolbar />
      <nav className="navbar-expand-lg navbar-light bg-light p-2">
        <div className="row">
          <div className="col-8 d-flex align-items-center">
            <ul className="nav">
              <li className="nav-item">
                <Link to="Home" className="nav-link active text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="AboutUs" className="nav-link text-dark">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="ContactUs" className="nav-link text-dark">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="nav justify-content-end">
              <li className="nav-item mx-3">
                <Link to="Login" className="nav-link btn btn-outline-primary">
                  Login
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  to="Register"
                  className="nav-link btn btn-primary text-light"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MainContent;
