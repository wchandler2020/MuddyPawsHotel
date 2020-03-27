import React, { Fragment } from "react";
import img1 from "../../images/image1.jpg";
import { Link } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import "./css/home.css";

const Home = () => {
  return (
    <Fragment>
      <section id="showcase">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="showcase-left">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="showcase-right">
                <h1>Muddy Paws</h1>
                <p class="text-left">
                  Nestled just in the South West Center City area you’ll find
                  our elite Philadelphia pet hotel - a place where four-legged
                  or winged guests can make new friends, participate in mentally
                  stimulating activities, and get pampered in our spa before
                  retreating to their own private room to lounge on plush
                  bedding.
                </p>
              </div>
              <br />
              <Link
                to="/petsform"
                className="btn btn-outline-danger btn-lg main-btn"
              >
                Register Your Pet Today!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center mt-5">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header bg-danger text-light">
                <h4 className="my-0 font-weight-normal">PET BOARDING</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $78 <small className="text-muted">/ day</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Perfectly sized for your pet</li>
                  <li>Two hour-long playgroups</li>
                  <li>Regular feedings</li>
                  <li>Administration of up to 5 medications</li>
                </ul>
                <Link
                  to="/PetBoarding"
                  type="button"
                  className="btn btn-lg btn-block btn-outline-danger"
                >
                  Book Pet Boarding
                </Link>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header bg-danger text-light">
                <h4 className="my-0 font-weight-normal ">Deluxe Suite</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $105 <small className="text-muted">/ day</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Room Service with up to 3 meal times</li>
                  <li>Private Room with tempered glass</li>
                  <li>Premium raised beds</li>
                  <li>All Day Play pass</li>
                </ul>
                <Link
                  to="/DeluxeSuite"
                  type="button"
                  className="btn btn-lg btn-block btn-outline-danger"
                >
                  Book Deluxe Suite
                </Link>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header bg-danger text-light">
                <h4 className="my-0 font-weight-normal">Kitty Condo</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $60 <small className="text-muted">/ day</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Room Service with up to 3 meal times</li>
                  <li>Upstairs & Downstairs living space</li>
                  <li>Plush Bedding</li>
                  <li>Deluxe Litter Box</li>
                </ul>
                <Link
                  to="/KittyCondo"
                  type="button"
                  className="btn btn-lg btn-block btn-outline-danger"
                >
                  BooK Kitty Condo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </Fragment>
  );
};

export default Home;
