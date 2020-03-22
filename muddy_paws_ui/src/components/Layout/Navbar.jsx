import React from "react";
import logo1 from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white nav-default">
      <img
        src={logo1}
        className="logo ml-3"
        alt=""
        style={{ height: 150, width: 150, marginRight: 25 }}
      />
      <h5
        className="my-0 mr-md-auto font-weight-bold logo-text text-danger"
        style={{
          fontSize: 45,

          fontFamily: "Pangolin",
          letterSpacing: "0.1em"
          // fontWeight: "bold"
        }}
      >
        Muddy Paws Pet Resort
      </h5>

      <nav className="my-2 my-md-0 mr-md-3 main-nav">
        <Link className="p-2 text-dark" to="/">
          Home
        </Link>
        <Link className="p-2 text-dark" to="#">
          Pricing & Availability
        </Link>
      </nav>
      <Link className="btn btn-outline-danger" to="/login">
        Admin Log-in
      </Link>
    </div>
  );
};

export default Navbar;
