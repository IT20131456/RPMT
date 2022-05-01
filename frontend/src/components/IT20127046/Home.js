import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount(){
    document.title = "Home"
  }
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div align="center" className='col-sm-8 mx-auto'>
            <h1>Research Project Management System</h1>
            <hr/><br/><br/>
          </div>

        </div>
      </div>
    )
  }
}
