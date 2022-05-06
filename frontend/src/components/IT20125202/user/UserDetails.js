//admin - view specific user details
// user- view user profile
import React, { Component } from 'react';
import axios from 'axios';
import AdminNavBar from '../admin/AdminNavBar';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        document.title = "User Details"
        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/user/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    user: res.data.user
                })

                // console.log(this.state.user);
            }
        })
    }

    render() {

        const { idNumber, name, email, groupId, type, dateRegistered } = this.state.user;
        return (
            <div>
                <AdminNavBar />
                <div style={{ margin: '20px' }}>
                    <h3>User Details</h3>
                    <hr />

                    <dl className='row'>
                        <dt className='col-sm-3'>ID Number</dt>
                        <dd className='col-sm-9'>{idNumber}</dd>

                        <dt className='col-sm-3'>Name</dt>
                        <dd className='col-sm-9'>{name}</dd>

                        <dt className='col-sm-3'>Email</dt>
                        <dd className='col-sm-9'>{email}</dd>
                        
                        <dt className='col-sm-3'>Group ID</dt>
                        <dd className='col-sm-9'>{groupId}</dd>

                        <dt className='col-sm-3'>Type</dt>
                        <dd className='col-sm-9'>{type}</dd>

                        <dt className='col-sm-3'>Registered Date</dt>
                        <dd className='col-sm-9'>{dateRegistered}</dd>
                    </dl>

                    
                    <a
                        href="/admin/users"
                        class="btn btn-outline-success"
                        tabindex="-1"
                        role="button"
                        aria-disabled="true">
                        Back
                    </a>
                </div>

            </div>
        )
    }
}
