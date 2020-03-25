import React, { Component, Fragment } from "react";
import img3 from "../../images/image3.jpg";
import img4 from "../../images/image4.jpg";
import img5 from "../../images/image5.jpg";

class PetBoarding extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron2 p-3 p-md-5 text-white rounded bg-dark">
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
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <p className="card-text mb-auto text-left">
                  <li>Completely customized cat and dog daycare</li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>Mentally stimulating seasonal camps and themed events</li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>Completely customized cat and dog daycare</li>
                </p>
                <p className="card-text mb-auto text-left"></p>
              </div>
              <img
                className="card-img-right flex-auto d-none d-md-block"
                src={img4}
                alt="Card image cap"
                style={{ height: 400, width: 400 }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <p className="card-text mb-auto text-left">
                  <li>Luxurious spa treatments and breed specific grooming</li>
                </p>
                <p className="card-text mb-auto text-left">
                  <li>
                    Elite boarding accommodations including plush bedding and
                    room service
                  </li>
                </p>
              </div>
              <img
                className="card-img-right flex-auto d-none d-md-block"
                src={img5}
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

export default PetBoarding;
