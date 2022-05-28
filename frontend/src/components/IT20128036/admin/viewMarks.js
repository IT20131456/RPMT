import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


export default class viewMarks extends Component{
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
 





  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {



    axios.delete(`http://localhost:5000/mark/delete/${id}`).then((res)=>{
    this.retriveMarks();

  })





      swal("Poof! Your file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your file is safe!");
    }
  });







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


      <div className='row'>
      <div className='col-lg-9 mt-2 mb-2'>
        <h4>Marks</h4>
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


     <table className='table'>
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Group ID</th>
           <th scope="col">Submition Type</th>
           <th scope="col">Marks</th>
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
            

             <td>
               <a className="btn btn-outline-warning" href={`/marks/edit/${marks._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Edit
               </a>

               &nbsp;

               <a className="btn btn-outline-danger" href="#" onClick={()=>{
                 this.onDelete(marks._id)
               }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
               </a>



             </td>



           </tr>
         ))}



       </tbody>
     </table>

     <button className='btn btn-outline-success'><a href="/submitions/view" style={{textDecoration:'none',color:'black'}}>Add Marks</a></button>

    </div>
   )
  }
}