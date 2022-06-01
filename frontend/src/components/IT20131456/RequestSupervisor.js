import React, { Component } from "react";
import axios from "axios";

export default class RequestSupervisor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      supervisordetails: [],
    };
  }

  componentDidMount() {
    this.retrieveSupervisorDetails();
  }

  retrieveSupervisorDetails() {
    axios.get("http://localhost:5000/supervisors").then((res) => {
      if (res.data.success) {
        this.setState({
          supervisordetails: res.data.existingsupervisordetails,
        });

        console.log(this.state.supervisordetails);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/supervisor/delete/${id}`).then((res) => {
      alert("Delete sucessfull");
      this.retrieveSupervisorDetails();
    });
  };

  filterData(supervisordetails,searchKey) {
    const result = supervisordetails.filter((supervisordetail) =>
      supervisordetail.supervisorid.toLowerCase().includes(searchKey)||
      supervisordetail.supervisorname.toLowerCase().includes(searchKey)||
      supervisordetail.researchfield.toLowerCase().includes(searchKey)||
      supervisordetail.email.toLowerCase().includes(searchKey)||

      supervisordetail.supervisorid.toUpperCase().includes(searchKey)||
      supervisordetail.supervisorname.toUpperCase().includes(searchKey)||
      supervisordetail.researchfield.toUpperCase().includes(searchKey)||
      supervisordetail.email.toUpperCase().includes(searchKey)||

      supervisordetail.supervisorid.includes(searchKey)||
      supervisordetail.supervisorname.includes(searchKey)||
      supervisordetail.researchfield.includes(searchKey)||
      supervisordetail.email.includes(searchKey)
    
      );
    this.setState({ supervisordetails: result });
  }
 

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/supervisors").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingsupervisordetails, searchKey);
      }      
    });
  };

  render() {
    return (
      <div className="container px-5 my-3">
        <div className="row">
          <div className="float-left col-lg-9 mt-2 mb-2">
            &nbsp;
            <h2>Supervisor Details</h2>
            &nbsp;            
          </div>         
        
          <div className="col-lg-3 mt-2 mb-2">
            &nbsp;
            <input
              className="form-control border border-dark"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
            &nbsp;
          </div>
        </div>
        &nbsp;

        <table className="table table-striped table-bordered">
          <thead className=" text-light" style={{ background: "#000080" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Supervisor ID</th>
              <th scope="col">Supervisor Name</th>
              <th scope="col">Research Field</th>
              <th scope="col">Email</th>       
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.supervisordetails.map((supervisordetails, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{supervisordetails.supervisorid}</td>
                <td>{supervisordetails.supervisorname}</td>
                <td>{supervisordetails.researchfield}</td>
                <td>{supervisordetails.email}</td>

               

                <td className=" text-center">                  
                  <a
                    className="btn btn-outline-primary"
                    href={`/create/request/${supervisordetails._id}`}
                  >
                   <i class="fa fa-paper-plane"></i>&nbsp;Send Request
                  </a>
                  &nbsp;                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
