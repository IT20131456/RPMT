//Staff update status and add comments
import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

export default class UpdateTopic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      groupId: "",
      topicR: "",
      description: "",
      status: "",
      comments: ""
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

    const { groupId, topicR, description, status, comments } = this.state;

    const data = {
      groupId: groupId,
      topicR: topicR,
      description: description,
      status: status,
      comments: comments
    }
    // console.log(data)

    axios.put(`http://localhost:5000/topic/update/${id}`, data).then((res) => {
      if (res.data.success) {
        swal("Topic updated successfully!", "", "success")
          .then((value) => {
            if (value) {
              this.props.history.push(`/panel/topic/list`)
              window.location.reload();
            }

          });
      }
    })
  }

  componentDidMount() {

    document.title = "Update Topic"

    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/topic/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          groupId: res.data.topic.groupId,
          topicR: res.data.topic.topicR,
          description: res.data.topic.description,
          status: res.data.topic.status,
          comments: res.data.topic.comments
        })
        // console.log(this.state.topic);
      }
    })
  }

  render() {

    return (
      <div>
        <div className='col-lg-9 mt-2 mb-2'>
          <h1>Update Topic</h1>
        </div>
        <hr /><br />
        <div className='col-md-8 mt-4 mx-auto'>
          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Group ID</label>
              <input
                type="text"
                className='form-control'
                name="groupId"
                placeholder="Enter your Group ID"
                value={this.state.groupId}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Topic</label>
              <input
                type="text"
                className='form-control'
                name="topicR"
                placeholder="Enter research topic"
                value={this.state.topicR}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Description</label>
              <textarea
                type="text"
                className='form-control'
                name="description"
                placeholder="Enter a description about the topic"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              />
              {/* <input
                type="text"
                className='form-control'
                name="description"
                placeholder="Enter a description about the topic"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              /> */}
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Status</label>
              <select name="status" value={this.state.status} onChange={this.handleInputChange} className="form-select">
                <option value="Pending" >Pending</option>
                <option value="Accepted" >Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Comments</label>
              <input
                type="text"
                className='form-control'
                name="comments"
                placeholder=""
                value={this.state.comments}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <button className='btn btn-success' type="submit" style={{ maeginTop: '15px' }} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp; Update
            </button>

            &nbsp;&nbsp;
            <a
              href="/panel/topic/list"
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

