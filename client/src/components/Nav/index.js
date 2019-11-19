import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className="p-0">
        <div className="container">
          <div className="row">
            <p className=" my-2">powered by Google Books</p>
          </div>
          <div className="row">
            <h1 className="my-5">Book Search</h1>
          </div>
          <div className="row">
            <Link className="btn-nav mt-3 mb-3 text-center" to="/">
              Search
            </Link>
            <Link className="btn-nav mt-3 ml-3 mb-3 text-center" to="/saved">
              Saved
            </Link>
          </div>
          <div className="row"></div>
        </div>
      </nav>
    );
}

export default Nav;