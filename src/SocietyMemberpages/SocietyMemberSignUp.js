import React from 'react'
import { useState} from 'react'

import { useNavigate } from "react-router-dom";
const SocietyMemberSignUp = (props) => {



const navigate = useNavigate();
  let [SocietyMember, setSocietyMember] = useState({
    
    fname:"",
    lname:"",
    username:"",
    address:"",
    password:"",
    contactNo:"",

    });
    
    

    // function readValue(property,value)
    // {
    //   setSocietyMember({...SocietyMember,[property]:value});
        
    // }

    // function create()
    // {
    //     fetch("http://localhost:8000/api/v1/SocietyMembers",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(SocietyMember)
            
    //     })
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data);
            
    //         navigate("/SocietyLogin");
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    // useEffect(()=>{
    //     console.log(SocietyMember);
    // })

    // const onSubmit = (data) => console.log(data);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const {fname, lname, username, address,  password, contactNo } = SocietyMember;
      const response = await fetch("http://localhost:8000/api/auth/SocietyMembers", {
       
          method: 'POST',
  
          headers: {
              'Content-Type': 'application/json'
               },
               body: JSON.stringify({fname,lname,  username,address, password,contactNo})
  
      });
      const json = await response.json()
      console.log(json);
      if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token', json.authtoken)
          navigate("/SocietyLogin")
          props.showAlert("Account successfully created", "success")
      }
      else{
        props.showAlert("Invalid Details", "danger")
      }
      
  }
  const onChange= (e)=>{
      setSocietyMember({...SocietyMember, [e.target.name]: e.target.value})
  }

  return (
    <div className='SignUp-page'>
        
      
      <div className='SP-left'>

    </div>
    <form className="App" onSubmit={handleSubmit}>
        <div className='SP-right'>
      <h1>SocietyMember</h1>
               
               <div>
                   <label>First Name</label>
                   <input type="text" name="fname" onChange={onChange} id="fname"  placeholder="Enter First Name" className="form-control"
                  //   onChange={(event)=>{
                  //     readValue("fname",event.target.value);
                  // }}
                  
                  
                  
                  />
               </div>

               <div>
                   <label>Last Name</label>
                   <input type="text" name="lname" onChange={onChange} id="lname" placeholder="Enter Last Name" className="form-control"
                  //   onChange={(event)=>{
                  //     readValue("lname",event.target.value);
                  // }}
                  
                  
                  
                  />
               </div>

              

               <div>
                   <label>Enter User Name</label>
                   <input type="text" name="username" onChange={onChange} id="username" placeholder="Enter UserName" className="form-control"
                  //   onChange={(event)=>{
                  //     readValue("username",event.target.value);
                  // }}
                  
                  
                  
                  />
                 
               </div>

               <div>
                   <label>Enter Address</label>
                   <input type="text" name="address" onChange={onChange} id="address" placeholder="Enter Flat No" className="form-control"
                  //   onChange={(event)=>{
                  //     readValue("address",event.target.value);
                  // }}
                  
                  
                  
                  />
               </div>

               <div>
                   <label>Set Password</label>
                   <input type="password" name="password" onChange={onChange} id="password" placeholder="Password" className="form-control"
                  //   onChange={(event)=>{
                  //     readValue("password",event.target.value);
                  // }}
                  
                  
                  />
               </div>


               <div>
                   <label>Enter Contact No</label>
                   <input type="number" name="contactNo" onChange={onChange} id="contactNo" placeholder="Contact No.." className="form-control"
                  //   onChange={(event)=>{
                  //     readValue("contactNo",event.target.value);
                  // }}
                  
                  
                  />
               </div>


               

               <button type="submit"  className="btn btn-create">Submit</button>
        </div>
      </form>
    
    </div>
    
  )
}

export default SocietyMemberSignUp;
