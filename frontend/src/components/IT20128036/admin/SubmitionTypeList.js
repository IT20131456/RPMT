import React, { Component } from "react";
import axios from "axios";

export default class SubmitionTypeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitiontypes: [],
    };
  }

  componentDidMount() {
    this.retrivesubmitionTypes();
  }

  retrivesubmitionTypes() {
    axios.get("http://localhost:5000/submitiontypes").then((res) => {
      if (res.data.success) {
        this.setState({
          submitiontypes: res.data.existingsubmitonTypes,
        });

        console.log(this.state.submitiontypes);
      }
    });
  }

  onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/submitiontype/delete/${id}`)
      .then((res) => {
        alert("Deleted Successfully");
        this.retrivesubmitionTypes();
      });
  };

  filterData(submitiomtypes, searchKey) {
    const result = submitiomtypes.filter(
      (submitiontype) =>
        submitiontype.submitionType.toLowerCase().includes(searchKey) ||
        submitiontype.deadLine.toLowerCase().includes(searchKey) ||
        submitiontype.checkPanel.toLowerCase().includes(searchKey)
    );

    this.setState({ submitiomtypes: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/submitiontypes").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingsubmitionTypes, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="mt-4 mb-4">
          <div className="row">
            <div className="col-lg-5 mt-2 mb-2">
              <h4>Submitions List</h4>
            </div>
            <div className="col-lg-7 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>

          {this.state.submitiontypes.map((submitiontypes, index) => (
            <div class="row">
              <div class="col-sm-12">
                <div class="card mt-2 mb-2">
                  <div class="card-body">
                    <div class="card-header">
                      <h5 class="card-title">
                        {" "}
                        {submitiontypes.submitionType} Submition{" "}
                      </h5>
                    </div>

                    <p class="card-text"></p>
                    <p>
                      <strong>Description</strong>
                    </p>
                    <p> {submitiontypes.description}</p>
                    <p>
                      <strong>Deadline</strong>
                    </p>
                    <p>{submitiontypes.deadLine}</p>

                    <p>
                      {" "}
                      <strong>Allocated Marks</strong>
                    </p>
                    <p>{submitiontypes.startDate}%</p>
                    <p>
                      <strong>Guideline</strong>
                    </p>
                    <p>{submitiontypes.submition}</p>
                    <p>
                      <strong> {submitiontypes.checkPanel}</strong>
                    </p>

                    <div className="row">
                      <div className="col-lg-4">
                        <a href="/addSubmition" class="btn btn-outline-primary">
                          <i class="fa-solid fa-link"></i>Submit
                        </a>
                      </div>

                      <div className="col-lg-4">
                        <a
                          href={`/editsubmitiontype/${submitiontypes._id}`}
                          class="btn btn-outline-warning"
                        >
                          {" "}
                          <i class="fa-solid fa-pen-to-square"></i>Update
                        </a>
                      </div>

                      <div className="col-lg-4">
                        <a
                          href="#"
                          class="btn btn-outline-danger"
                          onClick={() => {
                            this.onDelete(submitiontypes._id);
                          }}
                        >
                          {" "}
                          <i class="fa-solid fa-folder-xmark"></i>Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
