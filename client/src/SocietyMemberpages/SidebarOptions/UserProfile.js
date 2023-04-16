import React from 'react'
import { useContext, useState } from "react";
import { Context } from "../../context/Context"
import axios from "axios";

import SidebarSocietyMember from '../SidebarSocietyMember'


function UserProfile(props){

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
 
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [success, setSuccess] = useState(false);
 
  const { user, dispatch } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      
      fname,lname,  username,address, password,contactNo,
    };
    try {
      const res = await axios.put("/SocietyMembers/" + user._id, updatedUser);
      setSuccess(true);

      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
 
    <div className='SM-Side-User'>
        
    <SidebarSocietyMember/>
    
    

    <div className="SM-userPage">
    
    
      <div className=''>
      <h1>SocietyMember</h1>
          {/* <span className="settingsUpdateTitle">Update Your Account</span> */}
          
        </div>
        <form className="App" onSubmit={handleSubmit}>
          
        <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.lname}
            onChange={(e) => setLname(e.target.value)}
          />
            
          
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        
        
          {/* <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder={user.password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}

          <label>Contact No</label>
          <input
            type="number"
            className="form-control"
            placeholder={user.contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        

          {/* <button className="btn-create" type="submit">
            Update
          </button> */}
          {success && (
            <span
              style={{ color: "Blue", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
   

</div>

  </div>
  
  )
}

export default UserProfile

