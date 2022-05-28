// user- view user profile
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import swal from 'sweetalert';

export default class UserProfile extends Component {

    constructor() {
        super();
        this.state = {
            _id: '',
            idNumber: '',
            name: '',
            email: '',
            mobile: '',
            groupId: '',
            researchfield: '',
            panel: '',
            dateRegistered: '',
            type: '',
            password: '',
            enteredPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
    }

    componentDidMount() {
        document.title = "User Profile"

        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);

        this.setState({
            _id: decoded._id,
        })
        const id = decoded._id
        this.retrieveProfile(id);

        // if(this.state.type === 'Supervisor' && this.state.researchfield === ''){
        //     alert('Please update your profile with your research interest')
        // }
    }

    retrieveProfile(id) {
        axios.get(`http://localhost:5000/user/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    idNumber: res.data.user.idNumber,
                    name: res.data.user.name,
                    email: res.data.user.email,
                    mobile: res.data.user.mobile,
                    groupId: res.data.user.groupId,
                    researchfield: res.data.user.researchfield,
                    panel: res.data.user.panel,
                    dateRegistered: res.data.user.dateRegistered,
                    type: res.data.user.type,
                    password: res.data.user.password
                })
                // console.log(this.state.user);
            }
        })
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

        const { _id, idNumber, name, email, mobile, groupId, researchfield, panel, type, password } = this.state;

        let data = {
            idNumber: idNumber,
            name: name,
            email: email,
            mobile: mobile,
            groupId: groupId,
            researchfield: researchfield,
            panel: panel,
            type: type,
            password: password,
        }
        // console.log(data)
        let validated = true;
        if (data.name === '' || data.name.length < 5) {
            validated = false;
            swal({
                title: "",
                text: "Name cannot be empty",
                icon: "warning",
            });
        }
        else if (!data.email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
            validated = false;
            swal({
                title: "",
                text: "Please enter a valid email",
                icon: "warning",
            });
        }
        else if (!data.mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
            validated = false;
            swal({
                title: "",
                text: "Please enter a valid mobile number",
                icon: "warning",
            });
        }
        else if (this.state.type === 'Supervisor' && data.researchfield === '') {
            validated = false;
            swal({
                title: "",
                text: "Please add your research field",
                icon: "warning",
            });
        }
        else if(this.state.confirmNewPassword != this.state.newPassword){
            validated = false;
            swal({
                title: "",
                text: "Please check the new password and repeated new password",
                icon: "warning",
            });
        }
        else if (this.state.enteredPassword != '' && this.state.newPassword === '') {
            validated = false;
            swal({
                title: "",
                text: "Please enter a new password",
                icon: "warning",
            });
        }
        else if (this.state.enteredPassword === '' && this.state.newPassword != '') {
            validated = false;
            swal({
                title: "",
                text: "Please enter your existing password",
                icon: "warning",
            });
        }

        // console.log(data)

        if (validated) {
            if (this.state.enteredPassword == '' || this.state.newPassword === '') {
                axios.put(`http://localhost:5000/user/update/${_id}`, data).then((res) => {
                    if (res.data.success) {
                        swal("Profile updated successfully!", "", "success")
                            .then((value) => {
                                if (value) {
                                    this.props.history.push(`/user/profile`)
                                    window.location.reload();
                                }

                            });
                    }
                })
                    .catch(err => {
                        console.log(err);
                        swal({
                            title: "",
                            text: "Something went wrong! Please check the entered passwords",
                            icon: "warning",
                        });
                    })
            }
            else {
                data.enteredPassword = this.state.enteredPassword;
                data.newPassword = this.state.newPassword;

                axios.put(`http://localhost:5000/user/updateprofile/${_id}`, data).then((res) => {
                    if (res.data.success) {
                        swal("Profile updated successfully!", "", "success")
                            .then((value) => {
                                if (value) {
                                    this.props.history.push(`/user/profile`)
                                    window.location.reload();
                                }

                            });
                    }
                })
                    .catch(err => {
                        console.log(err);
                        swal({
                            title: "",
                            text: "Something went wrong! Please check the entered passwords",
                            icon: "warning",
                        });
                    })
            }
        }
    }

    render() {
        return (
            <div className="container" style={{ padding: '50px 50px 50px 50px', background: 'white', minHeight: '100vh' }}>
                <div className='col-lg-9 mt-2 mb-2'>
                    <h1>Profile</h1>
                </div>
                <hr />
                <div className='col-md-8 mt-4 mx-auto'>
                    {/* <h1 className='h3 mb-3 font-weight-normal'>Research Topic Registration</h1> */}
                    <br />
                    <form className='needs-validation' noValidate>
                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Registration Number</label>
                            <input
                                type="text"
                                className='form-control'
                                name="idNumber"
                                value={this.state.idNumber}
                                onChange={this.handleInputChange}
                                readOnly
                            />
                        </div>

                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Name</label>
                            <input
                                type="text"
                                className='form-control'
                                name="name"
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
                                value={this.state.email}
                                onChange={this.handleInputChange}

                            />
                        </div>

                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Mobile Number</label>
                            <input
                                type="phone"
                                className='form-control'
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.handleInputChange}

                            />
                        </div>

                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Registered Date</label>
                            <input
                                type="text"
                                className='form-control'
                                name="dateRegistered"
                                value={this.state.dateRegistered}
                                onChange={this.handleInputChange}
                                readOnly
                            />
                        </div>
                        {this.state.type === 'Student' &&
                            <span>
                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Group ID</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="groupId"
                                        value={this.state.groupId}
                                        onChange={this.handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </span>}

                        {this.state.type === 'Supervisor' &&
                            <span>
                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Research Field</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="researchfield"
                                        value={this.state.researchfield}
                                        onChange={this.handleInputChange}

                                    />
                                </div>
                            </span>}

                        {this.state.type === 'Panel Member' &&
                            <span>
                                <div className='form-group' style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }}>Panel</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="panel"
                                        value={this.state.panel}
                                        onChange={this.handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </span>}

                        <br /><br />
                        <h6>Change Password</h6>
                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Existing password</label>
                            <input
                                type="password"
                                className='form-control'
                                name="enteredPassword"
                                value={this.state.enteredPassword}
                                placeholder="Fill only if you need to change the password"
                                onChange={this.handleInputChange}

                            />
                        </div>
                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>New password</label>
                            <input
                                type="password"
                                className='form-control'
                                name="newPassword"
                                value={this.state.newPassword}
                                placeholder="Fill only if you need to change the password"
                                onChange={this.handleInputChange}

                            />
                        </div>
                        <div className='form-group' style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Confirm New password</label>
                            <input
                                type="password"
                                className='form-control'
                                name="confirmNewPassword"
                                value={this.state.confirmNewPassword}
                                placeholder="Fill only if you need to change the password"
                                onChange={this.handleInputChange}

                            />
                        </div>

                        <button className='btn btn-success' type="submit" style={{ maeginTop: '15px' }} onClick={this.onSubmit}>
                            <i className='far fa-check-square'></i>
                            &nbsp; Update
                        </button>

                    </form>

                </div>
            </div>
        )
    }
}