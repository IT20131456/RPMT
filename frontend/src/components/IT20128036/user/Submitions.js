import React, { useState, set } from "react";
import axios from "axios";
import swal from 'sweetalert';

 function AddSubmition() {
  const [groupId, setgroupId] = useState("");
  const [type, settype] = useState("");
  const [file, setfile] = useState("");
  const [description, setdescription] = useState("");

  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };

  const onChangeClick = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("groupId", groupId);
    formdata.append("type", type);
    formdata.append("file", file);
    formdata.append("description", description);

    
    setgroupId("");
    settype("");
    setdescription("");

    axios 
      .post("http://localhost:5000/submition", formdata)
      .then(() => {
          
          swal("Good job!", "Submitted Successfully !", "success")

          .then((value)=>{
            window.location = `/submitionsp/student/view/${groupId}`
    
          })


          





          

        

        
    })
    .catch((err) => {
        
        swal("Error","Something Wrong !","warning"); 
    });

    




    

  };

  return (
    <div className="container mt-4 mb-4">
     
       
              <div
                // style={{
                //   margin: "20px 50px 50px 0px",
                //   padding: "50px",
                //   backgroundColor: "",
                //   border: "2px solid gray",
                //   borderRadius: "10px",
                // }}
              >
                <center>
                  <h1 style={set}>Add Submition</h1>
                </center>
                <hr/>
                <form onSubmit={onChangeClick} encType="multipart/form-data">


                  <div className="row">
                    <div className="col-sm-5">

                    <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">
                     <strong> Group ID</strong>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="groupId"
                      name="groupId"
                      pattern="G[0-9]{3}"
                      title="Group ID is Invalid"
                      placeholder="Enter Group ID -Gxxx"
                      aria-describedby="emailHelp"
                      value={groupId}
                      onChange={(e) => {
                        setgroupId(e.target.value);
                      }}
                      required
                    />
                  </div>



                    </div>

                    <div className="col-sm-7 ">

                    <label for="exampleInputText1" class="form-label">
                     <strong>Submition Type</strong> 
                    </label>

                    <select
                    class="form-select"
                    aria-label="Default select example"
                    name="type"
                    value={type}
                    onChange={(e) => {
                      settype(e.target.value);
                    }}
                    required
                  >
                    <option selected> Select Type</option>
                    <option value="Topic Assessment Document">Topic Assessment Document</option>
                    <option value="Proposal Document">Proposal Document</option>
                    <option value="Presentation Slides">Presentation Slides</option>
                    <option value="Final Thesis">Final Thesis</option>

                  </select>



                    </div>



                  </div>



              

                

                  <div class="mb-3 mt-3">
                    <label for="exampleInputText1" class="form-label">
                     <strong>Enter Description</strong> 
                    </label>
                    <textarea
                      rows="4" cols="50"
                      class="form-control"
                      id="description"
                      name="description"
                      placeholder="Enter Description ......."
                      aria-describedby="emailHelp"
                      value={description}
                      onChange={(e) => {
                        setdescription(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      {" "}
                    <strong> File Input</strong> {" "}
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="file"
                      filename="file"
                      onChange={onChangeFile}
                      required
                    />
                  </div>
                  <center>
                    <button type="submit" class="btn btn-warning">
                      {" "}
                      <i class="fa fa-plus" aria-hidden="true"> &nbsp;<strong>Submit</strong></i>
                    </button>
                  </center>
                </form>
              </div>
         
     
    </div>
  );
}
export default AddSubmition;
