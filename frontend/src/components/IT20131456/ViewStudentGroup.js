import React, { Component } from "react";
import axios from "axios";

export default class ViewStudentGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentgroup: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/sgroup/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          studentgroup: res.data.stugroup,
        });

        console.log(this.state.studentgroup);
      }
    });
  }
  render() {
    const {
      groupid,
      groupname,
      studentid1,
      studentname1,
      studentid2,
      studentname2,
      studentid3,
      studentname3,
      studentid4,
      studentname4,
      topic,
      supervisorname,
      cosupervisorname,
      panelmembername,
      status,
    } = this.state.studentgroup;

    return (
      <div className="container">
        <div className="float-left">
          &nbsp;
          <h2>View Student Group</h2>
          &nbsp;
        </div>

        <table className="table table-striped table-bordered">
          <thead>
          <tr className="text-light " style={{background:'rgb(0,0,128)'}}>  
              <th scope="col">Group ID</th>
              <th scope="col">Group Name</th>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Topic</th>
              <th scope="col">Supervisor</th>
              <th scope="col">Co-Supervisor</th>
              <th scope="col">Panel Member</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>{groupid} </th>
              <td>{groupname} </td>
              <td>
                <tr>{studentid1}</tr>

                <tr>
                  <td>{studentid2} </td>
                </tr>

                <tr>
                  <td>{studentid3} </td>
                </tr>

                <tr>
                  <td>{studentid4}</td>
                </tr>
              </td>

              <td>
                <tr>{studentname1}</tr>

                <tr>
                  <td>{studentname2}</td>
                </tr>

                <tr>
                  <td>{studentname3}</td>
                </tr>

                <tr>
                  <td>{studentname4} </td>
                </tr>
              </td>

              <td>{topic} </td>
              <td>{supervisorname} </td>
              <td>{cosupervisorname} </td>
              <td>{panelmembername} </td>
              <td>{status} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
