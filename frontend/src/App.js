import React, { Component } from "react";
import { BrowserRouter,Route } from "react-router-dom";
import StudentGroup from "./components/StudentGroup";
import SupervisorDetails from "./components/SupervisorDetails"



export default class App extends Component {
  render() {
  return (
      <BrowserRouter>
     
        <div className="container">
         

          
          <Route path="/" exact component={StudentGroup}></Route>
          <Route path="/add" component={SupervisorDetails}></Route>
         
         
          
        </div>
        
      </BrowserRouter>
    );
  
}
};
