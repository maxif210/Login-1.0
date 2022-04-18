import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getPhotosByKeyword } from "../helpers/endpoints";
import { useState } from "react";
import useGeneral from "./../hooks/useGeneral";

const Navbar = () => {
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/Layout'}>
            Dashboard
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" aria-current="page"to={"/Layout"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
              <NavLink to={"/search"} className="nav-link">
                  Search
                </NavLink>
                </li>

              <li className="nav-item active">
                <NavLink to={"/"} className="nav-link">
                  Logout
                </NavLink>

                
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
