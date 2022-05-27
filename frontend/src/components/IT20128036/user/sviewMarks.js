import React, { Component } from 'react';
import { useRef } from "react";
import axios from 'axios';
import ReactToPrint from 'react-to-print';


export default class sviewMarks extends Component{
  constructor(props){
    super(props);

    this.state={
      marks:[]
    };
  }



componentDidMount(){
  this.retriveMarks();
}

  retriveMarks(){
    axios.get("http://localhost:5000/marks").then(res =>{
      if(res.data.success){
        this.setState({
          marks:res.data.existingMarks
        });

        console.log(this.state.marks)
      }
    });
  }



onDelete=(id)=>{
  axios.delete(`http://localhost:5000/mark/delete/${id}`).then((res)=>{
    alert("Deleted Successfully");
    this.retriveMarks();

  })
}


filterData(marks,searchKey){
  const result=marks.filter((mark)=>
  mark.groupId.toLowerCase().includes(searchKey)||
  mark.type.toLowerCase().includes(searchKey)||
  mark.gradingStatus.toLowerCase().includes(searchKey)
  )

  this.setState({marks:result})
}


handleSearchArea=(e)=>{
  const searchKey=e.currentTarget.value;
  


  axios.get("http://localhost:5000/marks").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingMarks, searchKey)

    }
  });
}



render() {
  return(
    <div className='container'>


      <div className='row mt-2 mb-2'>
      <div className='col-lg-4 mt-2 mb-2'>
      

        
        <a href="/student/pdf/export" className='btn btn-outline-dark'>Export PDF</a>
    



      </div>


      <div className='col-lg-5 mt-2 mb-2'>
      

        
    
      <h4>Marks Of Submitions</h4>



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


     <table className='table table-info table-striped table-hover mt-4 mb-4'>
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Group ID</th>
           <th scope="col">Submition Type</th>
           <th scope="col">Marks (?/100)</th>
           <th scope="col">Grading Status</th>
          
         </tr>
       </thead>
       <tbody>
         {this.state.marks.map((marks,index)=>(
           <tr key={index}>
             <th scope="row">{index+1}</th>


             <td>
                 
                 {marks.groupId}
                 
                 </td>

             <td>{marks.type}</td>

             <td>{marks.marks}</td>
             <td>{marks.gradingStatus}</td>
            

            



           </tr>
         ))}



       </tbody>
     </table>

     

    </div>
   )
  }
}






export class Print extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <sviewMarks ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}