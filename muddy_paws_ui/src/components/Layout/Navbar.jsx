import React from "react";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white nav-default">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        Muddy Paws Pet Resort
      </h5>
      <nav className="my-2 my-md-0 mr-md-3 main-nav">
        <a className="p-2 text-dark" href="#">
          Features
        </a>
        <a className="p-2 text-dark" href="#">
          Enterprise
        </a>
        <a className="p-2 text-dark" href="#">
          Support
        </a>
        <a className="p-2 text-dark" href="#">
          Pricing
        </a>
      </nav>
      <a className="btn btn-outline-primary" href="#">
        Employee Log-in
      </a>
    </div>
  );
};

export default Navbar;
