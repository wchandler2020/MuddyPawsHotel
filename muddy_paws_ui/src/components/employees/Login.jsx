import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import axios from "axios";

class Login extends Component {
  state = {
    Username: "",
    Password: "",
    isAuthenticated: false,
    userData: []
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.userData.map(newData => {
      
      console.log(newData.username)
      if(this.state.Username === newData.username && this.state.Password === newData.password ){
        this.props.history.push("/dashboard")
      }else{
        window.alert("Please double your login and password and try again.")
      }
    })
  }

  componentDidMount() {
    axios
      .get("https://localhost:44346/api/MuddyPawsEmployees")
      .then(response => this.setState({
        userData: response.data
      }))
  }

  

  authenticatedUser = e => {};

  render() {
    const { Username, Password, userData } = this.state;

    return (
      <Fragment>
        <section className="testimonial py-5 mt-5" id="testimonial">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 py-5 bg-danger text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img src={logo} style={{ width: "50%" }} />
                    <h2 className="py-3">Muddy Paws Employee Login</h2>
                    <p>
                      Tation argumentum et usu, dicit viderer evertitur te has.
                      Eu dictas concludaturque usu, facete detracto patrioque an
                      per, lucilius pertinacia eu vel.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Please enter your Login and Password</h4>
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        id="Username"
                        name="Username"
                        value={Username}
                        placeholder="User Name"
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        name="Password"
                        value={Password}
                        onChange={this.handleChange.bind(this)}
                        id="Password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <button
                      type="submit"
                      className="btn btn-outline-danger btn-lg ml-1"
                    >
                      Login
                    </button>
                  </div>
                  <p className="lead text-left mt-3">
                    Don't have an account? Please{" "}
                    <Link to="/registration" className="text-danger">
                      Register.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Login;
