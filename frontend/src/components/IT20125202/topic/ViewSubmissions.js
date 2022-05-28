//student - view submitted topics
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default class ViewSubmissions extends Component {
  constructor() {
    super();
    this.state = {
      groupId: '',
      topics: []
    }
  }

  componentDidMount() {
    document.title = "Topic Submissions"

    const usertoken = localStorage.userToken;
    const decoded = jwt_decode(usertoken);

    const id = decoded.groupId
    this.setState({
      groupId: id
    })

    axios.get(`http://localhost:5000/topic/submissions/${id}`).then(res => {

      if (res.data.success) {

        this.setState({
          topics: res.data.existingTopics
        });

        // console.log(this.state.topics);
      }
    });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
            <h1>Topics</h1>
          </div>
          <hr />
          <h5 style={{ textAlign: 'right', color: '#4682B4' }}><b>Group ID: {this.state.groupId}</b></h5>

        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope='col'> # </th>
              {/* <th scope='col'> Group ID </th> */}
              <th scope='col'> Topic </th>
              <th scope='col'> Description </th>
              <th scope='col'> Status </th>
              <th scope='col'> Comments </th>
              {/* <th>Action</th> */}
            </tr>
          </thead>

          <tbody>
            {this.state.topics.map((topics, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                {/* <td>{topics.groupId}</td> */}
                <td>{topics.topicR}</td>
                <td>{topics.description}</td>
                <td>{topics.status}</td>
                <td>{topics.comments}</td>
                {/* <td>
                    <a className='btn btn-outline-success' href={`/panel/topic/update/${topics._id}`}>
                      <i className='fas fa-edit'></i> &nbsp;Update
                    </a> */}
                {/* &nbsp;
                  <a className='btn btn-outline-danger' href="#" onClick={() => this.onDelete(users._id)}>
                    <i className='fas fa-trash'></i> &nbsp;Delete
                  </a> */}
                {/* </td> */}
              </tr>

            ))}
          </tbody>
        </table>

        <br />
        <a className='btn btn-outline-success' href='/student/topic/registration'>
          <i className='fas fa-edit'></i> &nbsp; New Topic
        </a>
      </div>
    )
  }
}
