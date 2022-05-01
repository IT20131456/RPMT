import { useState } from 'react'

function AdminLogin() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function loginAdmin(e) {
		e.preventDefault()

		const res = await fetch('http://localhost:8000/admin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await res.json()

		if (data.admin) {
			localStorage.setItem('token', data.admin)
			alert('Login successful')
			window.location.href = '/admin/home'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
        <div className = "jumbotron" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop: '10px', backgroundSize:'cover', height:'700px'}}>

            <div className="container" style={{marginTop: '50px', marginBottom: '50px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft:'100px', paddingRight:'100px'}}>
                <h1 style= {{textAlign: 'center', paddingBottom: '100px'}}>RPMS - Admin</h1>
                <div className="col-md-8 mt-4 mx-auto"> 
                    <br/>
                    <h3 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>Admin Login</h3> 

                        <form className="needs-validation" noValidate>
                            <div className="form-group" style={{marginBottom: '15px'}}>
                                <label style={{marginBottom: '5px'}}>Username</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Please enter the username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                                
                            </div>
                            <div className="form-group" style={{marginBottom: '15px'}}>
                                <label style={{marginBottom: '5px'}}>Password</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Please enter the password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                
                            </div>

                            
                            <div class="d-grid gap-2">
                            <button className="btn btn-outline-success" type="submit" style={{marginTop: '15px', width: 'cover'}} onClick={loginAdmin}>
                                Login
                            </button>
                            </div>
                        </form>
                </div>
            </div>  
        </div> 

	)
}

export default AdminLogin


// import React, { Component } from 'react'
// import axios from 'axios';

// export default class AdminLogin extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             username: "",
//             password: ""
//         }
//     }

// handleInputChange =(e) => {
//     e.preventDefault();             
//     const {name, value} = e.target;

//     this.setState({
//         ...this.state,
//         [name]: value
//     })

// }



// componentDidMount(){
    
//     document.title = "RPMS - Admin Login"

//     window.history.forward();
//     function noBack()
//     {
//         window.history.forward();
//     }
//     noBack();
// }




// onSubmit = (e) => {
//     e.preventDefault();

//     axios.get("http://localhost:8000/admin").then(res => {
//         if(res.data.success){
            
//             const record = res.data.existingRecord;
            
//             console.log(record)
            
//              if(record.username === this.state.username && record.password === this.state.password){ 
//                 window.location = "http://localhost:3000/admin/home";
//              }
//              else{
//                  // console.log(this.state)
//                  alert('Username or password is incorrect. Please try again..');
//              }
 
             
         
//         }
//     })
        
// }


//  render() {
//   return(
//     <div className = "jumbotron" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop: '10px', backgroundSize:'cover', height:'700px'}}>

//             <div className="container" style={{marginTop: '50px', marginBottom: '50px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft:'100px', paddingRight:'100px'}}>
//                 <h1 style= {{textAlign: 'center', paddingBottom: '100px'}}>RPMS - Admin</h1>
//                 <div className="col-md-8 mt-4 mx-auto"> 
//                     <br/>
//                     <h3 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>Admin Login</h3> 

//                         <form className="needs-validation" noValidate>
//                             <div className="form-group" style={{marginBottom: '15px'}}>
//                                 <label style={{marginBottom: '5px'}}>Username</label>
//                                 <input 
//                                     type="text"
//                                     className="form-control"
//                                     name="username"
//                                     placeholder="Please enter the username"
//                                     required
//                                     value={this.state.username}
//                                     onChange={this.handleInputChange} />
                                
//                             </div>
//                             <div className="form-group" style={{marginBottom: '15px'}}>
//                                 <label style={{marginBottom: '5px'}}>Password</label>
//                                 <input 
//                                     type="password"
//                                     className="form-control"
//                                     name="password"
//                                     placeholder="Please enter the password"
//                                     required
//                                     value={this.state.password}
//                                     onChange={this.handleInputChange} />
                                
//                             </div>

                            
//                             <div class="d-grid gap-2">
//                             <button className="btn btn-outline-success" type="submit" style={{marginTop: '15px', width: 'cover'}} onClick={this.onSubmit}>
//                                 Login
//                             </button>
//                             </div>
//                         </form>
//                 </div>
//             </div>    
//    </div>
   
//     )
//    }
//  }