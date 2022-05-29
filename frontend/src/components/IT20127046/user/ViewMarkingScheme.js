import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class ViewMarkingScheme extends Component {
  constructor() {
    super();
    this.state = {
      userType: "",
    };
  }

  componentDidMount() {
    document.title = "User Profile";
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
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/user/login" style={{textDecoration: 'none', color: 'white'}}>Login</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/user/registration" style={{textDecoration: 'none', color: 'white'}}>Register</a>
          </li>
        </ul>
      )

    let userContent;

    if(this.state.userType === 'Student') {
        userContent = (
            <p>Hello Student</p>
        )
    }
    else if(this.state.userType === 'Supervisor' || 'Panel Member') {
        userContent = (
            <p>Hello Supervisor</p>
        )
    }

    return (
        <div className="container">
            {localStorage.userToken ? (
                <p>User Login Successful</p>
            ) : loginRegLink}
        </div>
    )
  }
}
