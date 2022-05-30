import React, { Component } from "react";
import axios from "axios";

export default class RequestSummary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      requestsummary: [],
    };
  }

  componentDidMount() {
    this.retrieverequestsummary();
  }

  retrieverequestsummary() {
    axios.get("http://localhost:5000/requests").then((res) => {
      if (res.data.success) {
        this.setState({
          requestsummary: res.data.existingsupervisorrequests,
        });

        console.log(this.state.requestsummary);
      }
    });
  }

   render() {
    return (
      <div className="container px-5 my-3">
        <div className="row">
          <div className="float-left col-lg-9 mt-2 mb-2">
            &nbsp;
            <h2>Request Summary</h2>
            &nbsp;            
          </div>         
        </div>

        <table className="table table-striped table-bordered">
          <thead className=" text-light" style={{ background: "#000080" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Feedback</th>
              <th scope="col">Status</th>      
            </tr>
          </thead>

          <tbody>
            {this.state.requestsummary.map((requestsummary, index) => (
              <tr >
                <th>{index + 1}</th>
                <td>{requestsummary.name}</td>
                <td>{requestsummary.position}</td>
                <td>{requestsummary.feedback}</td>
                <td className="text-center"><b><h5>{requestsummary.status}</h5></b></td>            

              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}