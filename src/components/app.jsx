import React from "react";
// import Login from './login';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Context from "../context/context";
// import App from './components/app';
import Login from "../components/login";
import Register from "../components/account/register";
import PageNotFound from "../components/page-not-found/pageNotFound";
import Home from "../components/menu/home";
import { UserContext } from "../context/userContext";

export default class App extends React.Component {
  state = {
    UserContext: new UserContext("state", "state.email", false)
    // login() {
    //   this.UserContext.login("mosh", "mosh.emaill").bind(UserContext);
    // }
  };

  login = () =>
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        name: "Alterado",
        email: "email"
      }
    }));

  componentWillMount() {
    console.log("App component loaded");
    console.log(this.props);
  }

  render() {
    return (
      <Context.Provider
        value={{
          // UserContext: new UserContext("instance.name", "instance.email", false)
          UserContext: this.props.userContext,
          UserActions: this.props.userActions
          // Login: this.login
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact={true}
              render={routerProps => <Login {...routerProps} />}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/home"
              render={func => <Home {...func} tag="menu" />}
            />
            <Route
              path="/credit-card"
              exact={true}
              render={func => <Home {...func} tag="creditCardList" />}
            />
            <Route
              path="/credit-card/edit"
              exact={true}
              render={func => <Home {...func} tag="creditCardEdit" />}
            />
            <Route
              path="/account-history"
              render={func => <Home {...func} tag="accountHistory" />}
            />
            <Route
              path="/contact"
              exact={true}
              render={func => <Home {...func} tag="contactList" />}
            />
            <Route
              path="/contact/edit"
              exact={true}
              render={func => <Home {...func} tag="contactEdit" />}
            />
            <Route
              path="/contact/transfer"
              exact={true}
              render={func => <Home {...func} tag="contactTransfer" />}
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    );
  }

  /*
        render(){
            return(
                <div className="">
                    <Login />
                </div>
            )
        }
        */
}
