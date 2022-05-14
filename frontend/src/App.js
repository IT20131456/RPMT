import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//user
import CreateUser from './components/IT20125202/user/CreateUser';
import UserProfile from './components/IT20125202/user/UserProfile';
import Home from './components/IT20127046/Home';
import UserLogin from './components/IT20125202/user/UserLogin';
import NavBar from './components/IT20125202/NavBar';

//student
import RegisterTopic from './components/IT20125202/topic/RegisterTopic';
import ViewSubmissions from './components/IT20125202/topic/ViewSubmissions';
import StudentGroup from "./components/IT20131456/StudentGroup";
import SupervisorDetails from "./components/It20131456/SupervisorDetails"

//admin
import EditUser from './components/IT20125202/user/EditUser';
import UserDetails from './components/IT20125202/user/UserDetails';
import UserRoles from './components/IT20125202/user/UserRoles';
import AdminHome from './components/IT20125202/admin/AdminHome';
import ViewListAdmin from './components/IT20125202/topic/ViewListAdmin';
import AdminLogin from './components/IT20125202/admin/AdminLogin';

//panel
// import ViewTopicList from './components/IT20125202/topic/ViewTopicList';
// import ViewTopic from './components/IT20125202/topic/ViewTopic';
// import UpdateTopic from './components/IT20125202/topic/UpdateTopic';

//supervisor

import image from './images/download.jpg'


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
            <Route path='/admin/edituser/:id' exact component={EditUser}></Route>
            <Route path='/admin/user/:id' exact component={UserDetails}></Route>
            <Route path='/admin/users' exact component={UserRoles}></Route>
            <Route path='/admin/topiclist' exact component={ViewListAdmin}></Route> 
            <Route path='/admin/login' exact component={AdminLogin}></Route>
            {/* </div> */}
            {/* </div> */}

            <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '900px' }}>

              <div className='container' style={{ background: 'white', height: '800px', padding: '0px 0px 10px 0px' }}>
                <NavBar />
                {/* ---------------User--------------- */}
                {/* IT20125202 */}
                <Route path="/user/login" exact component={UserLogin}></Route>
                <Route path='/user/profile' exact component={UserProfile}></Route>
                <Route path='/user/registration' exact component={CreateUser}></Route>

                {/* IT20127046 */}
                <Route path="/" exact component={Home}></Route>

                {/* ---------------Student--------------- */}
                {/* IT20125202 */}
                <Route path='/student/topic/registration' exact component={RegisterTopic}></Route>
                <Route path='/student/topics' exact component={ViewSubmissions}></Route>

                {/* IT20131456 */}
                <Route path="/studentgroup" exact component={StudentGroup}></Route>
                <Route path="/add" component={SupervisorDetails}></Route>

                {/* ---------------Supervisor--------------- */}


                {/* ---------------Panel member--------------- */}
                {/* IT20125202 */}
                {/* <Route path='/panel/topic/list' exact component={ViewTopicList}></Route> */}
                {/* <Route path='/panel/topic/details/:id' exact component={ViewTopic}></Route> */}
                {/* <Route path='/panel/topic/update/:id' exact component={UpdateTopic}></Route> */}

              </div>
            </div>
          </Switch>
        </div>
      </BrowserRouter>

    )
  }

}




