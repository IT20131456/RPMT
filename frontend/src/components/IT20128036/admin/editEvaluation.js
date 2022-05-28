import React, { Component } from "react";
import axios from 'axios';

export default class EditEvaluation extends Component{





  
  constructor(props){
    super(props);
    this.state={
        groupId:"",
        evaluationTopic:"",
        dressCode:"",
        date:"",
        from:"",
        to:"",
        link:"",
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
  const{groupId,evaluationTopic,dressCode,date,from,to,link}=this.state;


  const data={
    groupId:groupId,
    evaluationTopic:evaluationTopic,
    dressCode:dressCode,
    date:date,
    from:from,
    to:to,
    link:link,
  }
  console.log(data);

  axios.put(`http://localhost:5000/evaluation/update/${id}`,data).then((res)=>{
    if(res.data.success){
      alert("Evaluation Updated Successfully")
      window.location = "/evaluation/add"
      this.setState({
        groupId:"",
        evaluationTopic:"",
        dressCode:"",
        date:"",
        from:"",
        to:"",
        link:"",

      })  
      
    }
  })
}





  componentDidMount(){
    // if(this.props.match && this.props.match.params.id){
       const id = this.props.match.params.id ;
   
     
       axios.get(`http://localhost:5000/evaluation/${id}`).then((res) =>{
         if(res.data.success){
           this.setState({
             groupId:res.data.evaluation.groupId,
             evaluationTopic:res.data.evaluation.evaluationTopic,
             dressCode:res.data.evaluation.dressCode,
             date:res.data.evaluation.date,
             from:res.data.evaluation.from,
             to:res.data.evaluation.to,
             link:res.data.evaluation.link,

           });
           console.log(this.state);
         }
       });
      
    // }
     
   }








  render(){
    return(


     <div className='col-md-8 mt-4 mx-auto'>
       <h1 className='h3 mb-3 font-weight-normal'>Edit Evaluation</h1>
       <form className='needs-validation' noValidate>

         <div className="row">
         <div className="col-sm-6">
         <div className='form-group' style={{marginBottom:'15px'}}>




<label style={{marginBottom:'5px'}}>Group Id</label>
           <input type="text" 
           className='form-control'
           name='groupId'
           placeholder='Edit Group Id'
           value={this.state.groupId}
           onChange={this.handleInputChange}/>

</div>
      
         </div>

         <div className="col-sm-6">
         <div className='form-group' style={{marginBottom:'15px'}}>


<label style={{marginBottom:'5px'}}>Evaluation Topic</label>
           <input type="text" 
           className='form-control'
           name='evaluationTopic'
           placeholder='Edit Evaluation Topic'
           value={this.state.evaluationTopic}
           onChange={this.handleInputChange}/>

</div>

           </div>


           </div>



           <div className="row">


             <div className="col-sm-6">
             <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Panel</label>
           <input type="text" 
           className='form-control'
           name='dressCode'
           placeholder='Edit Panel'
           value={this.state.dressCode}
           onChange={this.handleInputChange}/>
           
         </div>

             </div>

             <div className="col-sm-6">
                
         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Date</label>
           <input type="date" 
           className='form-control'
           name='date'
           value={this.state.date}
           onChange={this.handleInputChange}/>
           
         </div>
               
               </div>


           </div>



       <div className="row">

         <div className="col-sm-6">
         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>From</label>
           <input type="time" 
           className='form-control'
           name='from'
           value={this.state.from}
           onChange={this.handleInputChange}/>
           
         </div>


         </div>

         
         <div className="col-sm-6">
           
         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>To</label>
           <input type="time" 
           className='form-control'
           name='to'
           value={this.state.to}
           onChange={this.handleInputChange}/>
           
         </div>


         </div>




       </div>


     



         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Link</label>
           <input type="text" 
           className='form-control'
           name='link'
           placeholder='Edit Link'
           value={this.state.link}
           onChange={this.handleInputChange}/>
           
         </div>






<div className="row mt-4">
  <div className="col-2">
  <button className="btn btn-outline-dark" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
           <i className='far fa-check-square'></i>
           &nbsp; Update
         </button>

  </div>
  <div className="col-2">
  <a href="/evaluation/add" className="btn btn-outline-dark">Back</a>

  </div>
</div>
         

       



       </form>

     </div>
   
    )
  }



}