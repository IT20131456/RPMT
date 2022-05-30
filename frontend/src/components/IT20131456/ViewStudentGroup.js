import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class ViewStudentGroup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      studentgroup: [],
      userType:"",
    };
  }
  componentDidMount() {

    if (localStorage.userToken) {
      const usertoken = localStorage.userToken;
      const decoded = jwt_decode(usertoken);
      this.setState({
        userType: decoded.type,
      });
      
    }

    console.log(this.state.userType);
    console.log("hello");

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
      supervisorname,
      cosupervisorname,
      panelmembername,
      status,
    } = this.state.studentgroup;

    return (

      <div className="container px-5 my-5">

        <div className="float-left my-3">
          &nbsp;
          <h2>View Student Group</h2>
          &nbsp;
        </div>
     <div style={{margin:"auto", width:"60%"}}>
        <div className="card border-dark my-3" >
          <div className="card-header text-center"><h3>{groupname} - {groupid}</h3></div>
            <div className="card-body ">
            <h4>
              <span style={{fontSize:"24px"}}>Student_1 : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {studentid1} - {studentname1} </span>
            </h4>

            <h4>
              <span style={{fontSize:"24px"}}>Student_2 : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {studentid2} - {studentname2} </span>
            </h4>

            <h4>
              <span style={{fontSize:"24px"}}>Student_3 : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {studentid3} - {studentname3} </span>
            </h4>

            <h4>
              <span style={{fontSize:"24px"}}>Student_4 : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {studentid4} - {studentname4} </span>
            </h4>
            <br/>
            <h4>
              <span style={{fontSize:"24px"}}>Supervisor :  </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {supervisorname} </span>
            </h4>

            <h4>
              <span style={{fontSize:"24px"}}>Cosupervisor : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {cosupervisorname} </span>
            </h4>

            <h4>
              <span style={{fontSize:"24px"}}>Panelmember : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {panelmembername} </span>
            </h4>
            <br/>
            <h4>
              <span style={{fontSize:"24px"}}>Status : </span>
              <span className = "text-primary" style={{fontSize:"19px"}}> {status} </span>
            </h4>       
            
            </div>
        </div>
        </div>   
  
      </div>

      
    );
  }
}
