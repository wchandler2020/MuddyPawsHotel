import React, { Fragment } from "react";

const Registration = () => {
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
                  <h2 className="py-3">Muddy Paws New Employee Registration</h2>
                  <p>
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concludaturque usu, facete detracto patrioque an per,
                    lucilius pertinacia eu vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-5 border">
              <h4 className="pb-4">Please fill with your details</h4>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="Full Name"
                      name="Full Name"
                      placeholder="Full Name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="Mobile"
                      name="Mobile"
                      placeholder="Mobile"
                      className="form-control"
                      required="required"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select id="inputState" className="form-control">
                      <option selected>What is your role...</option>
                      <option> Manager</option>
                      <option> Associate</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      id="Password"
                      name="Password"
                      placeholder="Password"
                      className="form-control"
                      required="required"
                      type="password"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      id="Confirm"
                      name="Confirm"
                      placeholder="Confirm Password"
                      className="form-control"
                      required="required"
                      type="password"
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <textarea
                      id="comment"
                      name="comment"
                      cols={40}
                      rows={5}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck2"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck2"
                        >
                          <small>
                            By clicking Submit, you agree to our Terms &amp;
                            Conditions, Visitor Agreement and Privacy Policy.
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                  >
                    Register
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

export default Registration;
