import React, { Component } from 'react'
import AdminNavBar from './AdminNavBar';
import image from '../../../images/home.jpg';

export default class AdminHome extends Component {
  componentDidMount() {
    document.title = "Admin Home"
  }

  render() {
    return (
      <div className='container'>
        <br />
        <AdminNavBar />
        <br />
        <div className='container' style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <img src={image} class="img-fluid" alt="Research Project Management Tool"></img>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1 class="display-5" style={{ fontFamily: 'Stencil Std, fantasy' }}>Research Project Management Tool</h1>
          </div>
        </div>
        <br />
        <div>
          <div className='row' style={{ height: "150px" }}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-user" aria-hidden="true"></i>
                <h6>User Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/admin/users'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-users" aria-hidden="true"></i>
                <h6>Student Group Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={''}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-book" aria-hidden="true"></i>
                <h6>Topic Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/admin/topiclist'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
          </div>

          <div className='row' style={{ height: "150px" }}>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                <h6>Submission Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/submitiontype/add'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-file-text" aria-hidden="true"></i>
                <h6>Template Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/documentTemp'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
            <div className='col p-3 mb-2 m-2 bg-light text-dark rounded'>
              <center>
                <i class="fa fa-table" aria-hidden="true"></i>
                <h6>Marking Scheme Management</h6>
                <br />
                <a type="button" className="btn btn-outline-dark" href={'/view/marking'}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </center>
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}
