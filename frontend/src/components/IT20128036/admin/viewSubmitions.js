import React, { Component } from 'react'
import axios from "axios";
import fileDownload from 'js-file-download';

export default class ViewSubmitions extends Component {
    constructor(props){
        super(props);

        this.state = {
            submitions:[]
        };
    }

    componentDidMount(){
        this.retrieveSubmitions();
    }

    // To get all data
    retrieveSubmitions(){
        axios.get("http://localhost:5000/submition/all").then(res => {
            if(res.data.success){
                this.setState({
                    submitions:res.data.exsitingSubmitions
                });
                console.log(this.state.submitions);
            }
        });
    }





    filterData(submitions,searchKey){
        const result=submitions.filter((submition)=>
        submition.groupId.toLowerCase().includes(searchKey)||
        submition.type.toLowerCase().includes(searchKey)||
        submition.files.toLowerCase().includes(searchKey)
        )
      
        this.setState({submitions:result})
      }
      
      
      handleSearchArea=(e)=>{
        const searchKey=e.currentTarget.value;
      
      
        axios.get("http://localhost:5000/submition/all").then(res =>{
          if(res.data.success){
            this.filterData(res.data.exsitingSubmitions, searchKey)
      
          }
        });
      }


 
  // Download File
downloadFile = (fileName) => {
      
  const data = {
  fileName: fileName
  };

axios({
url: "http://localhost:5000/file/download", data,
method: "POST",
responseType: "blob",
}).then((res) => {
console.log(res);
fileDownload(res.data, fileName);
})
}    




         
onDelete=(id)=>{
    axios.delete(`http://localhost:5000/submition/delete/${id}`).then((res)=>{
      alert("Deleted Successfully");
      this.retrieveSubmitions();
  
    })
  }


  render() {
    return (
      <div className='container'>

<div className='row'>
      <div className='col-lg-4 mt-2 mb-2'>
      <a className="btn btn-outline-dark" href="/marks/view">
                 <i className="fas fa-eye"></i>&nbsp;View Marks
               </a>
      </div>
      <div className='col-lg-5 mt-2 mb-2'>
        <h4>All Submitions</h4>
      </div>
      <div className='col-lg-3 mt-2 mb-2'>

        <input className='form-control'
        type="search"
        placeholder='Search'
        name='searchQuery'
        onChange={this.handleSearchArea}>
        </input>

      </div>

      </div>



          <table className="table">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Group ID</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>File</th>
                    <th scope='col'>Submitted Date</th>

                    <th scope='col'>Preview</th>
                    <th scope='col'>Delete</th>
                    <th scope='col'>Add Marks</th>
                </tr>
            </thead>
            <tbody>
                {this.state.submitions.map((submitions,index)=>(
                    <tr key={index}>
                        <th scope='row'>{index+1}</th>
                        <td>{submitions.groupId}</td>
                        <td>{submitions.type}</td>
                        <td>{submitions.description}</td>
                        <td>{submitions.files}</td>
                        <td>{submitions.postDate}</td>
                        <td>
                            
                        
                      <a className='btn btn-outline-success' onClick={() => this.downloadFile(submitions.files)}><i class="fa fa-download" aria-hidden="true"></i>Download Submition</a>
                      
                        
                        </td>

                        
                        <td>
                        <a className="btn btn-outline-danger" href="#" onClick={()=>{
                  this.onDelete(submitions._id)
                }}>
                  <i className="fas fa-trash-alt"></i>Delete Submition
                </a>
                        </td>




                        <td>
                        <a className="btn btn-outline-info" href={`/marks/add/${submitions._id}`}>
                 <i className="fas fa-plus"></i>&nbsp;Add Marks
               </a>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>

       

         

      </div>
    )
  }
}
