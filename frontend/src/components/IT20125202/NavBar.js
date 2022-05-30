import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';

class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      type: '',
    }
  }

  componentDidMount() {
    document.title = "NavBar"
    if (localStorage.userToken) {
      const usertoken = localStorage.userToken;
      const decoded = jwt_decode(usertoken);
      this.setState({
        // type: decoded.type.toString(),
        type: decoded.type,

      })
    }
  }

  logOut(e) {
    e.preventDefault();
    swal({
      title: "Are you sure you want to log out?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willLogout) => {
        if (willLogout) {
          swal("Logout successfully!", "", "success")
            .then((value) => {
              if (value) {
                localStorage.removeItem('userToken');
                this.props.history.push(`/user/login`)
                window.location.reload();
              }
            });
        } else {
          swal("Redirecting...");
        }
      });


  }

  render() {

    const loginRegLink = (
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a className="nav-link" aria-current="page" href="/user/login" style={{ textDecoration: 'none', color: 'white' }}>Login</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link" aria-current="page" href="/user/registration" style={{ textDecoration: 'none', color: 'white' }}>Register</a>
        </li>
      </ul>
    )

    let userLink;

    if (this.state.type === 'Student') {
      userLink = (
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/student/topics" style={{ textDecoration: 'none', color: 'white' }}>Topics</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/user/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</a>
          </li>
               
           <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" aria-current="page" href="/supervisor/request" style={{ textDecoration: 'none', color: 'white' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                Requests
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/supervisor/add">Add Supervisor Details</a></li>
            </ul>
          </li> 



          <li className='nav-item'>
            <a href='/user/login' onClick={this.logOut.bind(this)} className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
              Log out
            </a>
          </li>
        </ul>
      )
    }
    else if (this.state.type === 'Supervisor') {
      userLink = (
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/user/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</a>
          </li>
          <li className='nav-item'>
            <a href='/user/login' onClick={this.logOut.bind(this)} className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
              Log out
            </a>
          </li>
        </ul>
      )
    }
    else if (this.state.type === 'Panel Member') {
      userLink = (
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/user/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/panel/topic/list" style={{ textDecoration: 'none', color: 'white' }}>Topics</a>
          </li>
          <li className='nav-item'>
            <a href='/user/login' onClick={this.logOut.bind(this)} className="nav-link" style={{ textDecoration: 'none', color: 'white' }}>
              Log out
            </a>
          </li>
        </ul>
      )
    }


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#212F3C' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ color: 'white' }}>RPMS</a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">

              </span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarSupportedContent"
            >
              {/* <div className='navbar-nav ms-auto mb-2 mb-lg-0'></div> */}
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              </ul>
              {localStorage.userToken ? userLink : loginRegLink}

            </div>
          </div>
        </nav>
      </div>
    )
  }
}


export default withRouter(NavBar);