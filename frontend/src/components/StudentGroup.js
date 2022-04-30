import React, { Component } from "react";

export default class StudentGroup extends Component {
  render() {
    return (
      <div>
        <div className="container border border-primary bg-light mt-5 ">
          <div className="form-group row">
            <div className="col-lg-12 margin-tb">
              <div className="float-left">
                &nbsp;
                <h2>Create Student Group</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form>
            <div className="row " >
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Group ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Group id"
                    name=""
                    pattern="[a-zA-Z]+[0-9]{4}"
                    title="Subject ID is Invalid"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Group Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Group name"
                    name="name"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_1 ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter id"
                    name="subjectid"
                    pattern="[a-zA-Z]+[0-9]{4}"
                    title="Subject ID is Invalid"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_1 Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_2 ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter id"
                    name="subjectid"
                    pattern="[a-zA-Z]+[0-9]{4}"
                    title="Subject ID is Invalid"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_2 Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_3 ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter id"
                    name="subjectid"
                    pattern="[a-zA-Z]+[0-9]{4}"
                    title="Subject ID is Invalid"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_3 Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_4 ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter id"
                    name="subjectid"
                    pattern="[a-zA-Z]+[0-9]{4}"
                    title="Subject ID is Invalid"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Student_4 Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  &nbsp;<i className="fa fa-save"> Save </i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
