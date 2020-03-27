import React, { Component, Fragment } from "react";
import img6 from "../../images/image6.jpg";
import img7 from "../../images/image7.jpg";
import logo1 from "../../images/logo.png";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

class DeluxeSuite extends Component {
  state = {
    CurrentVistors: ""
  };

  render() {
    return (
      <div>
        <div className="jumbotron3 p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Pet Boarding Accomdations</h1>
            <p className="lead my-3">
              When you’re heading out of town, treat your furry family member to
              their own private room or suite at Wag Hotels!
            </p>
            <p className="lead mb-0"></p>

            <button type="button" class="btn btn-danger btn-lg">
              Book Now! <span class="text-bold">6/10 remain</span>
            </button>
            <StripeCheckout
              token={this.onToken}
              stripeKey="pk_test_PxZMuRYco84f49biOI5zgS1900rOYKYskd"
              description="The Deluxe Suite 105/night" // the pop-in header subtitle
              image={logo1}
              billingAddress
              shippingAddress
              amount={105 * 100}
              name="Muddy Paws"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div
              className="card flex-md-row mb-4 mt-2 box-shadow h-md-250"
              style={{ border: "none" }}
            >
              <div className="card-body d-flex flex-column align-items-start">
                <p className="card-text mb-auto text-left">
                  <li>
                    Luxury boarding accommodations in climate-controlled rooms
                    with plush hypoallergenic bedding
                  </li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>
                    Ultra Suites furnished with a human-sized bed, TV,
                    customizable music selections & reat dispenser
                  </li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>24/7 WagCam, so pet parents can check-in anytime</li>
                </p>
                <p className="card-text mb-auto text-left"></p>
              </div>
              <img
                className="card-img-right flex-auto d-none d-md-block"
                src={img6}
                alt="Card image cap"
                style={{ height: 400, width: 400 }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card flex-md-row mb-4 mt-2 box-shadow h-md-250"
              style={{ border: "none" }}
            >
              <div className="card-body d-flex flex-column align-items-start">
                <p className="card-text mb-auto text-left">
                  <li>
                    Deluxe programs customized to your pet’s energy level and
                    desired socialization (all at the same daily rate!)
                  </li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>Luxurious grooming and spa treatments</li>
                </p>
              </div>
              <img
                className="card-img-right flex-auto d-none d-md-block"
                src={img7}
                alt="Card image cap"
                style={{ height: 400, width: 400 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeluxeSuite;
