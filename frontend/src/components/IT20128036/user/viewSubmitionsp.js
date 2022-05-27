import React, { Component } from 'react'
import axios from "axios";
import fileDownload from 'js-file-download';
import AddSubmition from './Submitions';

export default class ViewSubmitionssp extends Component {
    constructor(props){
        super(props);

        this.state = {
            submitions:[]
        };
    }

    componentDidMount(){

        
        this.retrieveSubmitions();
       
    }

    
     
   

    
    retrieveSubmitions(){
        const gid = this.props.match.params.id ;
        axios.get(`http://localhost:5000/submition/group/${gid}`).then(res => {
            if(res.data.success){
                this.setState({
                    submitions:res.data.exsitingSubmitions
                });
                console.log(this.state.submitions);
            }
        });
    }


    
onDelete=(id)=>{
    axios.delete(`http://localhost:5000/submition/delete/${id}`).then((res)=>{
      alert("Deleted Successfully");
      this.retrieveSubmitions();
  
    })
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




  
filterData(submitions,searchKey){
  const result=submitions.filter((submition)=>
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





  render() {
    return (
   
   


    <div className="container">
    <div className="row">


    <div className="col-sm-6">
        <AddSubmition></AddSubmition>
       
       </div>



      <div className="col-sm-6">

        <div className="mt-4 mb-2 me-4">
          <div className="row">
            <div className="col-lg-7 mt-2 mb-2">
              <h4>Your Submitions</h4>
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

          {this.state.submitions.map((submitions, index) => (
            <div class="row">
              <div class="col-sm-12">
                <div class="card mt-4 mb-4">
                  <div class="card-body">
                    <div class="card-header">
                      <h5 class="card-title">
                    
                       <p>Group {submitions.groupId} </p> 
                      </h5>
                    </div>

                    <p class="card-text"></p>
                    <p>
                      <strong>Type</strong>
                    </p>
                    <p> {submitions.type}</p>
                    <p>
                      <strong>Description</strong>
                    </p>
                    <p>{submitions.description}</p>

                    <p>
                      
                      <strong>File Name</strong>
                    </p>
                    <p>{submitions.files}</p>
                   
                   
                   

                    <div className="row mt-4 mb-4">
                      <div className="col-lg-4">
                      
                      <a className='btn btn-outline-success' onClick={() => this.downloadFile(submitions.files)}><i class="fa fa-download" aria-hidden="true"></i>Download Submition</a>
                      
                      </div>

                      <div className="col-lg-4">
                      <a className="btn btn-outline-warning" href={`/ssubmition/edit/${submitions._id}`}>
                  <i className="fas fa-edit"></i>Edit Submition
                </a>
                      </div>

                      <div className="col-lg-4">

                      <a className="btn btn-outline-danger" href="#" onClick={()=>{
                  this.onDelete(submitions._id)
                }}>
                  <i className="fas fa-trash-alt"></i>Delete Submition
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

     
    </div>
  </div>




    )
  }
}
