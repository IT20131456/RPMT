import React, { Component } from "react";
import HomeImage from "../../../public/images/HomeImage.jpg";
import RightSidePanel from "./RightSidePanel";

export default class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="container">
          <h4>Home</h4>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div>
                <img
                  src={HomeImage}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div>
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
              <RightSidePanel/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
