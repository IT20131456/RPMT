// user- view user profile
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default class UserProfile extends Component {

    constructor(){
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
        }
    }

    componentDidMount(){
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

    retrieveProfile(id){
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
    
        const {_id, idNumber, name, email, mobile, groupId, researchfield, panel, type, password } = this.state;
    
        const data = {
          idNumber: idNumber,
          name: name,
          email: email,
          mobile: mobile,
          groupId: groupId,
          researchfield: researchfield,
          panel: panel,
          type: type,
          password: password
        }
    
        // console.log(data)
    
        axios.put(`http://localhost:5000/user/update/${_id}`, data).then((res) => {
          if (res.data.success) {
            alert("Profile updated successfully");
            this.props.history.push(`/user/profile`)
            window.location.reload();
          }
        })
      }

    render() {
        return (
        <div>
            <div className="container" style={{padding: '50px 50px 50px 50px', background: 'white', minHeight: '100vh'}}>
            {/* <div className="container" style={{padding: '0px 200px 50px 200px', height: 'auto', width: 'auto', background: 'white'}}> */}
                {/* <div className='jumbotron mt-5' style={{height: 'auto', padding: '10px 10px 10px 10px', width: 'auto'}}> */}
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h1>Profile</h1>
                    </div>
                    <hr />
                    <div className='col-md-8 mt-4 mx-auto'>
                    {/* <h1 className='h3 mb-3 font-weight-normal'>Research Topic Registration</h1> */}
                    <br/>
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


                        <button className='btn btn-success' type="submit" style={{ maeginTop: '15px' }} onClick={this.onSubmit}>
                            <i className='far fa-check-square'></i>
                            &nbsp; Update
                        </button>

                    </form>

                </div>
            </div>
        </div>
        )
    }
}