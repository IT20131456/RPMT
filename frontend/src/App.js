import React, { Component } from "react";
import { BrowserRouter,Route } from "react-router-dom";
import StudentGroup from "./components/IT20131456/StudentGroup";
import SupervisorDetails from "./components/It20131456/SupervisorDetails"



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
