import axios from 'axios';
import React from 'react'
import {useState,useEffect } from 'react'




const ChairmanSignup = (props) => {

    
  const [error, setError] = useState(false);
    const [result, setResult] = useState({
 
    });
    
   
    let [Chairman, setChairman] = useState({
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
      const name = Chairman.name;
      if (!Chairman.name.trim()) {
        errors.name = "Name is required";
      } else if (name.length < 4) {
        errors.name = "Name must be longer than 4  characters";
      }else {
        errors.name = "";
      }


      //User Name validation
      const username = Chairman.username;
      if (!Chairman.username.trim()) {
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
     const password = Chairman.password;
     if (!password) {
       errors.password = "Password is required";
     } else if (Chairman.password.length < 6) {
       errors.password = "Password must be longer than 6 characters";
     } else if (Chairman.password.length >= 20) {
       errors.password = "Password must shorter than 20 characters";
     } else if(Chairman.password.match(cond1)) {
        errors.password = "Password must contain at least one lowercase";
      } 
      else if (Chairman.password.match(cond2)) {
        errors.password = "Password must contain at least one capital letter";
      } else if (Chairman.password.match(cond3)) {
        errors.password = "Password must contain at least a number";
      }
      else {
       errors.password = "";
     }

   
  
     setValidation(errors);
   };


   useEffect(() => {
    checkValidation();
  }, [Chairman]);
  


   

    const handleSubmit = async (e) => {
      e.preventDefault();
      // setResult(validationResults(Chairman));
      const {name, username, password} = Chairman;
      try{

      
      const res = await axios.post("http://localhost:8000/api/auth/Chairman", {
       name , username, password 
  
      })
      alert("User Created Successfully");
      
      res.data && window.location.replace("/ChairmanLogin");
      

          
  
     
      }
    catch(err){
      setError(true);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setChairman({ ...Chairman, [name]: value });
  }

    


  return (
    <div className='ChSignUp-page'>
        
      
    <div className='SPCm-left'>

  </div>
  <form className='App' onSubmit={handleSubmit}>
      <div className='SPCm-right'>
    <h1>Chairman</h1>
             
             <div>
                 <label>Name</label>
                 <input type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter First Name" 
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={Chairman.name}
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
                  value={Chairman.username}
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
                  value={Chairman.password}
                  required
                />
                  {validation.password &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.password}</p></span>}

                {result && <p style={{ color: "red" }}>{result.password}</p>}
             </div>

             

             <button type="submit" className="btn btn-create">Submit</button>
             {error && <span style={{color:"red",paddingLeft:"10px",fontSize:"20px", marginTop:"10px"}}>Invalid Details!</span>}
      </div>
    </form>
  
  </div>
  )
}

export default ChairmanSignup
