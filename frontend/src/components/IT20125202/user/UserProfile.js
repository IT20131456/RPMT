// user- view user profile
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

export default class UserProfile extends Component {

    constructor(){
        super();
        this.state = {
            idNumber: '',
            name: '',
            email: '',
            groupId: '',
            dateRegistered: ''
        }
    }

    componentDidMount(){
        document.title = "User Profile"

        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);
        this.setState ({
            idNumber: decoded.idNumber,
            name: decoded.name,
            email: decoded.email,
            groupId: decoded.groupId,
            dateRegistered: decoded.dateRegistered
        })
    }

    render() {
        return (
        <div>
            <div className="container" style={{padding: '50px 200px 50px 200px'}}>
                <div className='jumbotron mt-5'>
                    <div className='col-sm8 mx-auto'>
                        <h1 className='text-center'> Profile </h1>
                    </div>
                    <br/><br />
                    <table className='table col-md-6 mx-auto'>
                            <tbody>
                                <tr>
                                    <td><b>ID number</b></td>
                                    <td>{this.state.idNumber}</td>
                                </tr>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td>{this.state.email}</td>
                                </tr>                                
                                <tr>
                                    <td><b>Registered Date</b></td>
                                    <td>{this.state.dateRegistered}</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}