import React from "react";
import { Link } from "react-router-dom";
import * as Request from "request";
import Error from "./modal/error";
import Context from "../context/context";
import ContactEdit from "./contact/edit";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      modal: false,
      tittle: "",
      description: [],
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, modal: false });
  }

  handleSubmit(e) {
    console.log("Login click");
    var options = {
      url: `http://localhost:3000/account?email=${this.state.email}&password=${
        this.state.password
      }`,
      headers: { token: 123456 }
    };

    Request(options, (error, response, body) => {
      if (response.statusCode === 200) {
        // Jason web Token JWT for login authentication and store in localstore like token
        localStorage.setItem("loggedUser", this.state.email);
        this.props.history.push("/home");
      } else {
        console.log(response.statusCode);
        this.setState({
          modal: true,
          tittle: `${response.statusCode} - ${response.statusMessage}`,
          description: JSON.parse(body).Description,
          error: error ? error : ""
        });
      }
    });
    e.preventDefault();
  }

  handleForgetPassword() {
    console.log("Forget password click");
  }

  handleRegisterNow() {
    console.log("Register now click");
  }

  componentWillMount() {
    console.log("Login component loaded");
  }

  onC(user) {
    console.log(user);
    user("alan", "alan.email");
    console.log("ola");
  }

  ok = UserContext => {
    console.log(UserContext);
    UserContext.login("alan", "novoemail");
    console.log(UserContext);
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className="app flex-row align-items-center">
            <div className="container">
              <div className="justify-content-center row">
                <div className="col-md-8">
                  <div className="card-group">
                    <div className="p-4 card">
                      <div className="card-body">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                          <h1>Login</h1>

                          <p className="text-muted">
                            Sign In to your account {context.UserContext.name}{" "}
                            {context.UserContext.email} -{" "}
                            {context.UserContext.isLoggedIn}
                          </p>

                          <div className="mb-3 input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="far fa-user" />
                              </span>
                            </div>
                            <input
                              onChange={this.handleChange}
                              name="email"
                              placeholder="E-mail"
                              autoComplete="E-mail"
                              className="form-control"
                            />
                          </div>

                          <div className="mb-4 input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fas fa-key" />
                              </span>
                            </div>
                            <input
                              onChange={this.handleChange}
                              name="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              type="password"
                              className="form-control"
                            />
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <button
                                type="submit"
                                className="px-4 btn btn-primary"
                              >
                                Login
                              </button>
                            </div>
                            <div className="text-right col-6">
                              <button
                                type="button"
                                onClick={this.handleForgetPassword.bind(this)}
                                className="px-0 btn btn-link"
                              >
                                Forgot password?
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="text-white bg-primary py-5 d-md-down-none card">
                      <div className="text-center card-body">
                        <div show={this.state.show}>
                          <h2>Sign up</h2>
                          <p>Welcome to Ekki.</p>
                          <p>
                            If you are not a customer yet please feel free to
                            register yourself!
                          </p>
                          <Link to="/register">
                            <button
                              onClick={this.handleRegisterNow}
                              tabIndex="-1"
                              className="mt-3 btn btn-primary active"
                            >
                              Register Now!
                            </button>
                          </Link>
                          <button
                            onClick={() => console.log(context.UserActions)}
                          >
                            Atualiza
                          </button>
                          <button
                            onClick={() =>
                              context.UserActions("name.jonathan", "email.j@")
                            }
                          >
                            Atualiza Comp
                          </button>
                          {/* <button onClick={() => this.ok(context.UserContext)}>
                            Atualiza Comp
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Error
              visible={this.state.modal}
              tittle={this.state.tittle}
              message={this.state.description}
            />
          </div>
        )}
      </Context.Consumer>

      // console.log('login form rendered');
    );
  }
}
