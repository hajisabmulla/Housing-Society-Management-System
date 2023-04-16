import axios from 'axios';
import React from 'react'
import {useState,useEffect } from 'react'



const SocietyMemberSignUp = (props) => {

  
  const [error, setError] = useState(false);
  
  let [SocietyMember, setSocietyMember] = useState({
    
    fname:"",
    lname:"",
    username:"",
    address:"",
    password:"",
    contactNo:"",
   


    });
    
    const [validation, setValidation] = useState({
      fname:"",
      lname:"",
      username:"",
      address:"",
      password:"",
      contactNo:"",
     
      
    });


    const checkValidation = () => {
      let errors = JSON.parse(JSON.stringify(validation));
      
      //first Name validation
      const fname = SocietyMember.fname;
      if (!SocietyMember.fname.trim()) {
        errors.fname = "First Name is required";
      } else if (fname.length < 4) {
        errors.fname = "First Name must be longer than 4  characters";
      }else {
        errors.fname = "";
      }

        //Last Name validation
        const lname = SocietyMember.lname;
        if (!SocietyMember.lname.trim()) {
          errors.lname = "Last Name is required";
        } else if (lname.length < 4) {
          errors.lname = "Last Name must be longer than 4  characters";
        }else {
          errors.lname = "";
        }
  


      //User Name validation
      const username = SocietyMember.username;
      if (!SocietyMember.username.trim()) {
        errors.username = "Username is required";
      } else if (username.length < 4) {
        errors.username = "Username must be longer than 4  characters";
      }else {
        errors.username = "";
      }

        //address validation
        const address = SocietyMember.address;
        if (!SocietyMember.address.trim()) {
          errors.address = "address is required";
        } else if (address.length < 6) {
          errors.address = "address must be longer than 4  characters";
        }else {
          errors.address = "";
        }
  
     
  
     //password validation
     const cond1 = "/^(?=.*[a-z]).{6,20}$/";
     const cond2 = "/^(?=.*[A-Z]).{6,20}$";
     const cond3 = "/^(?=.*[0-9]).{6,20}$";
     //  const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    //  const cond3 = "/^(?=.*[0-9]).{6,20}$/";
     const password = SocietyMember.password;
     if (!password) {
       errors.password = "Password is required";
     } else if (SocietyMember.password.length < 6) {
       errors.password = "Password must be longer than 6 characters";
     } else if (SocietyMember.password.length >= 20) {
       errors.password = "Password must shorter than 20 characters";
     } else if(SocietyMember.password.match(cond1)) {
        errors.password = "Password must contain at least one lowercase";
      } 
      else if (SocietyMember.password.match(cond2)) {
        errors.password = "Password must contain at least one capital letter";
      } else if (SocietyMember.password.match(cond3)) {
        errors.password = "Password must contain at least a number";
      }
      else {
       errors.password = "";
     }


      //contactNo validation
      const contactNo = SocietyMember.contactNo;
      if (!SocietyMember.contactNo.trim()) {
        errors.contactNo = "contactNo is required";
      } else if (contactNo.length < 10) {
        errors.contactNo = "contactNo must be 10 characters";
      }
      else if (contactNo.length > 10) {
        errors.contactNo = "contactNo must be 10 characters";
      }else {
        errors.contactNo = "";
      }

  
    
  
     setValidation(errors);
   };
  
   useEffect(() => {
    checkValidation();
  }, [SocietyMember]);
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      const {fname, lname, username, address,  password, contactNo } = SocietyMember;
      try{
      const res = await axios.post("http://localhost:8000/api/auth/SocietyMembers", {
       

     


          fname,lname,  username,address, password,contactNo,
  
      })
      res.data && window.location.replace("/SocietyMemberLogin");
    
          alert("Account successfully created", "success");
          
      }
      catch(err){
        setError(true);
       
      }
      
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setSocietyMember({ ...SocietyMember, [name]: value });
  }

  return (
    <div className='SignUp-page'>
      
      
    <form className="App" onSubmit={handleSubmit}>

        <div className='SP-right'>
      <h1>SocietyMember</h1>
               
               
                   <label>First Name</label>
                   <input type="text" 
                   name="fname" 
                   
                   id="fname"  
                   placeholder="Enter First Name" 
                   className="form-control"
                  
                   onChange={(e) => handleChange(e)}
                   value={SocietyMember.fname}
                   required
                  
                  
                  />
                   {validation.fname &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px", marginTop:"10px"}}><p>{validation.fname}</p></span>}
               

               
                   <label>Last Name</label>
                   <input type="text" 
                    name="lname"                 
                    id="lname" 
                    placeholder="Enter Last Name"
                    className="form-control"
                  
                    onChange={(e) => handleChange(e)}
                    value={SocietyMember.lname}
                    required
                    
                  
                  
                  />
                   {validation.lname &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.lname}</p></span>}
               

              

               <div>
                   <label>Enter User Name</label>
                   <input type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Enter UserName" 
                    className="form-control"
                  
                    onChange={(e) => handleChange(e)}
                    value={SocietyMember.username}
                    required
                   
   
                  
                  />
                   {validation.username &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px", marginTop:"10px"}}><p>{validation.username}</p></span>}
                 
               </div>

               <div>
                   <label>Enter Address</label>
                   <input type="text" 
                   name="address" 
                   
                   id="address" 
                   placeholder="Enter Flat No" 
                   className="form-control"
                  
                   onChange={(e) => handleChange(e)}
                   value={SocietyMember.address}
                   required
                  
                  
                  
                  />
                   {validation.address &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px", marginTop:"10px"}}><p>{validation.address}</p></span>}
               </div>

               <div>
                   <label>Set Password</label>
                   <input type="password" 
                   name="password" 
                   id="password" 
                   placeholder="Enter Password.." 
                   className="form-control"
                   
                   onChange={(e) => handleChange(e)}
                   value={SocietyMember.password}
                   required
                  
                  
                  
                  
                  />
                   {validation.password &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px", marginTop:"10px"}}><p>{validation.password}</p></span>}
                 
               </div>


               <div>
                   <label>Enter Contact No (Must be 10 digit only)</label>
                   <input type="number" 
                   name="contactNo" 
                    id="contactNo" 
                    placeholder="Contact No.." 
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={SocietyMember.contactNo}
                    required
                   
                  
                  
                  
                  />
                   {validation.contactNo &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px", marginTop:"10px"}}><p>{validation.contactNo}</p></span>}
               </div>


               

               <button type="submit"  className="btn btn-create">Submit</button>
               {error && <span style={{color:"red",paddingLeft:"10px",fontSize:"20px", marginTop:"10px"}}>Invalid Details!</span>}
        </div>
      </form>
    
    </div>
    
  )
}

export default SocietyMemberSignUp;
