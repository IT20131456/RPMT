import React, { useState, set } from "react";
import axios from "axios";

export default function DocumentTempCreate() {

    state = {
        disabled: true
    }

    const [documentType, setDocumentType] = useState("");
    const [otherType, setOtherType] = useState("-");
    const [description, setDescription] = useState("");
    const [file, setfile] = useState("");

    const onChangeFile = (e) => {
        setfile(e.target.files[0]);
    };

    const onChangeClick = (e) => {
        e.preventDefault();

        const formdata = new FormData();

        formdata.append("documentType", documentType);
        formdata.append("otherType", otherType);
        formdata.append("description", description);
        formdata.append("file", file);

        setDocumentType("");
        setOtherType("-");
        setDescription("");
        setfile("");

        axios.post("http://localhost:5000/template/add", formdata)
        .then(() => {
            alert('Document Upload Successful');
        })
        .catch((err) => {
            alert(err);
        });
    };

  return (
    <div className="container">

        <h2>Add Document Template</h2>
        <hr/>

        <button type="button" className="btn btn-secondary"><a href="/documentTemp" style={{textDecoration:'none', color:'white'}}>Back to Previuos Page</a></button> <br/><br/>

        <form onSubmit={onChangeClick} encType="multipart/form-data">

            <label className="form-label">
                Select Document Type
            </label>
            <select
                className="form-select"
                aria-label="Default select example"
                name="documentType"
                value={documentType}
                onChange={(e) => {
                    setDocumentType(e.target.value)
                }}
                >
                <option defaultValue>Select Dcoument Type</option>
                <option value="Proposal">Proposal Document Template</option>
                <option value="Presentation">Presentation Template</option>
                <option value="Final Thesis">Final Thesis Template</option>
                <option value="Other">Other Template</option>
            </select>


            <div className="mb-3">
                <label className="form-label">
                    Other Type
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="otherType"
                    name="otherType"
                    aria-describedby="emailHelp"
                    value={otherType}
                    onChange={(e) => {
                    setOtherType(e.target.value);
                    }}
                    disabled={this.state.disabled}
                />
            </div>


            <div className="mb-3">
                <label className="form-label">
                    Description
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    aria-describedby="emailHelp"
                    value={description}
                    onChange={(e) => {
                    setDescription(e.target.value);
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">
                    Default file input example
                </label>
                <input
                    className="form-control"
                    type="file"
                    id="file"
                    filename="file"
                    onChange={onChangeFile}
                />
            </div>

            <center>
                <button type="submit" className="btn btn-primary">
                    Submit <i className="fa-thin fa-plus"></i>
                </button>
            </center>
        </form>
    </div>
  );
}
