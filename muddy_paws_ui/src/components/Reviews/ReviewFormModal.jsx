import React, { Component, Fragment } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Moment from "moment";

class ReviewFormModal extends Component {
  state = {
    ReviewerName: "",
    ReviewBody: "",
    PostedDate: Moment()
      .locale("fr")
      .format("dddd Do MMMM YYYY HH:mm")
      .toString(),
    disableBtn: true
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.ReviewBody == null || this.state.ReviewerName == null) {
      window.alert("Please complete all Fields");
    } else if (this.state.ReviewBody.length < 15) {
      window.alert("All reviews must contain more than 15 characters");
    } else if (this.state.ReviewerName.length < 4) {
      window.alert("Reviewers name must contain at least 4 characters");
    } else {
      axios.post("https://localhost:44346/api/Reviews", {
        ReviewerName: this.state.ReviewerName,
        ReviewBody: this.state.ReviewBody,
        PostedDate: this.state.PostedDate,
        disableBtn: true
      });
    }
  }

  render(props) {
    const { ReviewBody, ReviewerName, disableBtn } = this.state;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Did Your Pet Have Fun?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Reviews Name
                </label>
                <input
                  id="ReviewerName"
                  name="ReviewerName"
                  value={ReviewerName}
                  placeholder="Your Name or Pet's Name"
                  className="form-control"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Write A Review
                </label>
                <textarea
                  id="ReviewBody"
                  name="ReviewBody"
                  value={ReviewBody}
                  placeholder="Tell us about your pet's experience..."
                  className="form-control"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <button
                type="submit"
                class="btn btn-outline-danger {disableBtn ? disabled : ''}"
              >
                Post
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="red" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReviewFormModal;
