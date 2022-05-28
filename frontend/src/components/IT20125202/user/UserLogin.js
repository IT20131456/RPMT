import React, { Component } from 'react'
import { userLogin } from './UserFunctions';
// import jwt_decode from 'jwt-decode';

export default class UserLogin extends Component {
    componentDidMount() {
        localStorage.removeItem('userToken');
        document.title = "User Login"
    }

    constructor() {
        super();

        this.state = {
            idNumber: '',
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
            password: this.state.password
        }
        // userLogin(user).then((res, err) => {

        //     if (res) {
        //         alert("Login successful!")
        //         this.props.history.push(`/`)
        //         window.location.reload();
        //     }
        //     else {
        //         alert('Please check your username and password')
        //     }
        // })
        userLogin(user).then(res => {
            alert("Login successful!")
            this.props.history.push(`/`)
            window.location.reload();
        }).catch(err => {
            console.log(err);
            alert('Please check your username and password')
        })
    }


    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px', height: '800px'}}>
                    <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Research Project Management System</h1>
                    <hr />
                    <div className="col-md-8 mt-4 mx-auto">
                        <br />
                        <h3 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}>User Login</h3>

                        <form className="needs-validation" noValidate>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>ID Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="idNumber"
                                    placeholder="Please enter the username"
                                    required
                                    value={this.state.idNumber}
                                    onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Please enter the password"
                                    required
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />

                            </div>


                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-outline-primary"
                                    type="submit"
                                    style={{ marginTop: '15px', width: 'cover' }}
                                    onClick={this.onSubmit}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
