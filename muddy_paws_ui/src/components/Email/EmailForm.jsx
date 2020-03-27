import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "Name", email: "email@example.com" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "template_id";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
  render() {
    return (
      <Fragment>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2 className="text-center">Muddy Paws Email System</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="test-mailing">
              <h1>Let's see if it works</h1>
              <div>
                <textarea
                  id="test-mailing"
                  name="test-mailing"
                  onChange={this.handleChange}
                  placeholder="Post some lorem ipsum here"
                  required
                  value={this.state.feedback}
                  style={{ width: "100%", height: "150px" }}
                />
              </div>
              <input
                type="button"
                value="Submit"
                className="btn btn--submit"
                onClick={this.handleSubmit}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
      // <Fragment>

      // </Fragment>
    );
  }
}

export default EmailForm;
