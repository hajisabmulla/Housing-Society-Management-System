import axios from 'axios';
import React from 'react'
import {useState,useEffect } from 'react'



const SecretarySignUp=(props)=> {

  const [error, setError] = useState(false);
  
  const [Secretary, setSecretary] = useState({
    name:"",
    username:"",
    password:"",

  });


  const [validation, setValidation] = useState({
    name:"",
   
    username:"",
   
    password:"",
    
   
    
  });

  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));
    
    //first Name validation
    const name = Secretary.name;
    if (!Secretary.name.trim()) {
      errors.name = "Name is required";
    } else if (name.length < 4) {
      errors.name = "Name must be longer than 4  characters";
    }else {
      errors.name = "";
    }


    //User Name validation
    const username = Secretary.username;
    if (!Secretary.username.trim()) {
      errors.username = "Username is required";
    } else if (username.length < 4) {
      errors.username = "Username must be longer than 4  characters";
    }else {
      errors.username = "";
    }

  

   //password validation
   const cond1 = "/^(?=.*[a-z]).{6,20}$/";
   const cond2 = "/^(?=.*[A-Z]).{6,20}$";
   const cond3 = "/^(?=.*[0-9]).{6,20}$";
   //  const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
  //  const cond3 = "/^(?=.*[0-9]).{6,20}$/";
   const password = Secretary.password;
   if (!password) {
     errors.password = "Password is required";
   } else if (Secretary.password.length < 6) {
     errors.password = "Password must be longer than 6 characters";
   } else if (Secretary.password.length >= 20) {
     errors.password = "Password must shorter than 20 characters";
   } else if(Secretary.password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } 
    else if (Secretary.password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (Secretary.password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    }
    else {
     errors.password = "";
   }

 

   setValidation(errors);
 };


 useEffect(() => {
  checkValidation();
}, [Secretary]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, username, password} = Secretary;
    
    try {
    const res = await axios.post("http://localhost:8000/api/auth/Secretary", {
     
       name , username, password 

    })
        alert("Account successfully created", "success")
        res.data && window.location.replace("/SecretaryLogin");
    }
    catch(err){
      // props.showAlert("Invalid Details", "danger")
      setError(true);
    }
    
}
const handleChange= (e)=>{
    setSecretary({...Secretary, [e.target.name]: e.target.value})
}

  
  




  return (
    <div className='StSignUp-page'>
        
      
    <div className='SPSt-left'>

  </div>
  <form  className='App' onSubmit={handleSubmit}>
      <div className='SPSt-right'>
    <h1>Secretary</h1>
             
             <div>
                 <label>Name</label>
                 <input type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter First Name" 
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={Secretary.name}
                  required
                
                />
                {validation.name &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.name}</p></span>}
             </div>

             <div>
                 <label>User Name</label>
                 <input type="text" 
                 name="username" 
                  
                 id="username" 
                 placeholder="Enter UserName" 
                 className="form-control"
                 onChange={(e) => handleChange(e)}
                  value={Secretary.username}
                  required
                />
                  {validation.username &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.username}</p></span>}

             </div>

             <div>
                 <label>Set Password</label>
                 <input type="password"  
                 name="password" 
                  
                 id="password" 
                 placeholder="Password" 
                 className="form-control"
                onChange={(e) => handleChange(e)}
                  value={Secretary.password}
                  required
                />
                  {validation.password &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.password}</p></span>}

                
                
             </div>

             <button type="submit" className="btn btn-create">Submit</button>
             {error && <span style={{color:"red",paddingLeft:"10px",fontSize:"20px", marginTop:"10px"}}>Invalid Details!</span>}
      </div>
    </form>
  
  </div>
  )
}

export default SecretarySignUp
