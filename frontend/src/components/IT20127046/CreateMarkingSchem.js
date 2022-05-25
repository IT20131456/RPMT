import React, { Component } from "react";
import axios from "axios";
import AdminNavBar from "../IT20125202/admin/AdminNavBar";

export default class CreateMarkingSchem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleName: "",
      assignment: "",
      criteria: "",
      allocateMark: "",
      markingSchemTitleID: "",
      markingCriteria: [],
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmitTitle = (e) => {
    e.preventDefault();
    const { moduleName, assignment } = this.state;

    const data = {
      moduleName: moduleName,
      assignment: assignment,
    };
    console.log(data);

    axios.post("http://localhost:5000/add/markingTitle", data).then((res) => {
      if (res.data.success) {
        console.log("Title Add Successfully" + res.data.saveTitle);

        this.setState({
          markingSchemTitleID: res.data.saveTitle,
        });
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { markingSchemTitleID, criteria, allocateMark } = this.state;

    const data = {
      markingSchemTitleID: markingSchemTitleID,
      criteria: criteria,
      allocateMark: allocateMark,
    };

    console.log(data);

    axios.post("http://localhost:5000/add/marking", data).then((res) => {
      if (res.data.success) {
        alert("Hotel Created Successfully");

        this.setState({
          criteria: "",
          allocateMark: "",
        });
      }
    });

    setTimeout(() => {
      this.getMarkingCriteria();
    }, 1000);
  };

  getMarkingCriteria() {
    const titleID = this.state.markingSchemTitleID;

    axios.get(`http://localhost:5000/markings/get/${titleID}`).then((res) => {
      if (res.data.success) {
        this.setState({
          markingCriteria: res.data.existingMarkingCriteria,
        });
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/criteria/delete/${id}`).then((res) => {
      alert("Hotel Deleted sucessfull");
      //this.retriveCriteria();
    });
  };

  // retriveCriteria() {
  //     axios.get("http://localhost:5000/get/markings").then((res) => {
  //         if (res.data.success) {
  //             this.setState({
  //                 markingCriteria: res.data.existingMarkingDetails,
  //             });

  //             console.log(this.state.markingCriteria);
  //         }
  //     });
  // }

  render() {
    return (
      <div className="container">
          <br/>
          <AdminNavBar />
          <br/>
        <h4>Create Marking Schem</h4>
        <hr />

        <form onSubmit={this.onSubmitTitle}>
          <h4>Set Marking Schem Title</h4>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="moduleName">Module</label>
              <input
                style={{ width: "400px" }}
                type="text"
                className="form-control"
                id="moduleName"
                name="moduleName"
                value={this.state.moduleName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="assignment">Assignment</label>
              <input
                style={{ width: "400px" }}
                type="text"
                className="form-control"
                id="assignment"
                name="assignment"
                value={this.state.assignment}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-secondary mt-2 mb-2">
            Set Title
          </button>
          <br />
          <br />
        </form>

        <form onSubmit={this.onSubmit}>
          <h4>Set Marking Schem Criteria</h4>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="criteria">Module</label>
              <input
                style={{ width: "400px" }}
                type="text"
                className="form-control"
                id="criteria"
                name="criteria"
                value={this.state.criteria}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="allocateMark">Assignment</label>
              <input
                style={{ width: "400px" }}
                type="text"
                className="form-control"
                id="allocateMark"
                name="allocateMark"
                value={this.state.allocateMark}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-2 mb-2">
            Add Criteria <i className="fa-thin fa-plus"></i>
          </button>
        </form>

        <br />
        <div className="container border border-secondary">
            <center>
                <h5>Marking Schem</h5>
                <h5>{this.state.moduleName}</h5>
                <h6>{this.state.assignment}</h6>
            </center>

          <table className="table ">
            <thead>
              <tr className="b ">
                <th scope="col"><center>No</center></th>
                <th scope="col"><center>Criteris</center></th>
                <th scope="col"><center>Allocate Mark</center></th>
              </tr>
            </thead>

            <tbody>
              {this.state.markingCriteria.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data.criteria}</td>
                  <td>{data.allocateMark} </td>

                  <td className="text-center">
                    <a className="btn btn-outline-success" href={``}>
                      <i className="fa fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-outline-danger"
                      href="#"
                      onClick={() => this.onDelete(data._id)}
                    >
                      <i className="fa fa-trash"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
