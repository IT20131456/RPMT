import React, { Component } from "react";
import axios from "axios";

export default class StudentGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentgroups: [],
    };
  }

  componentDidMount() {
    this.retrieveStudentGropus();
  }

  retrieveStudentGropus() {
    axios.get("http://localhost:5000/sgroups").then((res) => {
      if (res.data.success) {
        this.setState({
          studentgroups: res.data.existingstudentgroups,
        });

        console.log(this.state.studentgroups);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="float-left">
          &nbsp;
          <h2>Student Groups</h2>
          &nbsp;
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="bg-primary text-light ">
              <th scope="col">#</th>
              <th scope="col">Group ID</th>
              <th scope="col">Group Name</th>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.studentgroups.map((studentgroups, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{studentgroups.groupid} - {studentgroups.groupname} </td>
                <td>{studentgroups.groupname} </td>
                <td>
                  <tr>{studentgroups.studentid1}</tr>

                  <tr>
                    <td>{studentgroups.studentid2} </td>
                  </tr>

                  <tr>
                    <td>{studentgroups.studentid3} </td>
                  </tr>

                  <tr>
                    <td>{studentgroups.studentid4} </td>
                  </tr>
                </td>

                <td>
                  <tr>{studentgroups.studentname1}</tr>

                  <tr>
                    <td>{studentgroups.studentname2} </td>
                  </tr>

                  <tr>
                    <td>{studentgroups.studentname3} </td>
                  </tr>

                  <tr>
                    <td>{studentgroups.studentname4} </td>
                  </tr>
                </td>

                <td>{studentgroups.status} </td>

                <td >
                  <a className="btn btn-outline-primary" href={`/view/${studentgroups._id}`}>
                    <i className="fa fa-edit"></i>&nbsp;View
                  </a> &nbsp;
                  <a className="btn btn-outline-success" href="#">
                    <i className="fa fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-outline-danger" href="#">
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
