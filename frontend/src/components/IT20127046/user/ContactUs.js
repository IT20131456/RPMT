import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      userType: "",
      users: [],
      groupChatLink: "",
    };
  }

  componentDidMount() {
    document.title = "Contact Us";
    if (localStorage.userToken) {
      const usertoken = localStorage.userToken;
      const decoded = jwt_decode(usertoken);
      this.setState({
        userType: decoded.type,
      });
    }

    this.getUserEmails();
  }

  getUserEmails() {
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.existingUsers,
        });
      }
      //console.log(this.state.users);
    });
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

    // Group Chat Link
    let groupChatLink;

    if (this.state.userType === "Student") {
      groupChatLink = (
        <a className="btn btn-outline-success mb-4 p-4" href="/chatAppStudent">
          <i class="fa fa-comments fa-2xl" aria-hidden="true">
            &nbsp;Join Group Chat
          </i>
        </a>
      );
    } else if (
      this.state.userType === "Supervisor" ||
      this.state.userType === "Panel Member"
    ) {
      groupChatLink = (
        <a className="btn btn-outline-success mb-4 p-4" href="/chatAppAdmin">
          <i class="fa fa-comments fa-2xl" aria-hidden="true">
            &nbsp;Join Group Chat
          </i>
        </a>
      );
    }

    return (
      <div className="container">
        {localStorage.userToken ? (
          <div>
            <br />
            <h4>Contact Us</h4>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <div style={headlineBar}>
                    <h6>Chat with Group</h6>
                  </div>
                  <div className="container">
                    <p>Chat with your group</p>
                    <div className="">{groupChatLink}</div>
                  </div>

                  <div style={headlineBar}>
                    <h6>Support Message</h6>
                  </div>
                  <br />

                  <div className="container"></div>

                  <div style={headlineBar}>
                    <h6>Contact Info</h6>
                  </div>
                  <br/>
                  <div className="container">
                    {this.state.users.map((user, index) => {
                      if (
                        user.type === "Supervisor" ||
                        user.type === "Panel Member"
                      ) {
                        return (
                          <div key={index} className="p-3 mb-2 bg-light text-dark" style={{ "max-width": "400px"}}>
                            <p>
                                <i className="fa fa-user" aria-hidden="true"></i>&nbsp;{user.type} - {user.name}
                            </p>
                            <p> <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email - {user.email}</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <br />
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
        ) : (
          loginRegLink
        )}
      </div>
    );
  }
}
