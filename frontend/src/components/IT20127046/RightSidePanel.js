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

    let markingSchemeLink;

    if (this.state.userType === "Student") {
      markingSchemeLink = "/user/view/marking";
    } else if (this.state.userType === "Supervisor" || "Panel Member") {
      markingSchemeLink = "#";
    }

    return (
      <div>
        <div className="p-3 mb-2 bg-light text-dark">
          <p className="h6"><i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;&nbsp;Quick Links</p>
          <hr />

          <div className="p-2 mb-2 text-white" style={{ background: '#212F3C' }}>
            <a className="btn text-white" href={""} style={{ textDecoration: 'none' }}>
              <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Users
            </a>
          </div>
          <div className="p-2 mb-2 text-white" style={{ background: '#212F3C' }}>
            <a className="btn text-white" href="/student/group/view" style={{ textDecoration: 'none' }}>
            <i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;Student Groups
            </a>
          </div>
          <div className="p-2 mb-2 text-white" style={{ background: '#212F3C' }}>
            <a className="btn text-white" href={""} style={{ textDecoration: 'none' }}>
            <i class="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;Topics
            </a>
          </div>
          <div className="p-2 mb-2 text-white" style={{ background: '#212F3C' }}>
            <a className="btn text-white" href={""} style={{ textDecoration: 'none' }}>
            <i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Submissions
            </a>
          </div>
          <div className="p-2 mb-2 text-white" style={{ background: '#212F3C' }}>
            <a className="btn text-white" href={markingSchemeLink} style={{ textDecoration: 'none' }}>
            <i class="fa fa-table" aria-hidden="true"></i>&nbsp;&nbsp;Marking Schemes
            </a>
          </div>

        </div>

        <div className="p-3 mb-2 bg-light text-dark">
          <p className="h6"><i class="fa fa-comments" aria-hidden="true"></i>&nbsp;&nbsp;Group Chat</p>
          <hr />
          <div className="p-2 mb-2 bg-success text-white" >
            <a className="btn text-white" href={""} style={{ textDecoration: 'none' }}>
            <i class="fa fa-comments" aria-hidden="true"></i>&nbsp;&nbsp;Join Group Chat
            </a>
          </div>
        </div>
      </div>
    );
  }
}
