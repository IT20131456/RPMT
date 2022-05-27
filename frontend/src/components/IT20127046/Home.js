import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div align="center" className="col-sm-8 mx-auto">
            <h1>Research Project Management System</h1>
            <hr />
            <br />
          </div>
          <div className="row">
            <div className="col-9">
              <div className="container">
                <p className="mb-2 bg-light text-dark border border-secondary d-flex p-2">
                  Notice
                </p>
                <div className='mb-2 bg-light text-dark border border-light" d-flex p-2'>
                  <p>Notice 01</p>
                </div>
                <div className='mb-2 bg-light text-dark border border-light" d-flex p-2'>
                  <p>Notice 02</p>
                </div>
                <div className='mb-2 bg-light text-dark border border-light" d-flex p-2'>
                  <p>Notice 03</p>
                </div>
                <div className='mb-2 bg-light text-dark border border-light" d-flex p-2'>
                  <p>Notice 04</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className='mb-2 bg-light text-dark border border-light" d-flex p-2'>
                <div>
                  <p className="h6">Suport Links</p>
                  <br />
                  <p>How to register topic</p>
                  <p>How download templates</p>
                  <p>More.....</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
