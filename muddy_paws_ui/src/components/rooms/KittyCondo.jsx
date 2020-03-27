import React, { Component, Fragment } from "react";
import img11 from "../../images/image11.gif";
import img12 from "../../images/image12.jpg";
import logo1 from "../../images/logo.png";
import StripeCheckout from "react-stripe-checkout";

class KittyCondo extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron4 p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Pet Boarding Accomdations</h1>
            <p className="lead my-3">
              When you’re heading out of town, treat your furry family member to
              their own private room or suite at Wag Hotels!
            </p>
            <p className="lead mb-0"></p>
            <button type="button" class="btn btn-danger btn-lg">
              Book Now!
            </button>
            <StripeCheckout
              token={this.onToken}
              stripeKey="pk_test_PxZMuRYco84f49biOI5zgS1900rOYKYskd"
              description="Kitty Condo 60/night" // the pop-in header subtitle
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
                  <li>Room Service with up to 3 meal times</li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>Administration of up to 5 medications</li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>Upstairs & Downstairs living space</li>
                </p>
                <p className="card-text mb-auto text-left"></p>
              </div>
              <img
                className="card-img-right flex-auto d-none d-md-block"
                src={img11}
                alt="Card image cap"
                style={{ height: 400, width: 400 }}
              />
            </div>
            2 Kitty Cuddles
          </div>
          <div className="col-md-6">
            <div
              className="card flex-md-row mb-4 mt-2 box-shadow h-md-250"
              style={{ border: "none" }}
            >
              <div className="card-body d-flex flex-column align-items-start">
                <p className="card-text mb-auto text-left">
                  <li>Private Plush Bedding & Litter Box in each room.</li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>Unlimited Kitty Cuddles</li>
                </p>
              </div>
              <img
                className="card-img-right flex-auto d-none d-md-block"
                src={img12}
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

export default KittyCondo;
