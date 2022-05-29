import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class EditSubmition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: "",
      type: "",
      description: "",
      files: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { groupId, type, description, files } = this.state;

    const data = {
      groupId: groupId,
      type: type,
      description: description,
      files: files,
    };
    console.log(data);

    axios
      .put(`http://localhost:5000/submition/update/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          swal("Updated Successfully !").then((value) => {
            window.location = `/submitionsp/student/view/${groupId}`;
          });

          this.setState({
            groupId: "",
            type: "",
            description: "",
            files: "",
          });
        }
      });
  };

  componentDidMount() {
    // if(this.props.match && this.props.match.params.id){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/submition/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          groupId: res.data.submition.groupId,
          type: res.data.submition.type,
          description: res.data.submition.description,
          files: res.data.submition.files,
        });
        console.log(this.state);
      }
    });

    // }
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Submition</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Group Id</label>
            <input
              type="text"
              className="form-control"
              name="groupId"
              placeholder="Edit Group Id"
              value={this.state.groupId}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <textarea
              className="form-control"
              name="description"
              placeholder="Edit Description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Type</label>
            <input
              type="text"
              className="form-control"
              name="type"
              placeholder="Edit Type"
              value={this.state.type}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Files</label>
            <input
              type="text"
              className="form-control"
              name="files"
              placeholder="Edit Files"
              value={this.state.files}
              onChange={this.handleInputChange}
              disabled
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ margintop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}