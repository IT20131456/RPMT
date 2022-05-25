import React, { Component } from 'react'
import AdminNavBar from './AdminNavBar';

export default class AdminHome extends Component {
  componentDidMount(){
    document.title = "Admin Home"
  }

  render() {
    return (
      <div className='container'>
        <br/>
        <AdminNavBar />
        <br/>
        <div>
          <div className='row' style={{height: "150px"}}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-user" aria-hidden="true"></i>
                <h6>User Management</h6>
                <br/>
                <a type="button" className="btn btn-outline-dark" href={''}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-users" aria-hidden="true"></i>
                <h6>Student Group Management</h6>
                <br/>
                <a type="button" className="btn btn-outline-dark" href={''}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-book" aria-hidden="true"></i>
                <h6>Topic Management</h6>
                <br/>
                <a type="button" className="btn btn-outline-dark" href={''}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
          </div>

          <div className='row' style={{height: "150px"}}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                <h6>Submission Management</h6>
                <br/>
                <a type="button" className="btn btn-outline-dark" href={''}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-file-text" aria-hidden="true"></i>
                <h6>Template Management</h6>
                <br/>
                <a type="button" className="btn btn-outline-dark" href={'/documentTemp'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-table" aria-hidden="true"></i>
                <h6>Marking Scheme Management</h6>
                <br/>
                <a type="button" className="btn btn-outline-dark"> href={''}<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
