import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mb-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">        
          <Link className="navbar-brand mx-auto" href="/">
            {/* <img src={logo} alt="prime lyrics logo" width={30} height={24} className="d-inline-block align-top" /> */}
            <h3 className="">PrimeLyrics</h3>
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">              
              <Link className="nav-link" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
