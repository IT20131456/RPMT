import React, { Component } from "react";
import axios from "axios";
import EvaluationList from "./EvaluationList";

export default class AddEvaluation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupId: "",
      evaluationTopic: "",
      dressCode: "",
      date: "",
      from: "",
      to: "",
      link: "",
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
    const { groupId, evaluationTopic, dressCode, date, from, to, link } =
      this.state;

    const data = {
      groupId: groupId,
      evaluationTopic: evaluationTopic,
      dressCode: dressCode,
      date: date,
      from: from,
      to: to,
      link: link,
    };
    console.log(data);

    axios.post("http://localhost:8000/evaluation/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          groupId: "",
          evaluationTopic: "",
          dressCode: "",
          date: "",
          from: "",
          to: "",
          link: "",
        });
      }
    });
  };

  render() {
    return (
      <div className=" row">
        <div className="col-sm-7">
          <div className="row">
            <div className="col-12">
              <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">
                  Add New Evaluation Session
                </h1>
                <form className="needs-validation" noValidate>
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Group ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="groupId"
                      placeholder="Enter Group ID"
                      value={this.state.groupId}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>
                      Evaluation Type
                    </label>

                    <select
                      className="form-select"
                      name="evaluationTopic"
                      value={this.state.evaluationTopic}
                      onChange={this.handleInputChange}
                    >
                      <option evaluationTopic="not selected yet" selected>
                        Select Type
                      </option>
                      <option evaluationTopic="Type1">Type1</option>
                      <option evaluationTopic="Type2">Type2</option>
                      <option evaluationTopic="Type3">Type3</option>
                    </select>

                    {/* <input
              type="text"
              className="form-control"
              name="evaluationTopic"
              placeholder="Enter Evaluation Topic"
              value={this.state.evaluationTopic}
              onChange={this.handleInputChange}
            /> */}
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Panel</label>

                    <select
                      className="form-select"
                      name="dressCode"
                      value={this.state.dressCode}
                      onChange={this.handleInputChange}
                    >
                      <option dressCode="not selected yet" selected>
                        Select Panel
                      </option>
                      <option dressCode="Panel 01">Panel 01</option>
                      <option dressCode="Panel 02">Panel 02</option>
                      <option dressCode="Panel 03">Panel 03</option>
                      <option dressCode="Panel 04">Panel 04</option>
                      <option dressCode="Panel 05">Panel 05</option>
                      <option dressCode="Panel 06">Panel 06</option>
                    </select>

                    {/* <input
              type="text"
              className="form-control"
              name="dressCode"
              placeholder="Enter Dress Code"
              value={this.state.dressCode}
              onChange={this.handleInputChange}
            /> */}
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="row">
                    <div
                      className="form-group col-6"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>From</label>
                      <input
                        type="time"
                        className="form-control"
                        name="from"
                        value={this.state.from}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div
                      className="form-group col-6"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>To</label>
                      <input
                        type="time"
                        className="form-control"
                        name="to"
                        value={this.state.to}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Link</label>
                    <input
                      type="text"
                      className="form-control"
                      name="link"
                      placeholder="Enter Session Link"
                      value={this.state.link}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ margintop: "15px" }}
                    onClick={this.onSubmit}
                  >
                    <i className="far fa-check-square"></i>
                    &nbsp; Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-5">
          <div className="row">
            <div className="col-12">
              <EvaluationList></EvaluationList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
