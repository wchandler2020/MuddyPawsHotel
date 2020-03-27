import React, { Fragment } from "react";
import logo1 from "../../images/logo.png";

import MapContainer from "./MapContainer";

let newDate = new Date();
let year = newDate.getFullYear();

const Footer = () => {
  return (
    <Fragment>
      <footer className="pt-4 my-md-5 pt-md-5 ml-5 mt-1">
        <div className="row">
          <div className="col-12 col-md">
            <img
              src={logo1}
              className="logo"
              alt=""
              style={{ height: 120, width: 120, marginRight: 25 }}
            />
            <small className="d-block mb-3 ml-4 text-muted">
              © Muddy Paws {year}
            </small>
          </div>
          <div className="col-6 col-md">
            <h5 className="font-weight-bold mb-2">Friends of Muddy Paws</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-muted"
                  href="www.frankiesfriends.org"
                  style={{ fontSize: 12 }}
                >
                  FRANKIE’S FRIENDS
                </a>
              </li>
              <li>
                <a className="text-muted" href="redrover.org/domestic" style={{ fontSize: 12 }}>
                  REDROVER RELIEF
                </a>
              </li>
              <li>
                <a className="text-muted" href="thepetfund.com" style={{ fontSize: 12 }}>
                  THE PET FUND
                </a>
              </li>
              <li>
                <a className="text-muted" href="livelikeroo.org" style={{ fontSize: 12 }}>
                  LIVE LIKE ROO FOUNDATION
                </a>
              </li>
              <li>
                <a className="text-muted" href="carecredit.com/vetmed" style={{ fontSize: 12 }}>
                  CARECREDIT
                </a>
              </li>
              <li>
                <a style={{ fontSize: 12 }}
                  className="text-muted"
                  href="blessedbonds@adoptpetshelter.org."
                >
                  BLESSED BONDS
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="font-weight-bold mb-2">More</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" style={{ fontSize: 12 }}href="irvingparkfoodpantry.com">
                  C.A.R.E. PET FOOD PANTRY
                </a>
              </li>
              <li>
                <a className="text-muted" href="reddoorshelter.org" style={{ fontSize: 12 }}>
                  RED DOOR ANIMAL SHELTER CAFÉ
                </a>
              </li>
              <li>
                <a className="text-muted" href="pawschicago.org" style={{ fontSize: 12 }}>
                  PAWS CHICAGO PET FOOD BANK
                </a>
              </li>
              <li>
                <a className="text-muted" href="#" style={{ fontSize: 12 }}>
                  CARE FOR REAL PET PANTRY
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md mr-5 mb-3">
            <h5 className="font-weight-bold mb-2">Location: Philadelphia, PA</h5>
            .
            <div style={{ height: 150, width: 150 }}>
              <MapContainer />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
