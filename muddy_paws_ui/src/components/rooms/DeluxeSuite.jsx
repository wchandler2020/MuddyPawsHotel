import React, { Component, Fragment } from "react";
import img6 from "../../images/image6.jpg";
import img7 from "../../images/image7.jpg";
import axios from "axios";

class DeluxeSuite extends Component {
  state = {
    Review: "",
    DeluxPricing: "105",
    BoardingPricing: "78",
    KittyPricing: "60",
    RemainingAvailable: "10"
  };

  componentDidMount() {
    axios.post("https://localhost:44346/api/Hotels", {
      DeluxPricing: this.state.DeluxPricing,
      BoardingPricing: this.state.BoardingPricing,
      KittyPricing: this.state.KittyPricing,
      RemainingAvailable: this.state.RemainingAvailable
    });
  }

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
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
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
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
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
