import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => {
    this.setState({
      status: "online",
    });
  }

  handleOffline = () => {
    this.setState({
      status: "offline",
    });
  }

  render() {
    return (
      <div
        className={`status ${
          this.state.status === "offline" ? " status_offline" : ""
        }`}
      >
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;
