// admin - update users
import React, { Component } from 'react'
import AdminNavBar from '../admin/AdminNavBar';
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idNumber: "",
      name: "",
      email: "",
      groupId: "",
      type: "",
      password: ""
    }
  }

  handleInputChange = (e) => {

    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const { idNumber, name, email, groupId, type, password } = this.state;

    const data = {
      idNumber: idNumber,
      name: name,
      email: email,
      groupId: groupId,
      type: type,
      password: password
    }

    // console.log(data)

    axios.put(`http://localhost:5000/user/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("User details updated successfully");
        this.setState(
          {
            idNumber: "",
            name: "",
            email: "",
            groupId: "",
            type: "",
            // password: ""
          }
        )
      }
    })
  }

  componentDidMount() {

    document.title = "Edit user details"

    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          idNumber: res.data.user.idNumber,
          name: res.data.user.name,
          email: res.data.user.email,
          groupId: res.data.user.groupId,
          type: res.data.user.type,
          password: res.data.user.password
        })

        // console.log(this.state.user);
      }
    })
  }

  render() {

    return (
      <div>
        <AdminNavBar />

        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Update User</h1>

          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>ID number</label>
              <input
                type="text"
                className='form-control'
                name="idNumber"
                placeholder=""
                value={this.state.idNumber}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Name with Initials</label>
              <input
                type="text"
                className='form-control'
                name="name"
                placeholder=""
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Email</label>
              <input
                type="email"
                className='form-control'
                name="email"
                placeholder=""
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Grpup ID</label>
              <input
                type="text"
                className='form-control'
                name="groupId"
                placeholder=""
                value={this.state.groupId}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Type</label>
              <select name="type" value={this.state.type} onChange={this.handleInputChange} className="form-select" required>
                <option value="" >Select...</option>
                <option value="Panel Member" >Panel Member</option>
                <option value="Student">Student</option>
                <option value="Supervisor">Supervisor</option>
              </select>
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Password</label>
              <input
                type="password"
                className='form-control'
                name="password"
                placeholder=""
                value={this.state.password}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <button className='btn btn-success' type="submit" style={{ maeginTop: '15px' }} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp; Update
            </button>
            &nbsp;&nbsp;
            <a
              href="/admin/users"
              class="btn btn-outline-success"
              tabindex="-1"
              role="button"
              aria-disabled="true">
              Back
            </a>

          </form>

        </div>
      </div>
    )
  }
}
