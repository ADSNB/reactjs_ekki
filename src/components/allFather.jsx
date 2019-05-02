import React, { Component } from "react";
import App from "./app";
import { UserContext } from "../context/userContext";
import Login from "./login";

class AllFather extends Component {
  state = {
    User: new UserContext("name.Alan", "email.adsnb", false)
    // Login : this.state.UserContext.Login
  };

  login = (name, email) => {
    console.log("alterado");
    const User = new UserContext(name, email, true);
    this.setState({ User });
  };

  render() {
    return <App userContext={this.state.User} userActions={this.login} />;
  }
}

export default AllFather;
