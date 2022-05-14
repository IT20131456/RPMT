import React, { Component } from 'react';
import axios from 'axios';

export default class ViewTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {}
    };
  }

  componentDidMount() {
    document.title = "Topic Registration Details"
    const id = this.props.match.params.id;
    axios.get(`/topic/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          topic: res.data.topic
        })

        // console.log(this.state.topic);
      }
    })
  }

  render() {

    const { groupId, topicR, description, status, comments } = this.state.topic;
    return (
      <div>
        <div style={{ margin: '20px' }}>
          <h3>Topic Details</h3>
          <hr />

          <dl className='row'>
            <dt className='col-sm-3'>Group ID</dt>
            <dd className='col-sm-9'>{groupId}</dd>

            <dt className='col-sm-3'>Topic</dt>
            <dd className='col-sm-9'>{topicR}</dd>

            <dt className='col-sm-3'>Description</dt>
            <dd className='col-sm-9'>{description}</dd>

            <dt className='col-sm-3'>Status</dt>
            <dd className='col-sm-9'>{status}</dd>

            <dt className='col-sm-3'>Comments</dt>
            <dd className='col-sm-9'>{comments}</dd>
          </dl>
          
          <a
            href="/panel/topic/list"
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
