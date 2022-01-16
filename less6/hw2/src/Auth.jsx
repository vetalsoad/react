import React, { Component } from "react";
import Spinner from "./Spinner";
import Login from "./Login";
import Logout from "./Logout";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      processing: false,
    };
  }

  handleLogin = () => {
    this.setState({
      processing: true,
    });
    setTimeout(() => {
      this.setState({
        processing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );

    return (
      <div className='panel'>
        {this.state.processing && <Spinner size={"20px"} />}
        {!this.state.processing && button}
      </div>
    );
  }
}

export default Auth;
