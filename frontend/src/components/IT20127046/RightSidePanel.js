import React, { Component } from "react";
import jwt_decode from "jwt-decode";

export default class RightSidePanel extends Component {
  constructor() {
    super();
    this.state = {
      userType: "",
    };
  }

  componentDidMount() {
    if (localStorage.userToken) {
      const usertoken = localStorage.userToken;
      const decoded = jwt_decode(usertoken);
      this.setState({
        userType: decoded.type,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="p-3 mb-2 bg-light text-dark">
          <p className="h6">Quick Links</p>
          <hr />
          <p>How to register topic</p>
          <p>How download templates</p>
          <p>More.....</p>
          <p>New</p>
        </div>

        <div className="p-3 mb-2 bg-light text-dark">
          <p className="h6">Quick Links</p>
          <hr />
          <p>How to register topic</p>
          <p>How download templates</p>
          <p>More.....</p>
          <p>New</p>
        </div>
      </div>
    );
  }
}
