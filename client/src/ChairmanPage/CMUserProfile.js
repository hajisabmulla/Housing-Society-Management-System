import React from 'react'
import { useContext, useState } from "react";
import { Context } from "../context/Context"
import axios from "axios";
import SidebarChairman from './SidebarChairman';

function CMUserProfile() {
  const [name, setFname] = useState("");
  
  const [username, setUsername] = useState("");
 
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
 
  const { user, dispatch } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      
      name, username, password,
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
        
        <SidebarChairman/>
    
    

    <div className="SM-userPage">
    
    
      <div className=''>
      <h1>Chairman Profile</h1>
          {/* <span className="settingsUpdateTitle">Update Your Account</span> */}
          
        </div>
        <form className="App" onSubmit={handleSubmit}>
          
        <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.name}
            onChange={(e) => setFname(e.target.value)}
          />
        
            
          
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />

          
        
        
          {/* <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder={user.password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}

         
        

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

export default CMUserProfile
