import React, { Component } from "react";
import axios from "axios";
import AddEvaluation from "./AddEvaluation";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluations: [],
    };
  }

  componentDidMount() {
    this.retriveEvaluations();
  }

  retriveEvaluations() {
    axios.get("http://localhost:8000/evaluations").then((res) => {
      if (res.data.success) {
        this.setState({
          evaluations: res.data.existingEvaluations,
        });

        console.log(this.state.evaluations);
      }
    });
  }

  onDelete = (id) => {
    axios
      .delete(`http://localhost:8000/evaluation/delete/${id}`)
      .then((res) => {
        alert("Deleted Successfully");
        this.retriveEvaluations();
      });
  };

  filterData(evaluations, searchKey) {
    const result = evaluations.filter(
      (evaluation) =>
        evaluation.groupId.toLowerCase().includes(searchKey) ||
        evaluation.evaluationTopic.toLowerCase().includes(searchKey) ||
        evaluation.date.toLowerCase().includes(searchKey)
    );

    this.setState({ evaluations: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/evaluations").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingEvaluations, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="mt-4 mb-2">
        <div className="row">
          <div className="col-lg-3 mt-2 mb-2">
            <h4>All Evaluations</h4>
          </div>
          <div className="col-lg-5 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        {this.state.evaluations.map((evaluations, index) => (
          //  <tr key={index}>
          //    <th scope="row">{index+1}</th>

          //    <td>
          //        <a href={`/post/${evaluations._id}`} style={{textDecoration:'none'}}>
          //        {evaluations.groupId}
          //        </a>
          //        </td>

          //    <td>{evaluations.evaluationTopic}</td>

          //    <td>{evaluations.dressCode}</td>
          //    <td>{evaluations.date}</td>
          //    <td>{evaluations.from}</td>
          //    <td>{evaluations.to}</td>
          //    <td>{evaluations.link}</td>

          //    <td>
          //      <a className="btn btn-warning" href={`/editEvaluation/${evaluations._id}`}>
          //        <i className="fas fa-edit"></i>&nbsp;Edit
          //      </a>

          //      &nbsp;

          //      <a className="btn btn-danger" href="#" onClick={()=>{
          //        this.onDelete(evaluations._id)
          //      }}>
          //        <i className="far fa-trash-alt"></i>&nbsp;Delete
          //      </a>

          //    </td>

          //  </tr>

          <div class="row">
            <div class="col-sm-8">
              <div class="card mt-2 mb-2">
                <div class="card-body">
                  <div class="card-header">
                    <h5 class="card-title"> Session {index + 1} </h5>
                  </div>

                  <p class="card-text">
                    <strong>{evaluations.groupId} </strong>Students, you have
                    your {evaluations.evaluationTopic} Session with{" "}
                    {evaluations.dressCode}. It held on {evaluations.date} from{" "}
                    {evaluations.date} to {evaluations.to}. You can join link in
                    below.{" "}
                  </p>

                  <div className="row">
                    <div className="col-lg-4">
                      <a href="#" class="btn btn-outline-primary">
                        <i class="fa-solid fa-link"></i>Join
                      </a>
                    </div>

                    <div className="col-lg-4">
                      <a
                        href={`/editEvaluation/${evaluations._id}`}
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
                          this.onDelete(evaluations._id);
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
    );
  }
}
