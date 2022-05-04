import React, { Component } from 'react';
import axios from "axios";

export default class DocumentTemp_Admin extends Component {
  constructor(props){
    super(props);

    this.state = {
        documentTemp:[]
    };
}

componentDidMount(){
    this.retrieveDocumentTemp();
}

// To get all data
retrieveDocumentTemp(){
    axios.get("http://localhost:5000/template/getAll").then(res => {
        if(res.data.success){
            this.setState({
              documentTemp:res.data.exsitingDocumentTemp
            });
            console.log(this.state.documentTemp);
        }
    });
}

// To delete data
onDelete = (id) => {
    axios.delete(`http://localhost:5000/document/delete/${id}`).then((res) => {
        alert('Delete Successful');
        this.retrieveDocumentTemp();
    })
}

render() {
return (
  <div className='container'>
      <table className="table">
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Document Type</th>
                <th scope='col'>Other Type</th>
                <th scope='col'>Description</th>
                <th scope='col'>File</th>
                <th scope='col'>Preview</th>
                <th scope='col'>Update</th>
                <th scope='col'>Delete</th>
            </tr>
        </thead>
        <tbody>
            {this.state.documentTemp.map((documentTemp,index)=>(
                <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>{documentTemp.documentType}</td>
                    <td>{documentTemp.otherType}</td>
                    <td>{documentTemp.description}</td>
                    <td>{documentTemp.files}</td>
                    <td>
                        <a className='btn btn-success' rel="noreferrer" target="_blank" href={process.env.PUBLIC_URL + `/uploads/${documentTemp.files}`}>View</a>
                    </td>
                    <td>
                        <a className='btn btn-success' href={`/edit/documentTemp/${documentTemp._id}`}>Update</a>
                    </td>
                    <td>
                        <a className='btn btn-success' onClick={() => this.onDelete(documentTemp._id)}>Delete</a>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>

      <button className='btn btn-success'><a href="/add/documentTemp" style={{textDecoration:'none', color:'white'}}>Add Document Template</a></button>

  </div>
)
}
}
