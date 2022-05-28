//user registration
import React, { Component } from 'react';
// import NavBar from '../home/NavBar';
import { userRegister } from './UserFunctions';

// email pattern ->  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// mobile pattern ->  /^(\+\d{1,3}[- ]?)?\d{10}$/

export default class CreateUser extends Component {

  componentDidMount() {
    localStorage.removeItem('userToken');
    document.title = "User Registration"
  }

  constructor() {
    super();

    this.state = {
      idNumber: '',
      name: '',
      email: '',
      mobile: '',
      groupId: '',
      type: '',
      password: ''
    }

    //to handle the state changes
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      idNumber: this.state.idNumber,
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      groupId: this.state.groupId,
      type: this.state.type,
      password: this.state.password
    }

    let validated = true;
    if(user.idNumber === ''){
      validated = false;
      alert('Please enter a valid ID number');
    }
    else if(user.name === '' || user.name.length < 5){
      validated = false;
      alert('Please enter a valid name');
    }
    else if(!user.email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
      validated = false;
      alert('Please enter a valid email');
    }
    else if(!user.mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){
      validated = false;
      alert('Please enter a valid mobile number');
    }
    else if(user.type === ''){
      validated = false;
      alert('Please select user type');
    }
    else if(user.password === '' || user.password.length < 8){
      validated = false;
      alert('Password should contain at least 8 characters');
    }

    if(validated === true){
      userRegister(user).then(res => {

        if (res) {
          alert('Registered successfully!');
          this.props.history.push(`/user/login`)
          window.location.reload();
        }
      })
    }
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}

        <div className="container" style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px', height: '800px'}}>
          <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Research Project Management System</h1>
          <hr />
          <div className="col-md-8 mt-4 mx-auto">
            <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: 'center' }}>User Registration</h1>

            <form className='needs-validation' noValidate>
              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>ID number</label>
                <input
                  type="text"
                  className='form-control'
                  name="idNumber"
                  placeholder="Enter your ID number given by the Institute"
                  value={this.state.idNumber}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Name with Initials</label>
                <input
                  type="text"
                  className='form-control'
                  name="name"
                  placeholder="Enter your name as the name given to the Institute"
                  value={this.state.name}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input
                  type="email"
                  className='form-control'
                  name="email"
                  placeholder="Enter a email address that you are currently using"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Mobile Number</label>
                <input
                  type="text"
                  className='form-control'
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={this.state.mobile}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Type</label>
                <select name="type" value={this.state.type} onChange={this.onChange} className="form-select" required>
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
                  placeholder="Enter a new password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" type="submit" style={{ marginTop: '15px', width: 'cover' }} onClick={this.onSubmit}>
                  <i className='far fa-check-square'></i>
                  &nbsp; Register
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}