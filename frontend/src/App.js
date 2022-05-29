import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//user
import CreateUser from "./components/IT20125202/user/CreateUser";
import UserProfile from "./components/IT20125202/user/UserProfile";
import Home from "./components/IT20127046/Home";
import UserLogin from "./components/IT20125202/user/UserLogin";
import NavBar from "./components/IT20125202/NavBar";

//student
import RegisterTopic from "./components/IT20125202/topic/RegisterTopic";
import ViewSubmissions from "./components/IT20125202/topic/ViewSubmissions";
import GroupChatStudent from "./components/IT20127046/GroupChat_Student";
import CreateStudentGroup from "../src/components/IT20131456/CreateStudentGroup";
import SviewEvaluation from "./components/IT20128036/user/SviewEvaluation";
import SviewSubmitionType from "./components/IT20128036/user/SviewSubmitionType";
import StudentGroup from "./components/IT20131456/StudentGroup";
import RequestSupervisor from "./components/IT20131456/RequestSupervisor";
import CreateRequest from "./components/IT20131456/CreateRequest";
import RequestSummary from "./components/IT20131456/RequestSummary";

//admin
import EditUser from "./components/IT20125202/user/EditUser";
import UserDetails from "./components/IT20125202/user/UserDetails";
import UserRoles from "./components/IT20125202/user/UserRoles";
import AdminHome from "./components/IT20125202/admin/AdminHome";
import ViewListAdmin from "./components/IT20125202/topic/ViewListAdmin";
import AdminLogin from "./components/IT20125202/admin/AdminLogin";
import DocumentTemp_Admin from "./components/IT20127046/DocumentTemp_Admin";
import DocumentTempCreate from "./components/IT20127046/DocumentTempCreate";
import DocumentTempUpdate from "./components/IT20127046/DocumentTempUpdate";
import AddSubmitionType from "./components/IT20128036/admin/addSubmitionType";
import SubmitionTypeList from "./components/IT20128036/admin/SubmitionTypeList";
import StudentGroup from "../src/components/IT20131456/StudentGroup";
import ViewStudentGroup from "../src/components/IT20131456/ViewStudentGroup";
import EditStudentGroup from "./components/IT20131456/EditStudentGroup";
import CreateSupervisorDetails from "./components/IT20131456/CreateSupervisorDetails";
import EditSupervisorDetails from "./components/IT20131456/EditSupervisorDetails";
import SupervisorDetails from "./components/It20131456/SupervisorDetails";

//panel
import ViewTopicList from "./components/IT20125202/topic/ViewTopicList";
import ViewTopic from "./components/IT20125202/topic/ViewTopic";
import UpdateTopic from "./components/IT20125202/topic/UpdateTopic";

//import AddEvaluation from "./components/IT20128036/AddEvaluation";
import AddEvaluation from "./components/IT20128036/admin/AddEvaluation";
import EvaluationList from "./components/IT20128036/admin/EvaluationList";
import GroupChatAdmin from "./components/IT20127046/GroupChat_Admin";

//supervisor

import image from "./images/download.jpg";
import CreateResponse from "./components/IT20131456/CreateResponse";







export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', background: 'white', height: '1000px' }}>  */}
            {/* <div className='container' style={{ background: 'white', height: '800px' }}> */}
            {/* ---------------Admin--------------- */}
            <Route path="/admin/home" exact component={AdminHome}></Route>
            <Route path="/admin/edituser/:id" exact component={EditUser}
            ></Route>
            <Route path="/admin/user/:id" exact component={UserDetails}></Route>
            <Route path="/admin/users" exact component={UserRoles}></Route>
            <Route path="/admin/topiclist"exact component={ViewListAdmin}></Route>
            <Route path="/admin/login" exact component={AdminLogin}></Route>
            {/* </div> */}
            {/* </div> */}

            <div
              className="jumbotron"
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "10px",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "auto",
              }}
            >
              <div
                className="container"
                style={{
                  background: "white",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                <NavBar />
                {/* ---------------User--------------- */}
                {/* IT20125202 */}
                <Route path="/user/login" exact component={UserLogin}></Route>
                <Route path="/user/profile"exact component={UserProfile}></Route>
                <Route path="/user/registration" exact component={CreateUser} ></Route>

                {/* IT20127046 */}
                <Route path="/" exact component={Home}></Route>
                <Route path="/documentTemp" exact component={DocumentTemp_Admin} ></Route>
                <Route path="/add/documentTemp" exact component={DocumentTempCreate} ></Route>
                <Route path="/edit/documentTemp/:id" exact component={DocumentTempUpdate} ></Route>
                <Route path="/chatAppStudent" exact component={GroupChatStudent} ></Route>
                <Route path="/chatAppAdmin" exact component={GroupChatAdmin}></Route>

                {/* ---------------Student--------------- */}
                {/* IT20125202 */}
                <Route path="/student/topic/registration" exact component={RegisterTopic}></Route>
                <Route path="/student/topics" exact component={ViewSubmissions}></Route>


                {/*IT20128036*/}
                <Route path="/sviewevaluation" component={SviewEvaluation} />
                <Route path="/sviewsubmitiontype"component={SviewSubmitionType}/>

                {/* ---------------Supervisor--------------- */}

                {/* ---------------Panel member--------------- */}
                {/* IT20125202 */}
                <Route path="/panel/topic/list" exact component={ViewTopicList}></Route>
                <Route path="/panel/topic/details/:id" exact component={ViewTopic}></Route>
                <Route path="/panel/topic/update/:id" exact component={UpdateTopic}></Route>

                {/*IT20128036*/}
                <Route path="/addEvaluation" component={AddEvaluation} />
                <Route path="/viewEvaluation" component={EvaluationList} />
                <Route path="/addSubmitiontype" component={AddSubmitionType} />
                <Route path="/Submitiontypelist"component={SubmitionTypeList} />

                {/* IT20131456 */}

                {/* ---------------Student--------------- */}
                <Route path="/student/group/add" component={CreateStudentGroup}></Route>
                
                <Route path="/supervisor/request" component={RequestSupervisor}></Route>
                <Route path="/create/request" component={CreateRequest}></Route>
                <Route path="/request/summary" component={RequestSummary}></Route>
                 
                 {/* ---------------Supervisor--------------- */}
                 <Route path="/create/feedback" component={CreateResponse}></Route>


                {/* ---------------Admin--------------- */}
                <Route path="/student/groups/view" exact  component={StudentGroup}></Route>
                <Route path="/student/group/view/:id" component={ViewStudentGroup}></Route>
                <Route path="/student/group/update/:id" component={EditStudentGroup}></Route>
                
                <Route path="/supervisor/add" component={CreateSupervisorDetails}></Route>
                <Route path="/supervisor/view" component={SupervisorDetails}></Route>
                <Route path="/supervisor/update/:id" component={EditSupervisorDetails}></Route>
                
              
              </div>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
