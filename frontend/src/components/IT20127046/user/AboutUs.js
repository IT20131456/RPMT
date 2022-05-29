import React, { Component } from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class AboutUs extends Component {

    constructor() {
        super();
        this.state = {
          userType: ""
        };
      }
    
      componentDidMount() {
        document.title = "About Us";
        if (localStorage.userToken) {
          const usertoken = localStorage.userToken;
          const decoded = jwt_decode(usertoken);
          this.setState({
            userType: decoded.type,
          });
        }
      }

  render() {

    const loginRegLink = (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="/user/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="/user/registration"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register
            </a>
          </li>
        </ul>
      );
  
      // Internal CSS
      const headlineBar = {
        backgroundColor: "#DCDCDC",
        padding: "5px",
        marginBottom: "5px",
      };

    return (
      <div className="container">
        {localStorage.userToken ? (
          <div>
            <br />
            <h4>About Us</h4>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <div style={headlineBar}>
                    <h6>Note</h6>
                  </div>
                  <p>
                    Document Template Document Template Document Template
                    Document Template Document Template{" "}
                  </p>

                  <div style={headlineBar}>
                    <h6>Note</h6>
                  </div>
                  <br />

                  <div className="container">
                    
                  </div>
                </div>
                <div className="col-3">

                </div>
              </div>
            </div>
          </div>
        ) : (
          loginRegLink
        )}
      </div>
    )
  }
}
