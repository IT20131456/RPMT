import React, { Component } from "react";
import axios from "axios";
import SubmitionTypeList from "./SubmitionTypeList";

export default class AddSubmitionType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitionType: "",
      description: "",
      startDate: "",
      deadLine: "",
      checkPanel: "",
      submition: "",
      to: "kisharadilshan007@gmail.com",
      subject:"About New Submission",
      text:"On the website, added a new submission. please refer details, and informed students.  --Auto-Generated Email--",




    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      submitionType,
      description,
      startDate,
      deadLine,
      checkPanel,
      submition,
      to,
      subject,
      text
    } = this.state;

    const data = {
      submitionType: submitionType,
      description: description,
      startDate: startDate,
      deadLine: deadLine,
      checkPanel: checkPanel,
      submition: submition,
    };
    console.log(data);

    axios.post("http://localhost:5000/submitiontype/save", data).then((res) => {
      if (res.data.success) {
        alert("Added Successfully")
        this.setState({
          submitionType: "",
          description: "",
          startDate: "",
          deadLine: "",
          checkPanel: "",
          submition: "",
        });
      }
    });




     // Send data to Email Service
        const emailData = {
          
            to: to,
            subject: subject,
            text: text,



        };

        axios.post("http://localhost:5000/submitiont/email", emailData).then((res) => {
        if (res.data.success) {
          console.log("Sent Email Successfully")
          
          
        }
        });








  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="ms-4">
            <div className="row">
              <div className="col-sm-12 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">
                  Add New Submition Type
                </h1>
                <hr/>
                <form className="needs-validation" noValidate>
                  <div className="row">
                    <div className="col-sm-7">
                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label style={{ marginBottom: "5px" }}>
                          Submition Type
                        </label>

                        <select
                          className="form-select"
                          name="submitionType"
                          value={this.state.submitionType}
                          onChange={this.handleInputChange}
                        >
                          <option submitionType="not selected yet" selected>
                            Select Type
                          </option>
                          <option submitionType="Topic Assessment Document">
                            Topic Assessment Document
                          </option>
                          <option submitionType="Proposal Document">
                            Proposal Document
                          </option>
                          <option submitionType="Presentation Slides">
                            Presentation Slides
                          </option>
                          <option submitionType="Final Thesis">
                            Final Thesis
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label style={{ marginBottom: "5px" }}>
                          Allocated Marks{" "}
                        </label>
                      


                       <select
                          className="form-select"
                          name="startDate"
                          value={this.state.startDate}
                          onChange={this.handleInputChange}
                          
                        >
                          <option startDate="Select Marks">Select Marks</option>
                          <option startDate="50">20</option>
                          <option startDate="30">30</option>
                          <option startDate="50">50</option>
                      
                        </select>





                      </div>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Description</label>
                    <textarea
                      rows = "4" cols = "60"
                      className="form-control"
                      name="description"
                      placeholder="Enter Description...."
                      value={this.state.description}
                      onChange={this.handleInputChange}
                    />
                  </div>



                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Guidelines</label>
                    <textarea
                      rows = "3" cols = "60"
                      className="form-control"
                      name="submition"
                      placeholder="Enter Guidelines....."
                      value={this.state.submition}
                      onChange={this.handleInputChange}
                    />
                  </div>






                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label style={{ marginBottom: "5px" }}>Deadline</label>
                        <input
                          type="date"
                          className="form-control"
                          name="deadLine"
                          value={this.state.deadLine}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="form-group"
                        style={{ marginBottom: "15px" }}
                      >
                        <label style={{ marginBottom: "5px" }}>
                          Checking Panel
                        </label>

                        <select
                          className="form-select"
                          name="checkPanel"
                          value={this.state.checkPanel}
                          onChange={this.handleInputChange}
                        >
                          <option checkPanel="not selected yet" selected>
                            Select Panel
                          </option>
                          <option checkPanel="Panel 01">Panel 01</option>
                          <option checkPanel="Panel 02">Panel 02</option>
                          <option checkPanel="Panel 03">Panel 03</option>
                          <option checkPanel="Panel 04">Panel 04</option>
                          <option checkPanel="Panel 05">Panel 05</option>
                          <option checkPanel="Panel 06">Panel 06</option>
                        </select>
                      </div>
                    </div>
                  </div>

            

                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ margintop: "15px" }}
                    onClick={this.onSubmit}
                  >
                    <i className="far fa-check-square"></i>
                    &nbsp; Save
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>

          <div className="col-sm-6">
            <SubmitionTypeList></SubmitionTypeList>
          </div>
        </div>
      </div>
    );
  }
}
