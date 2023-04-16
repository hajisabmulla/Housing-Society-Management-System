import axios from 'axios';
import React from 'react'
import {useState,useEffect } from 'react'



const TreasurerSignUp=(props)=>{
 
  const [error, setError] = useState(false);
    
  const [Treasurer, setTreasurer] = useState({
    name:"",
    username:"",
    password:"",

  });

  
  const [validation, setValidation] = useState({
    username: "",
    password: "",
    
  });

  
  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));
    
  
//first Name validation
const name = Treasurer.name;
if (!Treasurer.name.trim()) {
  errors.name = "Name is required";
} else if (name.length < 4) {
  errors.name = "Name must be longer than 4  characters";
}else {
  errors.name = "";
}


//User Name validation
const username = Treasurer.username;
if (!Treasurer.username.trim()) {
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
const password = Treasurer.password;
if (!password) {
 errors.password = "Password is required";
} else if (Treasurer.password.length < 6) {
 errors.password = "Password must be longer than 6 characters";
} else if (Treasurer.password.length >= 20) {
 errors.password = "Password must shorter than 20 characters";
} else if(Treasurer.password.match(cond1)) {
  errors.password = "Password must contain at least one lowercase";
} 
else if (Treasurer.password.match(cond2)) {
  errors.password = "Password must contain at least one capital letter";
} else if (Treasurer.password.match(cond3)) {
  errors.password = "Password must contain at least a number";
}
else {
 errors.password = "";
}



  

   setValidation(errors);
 };

 useEffect(() => {
  checkValidation();
}, [Treasurer]);



    const handleSubmit = async (e) => {
      e.preventDefault();
      const {name, username, password} = Treasurer;
      try{

      
        const res = await axios.post("http://localhost:8000/api/auth/Treasurer", {
       
          name , username, password,
  
      })
      
          alert("Account successfully created", "success")
          res.data && window.location.replace("/TreasurerLogin");
      }
      catch(err){
        // props.showAlert("Invalid Details", "danger")
        setError(true);
      }
      
  }
  const handleChange= (e)=>{
    setTreasurer({...Treasurer, [e.target.name]: e.target.value})
}
  

  




  return (
    <div className='TrSignUp-page'>
        
      
    <div className='SPTr-left'>

  </div>
  <form className='App' onSubmit={handleSubmit}>
      <div className='SPTr-right'>
    <h1>Treasurer</h1>
             
    <div>
                 <label>Name</label>
                 <input type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter First Name" 
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={Treasurer.name}
                  required
                
                />
                {validation.name &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.name}</p></span>}
             </div>

             <div>
                 <label>Enter User Name</label>
                 <input type="text" 
                 name="username" 
                  
                 id="username" 
                 placeholder="Enter UserName" 
                 className="form-control"
                 onChange={(e) => handleChange(e)}
                  value={Treasurer.username}
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
                  value={Treasurer.password}
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

export default TreasurerSignUp
