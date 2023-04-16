import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../context/Context';
function SidebarSecretary() {
  
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">
      <div>
      <Link type="button" to="/STUserProfile" className="btn btn-UserProfile">User Profile</Link>
      </div>
      <div>
      <Link type="button" to="/AddMeetings" className="btn btn-UserProfile">Add Meetings</Link>
      </div>


        <div>
      <Link type="button" to="/ManageMeetings" className="btn btn-UserProfile">Manage Meetings</Link>
      </div>


      <div className="User-SignOut">
      <Link type="button" to="/" className="btn btn-User-signOut" onClick={handleLogout}> {user && "LOGOUT"}</Link>
      </div>
    </div>
    </div>
  )
}

export default SidebarSecretary
