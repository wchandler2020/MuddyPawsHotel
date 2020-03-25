import React, { Component, Fragment } from "react";
import "./reviews.css";
import { ButtonToolbar, Button } from "react-bootstrap";
import ReviewFormModal from "./ReviewFormModal";
import axios from "axios";

export default class Reviews extends Component {
  state = {
    addModalShow: false
  };

  render() {
    let addModalClose = () =>
      this.setState({
        addModalShow: false
      });

    return (
      <Fragment>
        <div className="container mt-4">
          <h3
            className="text-center"
            style={{ fontSize: 48, marginTop: 60, marginBottom: 30 }}
          >
            What They Are Saying About Us...
          </h3>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <img
                    src="https://image.ibb.co/jw55Ex/def_face.jpg"
                    className="img img-rounded img-fluid"
                  />
                  <p className="text-secondary text-center">15 Minutes Ago</p>
                </div>
                <div className="col-md-10">
                  <p>
                    <a
                      className="float-left"
                      href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                    >
                      <strong>Maniruzzaman Akash</strong>
                    </a>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                    <span className="float-right">
                      <i className="text-warning fa fa-star" />
                    </span>
                  </p>
                  <div className="clearfix" />
                  <p>
                    Lorem Ipsum is simply dummy text of the pr make but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                    <a className="float-right btn btn-outline-primary ml-2">
                      {" "}
                      <i className="fa fa-reply" /> Reply
                    </a>
                    <a className="float-right btn text-white btn-danger">
                      {" "}
                      <i className="fa fa-heart" /> Like
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-group d-flex" role="group">
            <ButtonToolbar className="mt-1">
              <Button
                variant="outline-danger"
                onClick={() =>
                  this.setState({
                    addModalShow: true
                  })
                }
              >
                Add A Review
              </Button>
              <ReviewFormModal
                show={this.state.addModalShow}
                onHide={addModalClose}
              />
            </ButtonToolbar>
          </div>
        </div>
      </Fragment>
    );
  }
}
