import React, { Component, Fragment } from "react";
import "./reviews.css";
import { ButtonToolbar, Button } from "react-bootstrap";
import ReviewFormModal from "./ReviewFormModal";
import axios from "axios";

export default class Reviews extends Component {
  state = {
    newReviews: [],
    clicks: 0,
    disableBtn: false
  };

  componentDidMount() {
    axios.get("https://localhost:44346/api/Reviews").then(data =>
      this.setState({
        newReviews: data.data
      })
    );
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1, disableBtn: true });
  };

  render() {
    console.log(this.state.newReviews);
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

          {this.state.newReviews.map(review => {
            return (
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src="https://image.ibb.co/jw55Ex/def_face.jpg"
                        className="img img-rounded img-fluid"
                      />
                      <p className="text-secondary text-center">
                        {review.postedDate}
                      </p>
                    </div>
                    <div className="col-md-10">
                      <p>
                        <a
                          className="float-left"
                          href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                        >
                          <strong className="mr-5">{review.reviewerName} says: </strong>
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
                      <p className="mr-5">{review.reviewBody}</p>
                      <p>
                        <a className="float-right btn btn-outline-primary ml-2">
                          {" "}
                          <i className="fa fa-reply" /> Reply
                        </a>
                        <a
                          className="float-right btn text-white btn-danger"
                          onClick={this.IncrementItem}
                        >
                          {" "}
                          <i className="fa fa- {disableBtn ? disabled : ''" />{" "}
                          Like <small>{this.state.clicks}</small>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

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
