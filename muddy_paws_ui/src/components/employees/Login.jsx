import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <section className="testimonial py-5 mt-5" id="testimonial">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 py-5 bg-danger text-white text-center ">
              <div className=" ">
                <div className="card-body">
                  <img
                    src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                    style={{ width: "30%" }}
                  />
                  <h2 className="py-3">Muddy Paws Employee Login</h2>
                  <p>
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concludaturque usu, facete detracto patrioque an per,
                    lucilius pertinacia eu vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-5 border">
              <h4 className="pb-4">Please enter your Login and Password</h4>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="UserName"
                      name="UserName"
                      placeholder="User Name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-lg ml-1"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
