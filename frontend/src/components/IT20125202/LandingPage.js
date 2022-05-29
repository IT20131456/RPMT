import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';

export default class LandingPage extends Component {
  componentDidMount(){
    document.title = "Home"
  }
  render() {
    return (
        <div className="container" style={{minHeight: '100vh'}}>
            <div className='jumbotron mt-5'>
            <div align="center" className='col-sm-8 mx-auto'>
                <hr/>
                <h1>Research Project Management System</h1>
                <hr/><br/><br/>
            </div>

            </div>
        </div>
    )
  }
}
