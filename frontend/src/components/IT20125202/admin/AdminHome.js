import React, { Component } from 'react'
import AdminNavBar from './AdminNavBar';

export default class AdminHome extends Component {
  componentDidMount(){
    document.title = "Admin Home"
  }

  render() {
    return (
      <div>
        <AdminNavBar />
        <div></div>
      </div>
    )
  }
}
