import React from "react";
import "../../App.css";

const EmployeeDashboard = () => {
  return (
    <div className="container">
      {/* Jumbotron Header */}
      <header className="jumbotron my-4">
        <h1 className="display-3">Muddy Paws Dashboard!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
          eligendi, in quo sunt possimus non incidunt odit vero aliquid
          similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.
        </p>
        <a href="#" className="btn btn-outline-danger btn-lg">
          Register a new guest.
        </a>
      </header>
      {/* Page Features */}
      <div className="row text-center">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="http://placehold.it/500x325"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="http://placehold.it/500x325"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo magni sapiente, tempore debitis beatae culpa natus
                architecto.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="http://placehold.it/500x325"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="http://placehold.it/500x325"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo magni sapiente, tempore debitis beatae culpa natus
                architecto.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
