import React, { Component } from "react";

export default class CreateSupervisorDetails extends Component {
  render() {
    return (
      <div>
        <div className="container border border-primary bg-light mt-5 ">
          <div className="form-group row">
            <div className="col-lg-12 margin-tb">
              <div className="float-left">
                &nbsp;
                <h2>Create Supervisor Details</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form action="" method="POST">
            <div className="row ">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Supervisor ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter supervisor id -Sxxxx"
                    name="supervisorid"
                    pattern="[S]+[0-9]{4}"
                    title="Supervisor ID is Invalid"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Supervisor Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter supervisor name"
                    name="supervisorname"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Research Field :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter research field"
                    name="researchfield"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Contact :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter contact "
                    name="contact"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;
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
            &nbsp;
          </form>
        </div>
      </div>
    );
  }
}
