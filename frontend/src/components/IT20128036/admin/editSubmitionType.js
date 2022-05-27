import React, { Component } from "react";
import axios from 'axios';

export default class EditSubmitonType extends Component{





  
  constructor(props){
    super(props);
    this.state={
        submitionType:"",
        description:"",
        startDate:"",
        deadLine:"",
        checkPanel:"",
        submition:"",
    }

  }

handleInputChange=(e)=>{
  const{name,value}=e.target;

  this.setState({
    ...this.state,
    [name]:value
  })

}


onSubmit=(e)=>{
  e.preventDefault();
  const id = this.props.match.params.id ;
  const{submitionType, description, startDate, deadLine, checkPanel, submition}=this.state;


  const data={
    submitionType:submitionType,
    description:description,
    startDate:startDate,
    deadLine:deadLine,
    checkPanel:checkPanel,
    submition:submition,
  }
  console.log(data);

  axios.put(`http://localhost:5000/submitiontype/update/${id}`,data).then((res)=>{
    if(res.data.success){
      alert(" Updated Successfully")
      window.location = "/submitiontype/add"
      
      this.setState({
        submitionType:"",
        description:"",
        startDate:"",
        deadLine:"",
        checkPanel:"",
        submition:"",

      })  
      
    }
  })
}





  componentDidMount(){
    // if(this.props.match && this.props.match.params.id){
       const id = this.props.match.params.id ;
   
     
       axios.get(`http://localhost:5000/submitiontype/${id}`).then((res) =>{
         if(res.data.success){
           this.setState({
             submitionType:res.data.submitiontype.submitionType,
             description:res.data.submitiontype.description,
             startDate:res.data.submitiontype.startDate,
             deadLine:res.data.submitiontype.deadLine,
             checkPanel:res.data.submitiontype.checkPanel,
             submition:res.data.submitiontype.submition,
             

           });
           console.log(this.state);
         }
       });
      
    // }
     
   }








  render(){
    return(
     <div className='col-md-8 mt-4 mx-auto'>
       <h1 className='h3 mb-3 font-weight-normal'>Edit Submition Type</h1>
       <form className='needs-validation' noValidate>

<div className="row">
  <div className="col-sm-7">

  <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Submition Type</label>
           <input type="text" 
           className='form-control'
           name='submitionType'
           placeholder='Edit Submition Type'
           value={this.state.submitionType}
           onChange={this.handleInputChange}/>
           
         </div>


  </div>
  <div className="col-sm-5">
  <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Allocated Marks</label>
           <input type="text" 
           className='form-control'
           name='startDate'
           placeholder='Edit Allocated Marks'
           value={this.state.startDate}
           onChange={this.handleInputChange}/>
           
         </div>




  </div>
</div>
        


         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Description</label>
           <textarea 
           className='form-control'
           name='description'
           placeholder='Edit Description'
           value={this.state.description}
           onChange={this.handleInputChange}/>
           
         </div>



         
       
         
        <div className="row">
<div className="col-6">
<div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Deadline</label>
           <input type="date" 
           className='form-control'
           name='deadLine'
           value={this.state.deadLine}
           onChange={this.handleInputChange}/>
           
         </div>


</div>


<div className="col-6">
<div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Checking Panel</label>
           <input type="text" 
           className='form-control'
           name='checkPanel'
           value={this.state.checkPanel}
           onChange={this.handleInputChange}/>
           
         </div>
  
</div>

        </div>


         
     



        


         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Guidelines</label>
           <textarea 
           className='form-control'
           name='submition'
           value={this.state.submition}
           onChange={this.handleInputChange}/>
           
         </div>

       





<div className="row">
<div className="col-sm-6">
<button className="btn btn-outline-dark" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
           <i className='far fa-check-square'></i>
           &nbsp; Update
         </button>
</div>
<div className="col-sm-6">
  <a className="btn btn-outline-dark" href="/submitiontype/add">Back</a>
</div>



</div>

       



       </form>

     </div>
   
    )
  }



}