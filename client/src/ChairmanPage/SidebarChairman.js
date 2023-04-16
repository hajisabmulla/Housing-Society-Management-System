import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../context/Context';
function SidebarChairman() {

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">
 
      <div>
      <Link type="button" to="/CMUserProfile" className="btn btn-UserProfile">User Profile</Link>
      </div>


      <div>
      <Link type="button" to="/ChairmanCRUD" className="btn btn-UserProfile">ChairmanCRUD</Link>
      </div>

      <div>
      <Link type="button" to="/CMMeetings" className="btn btn-UserProfile">Meetings</Link>
      </div>


      <div className="User-SignOut">
      <Link type="button" to="/" className="btn btn-User-signOut" onClick={handleLogout}> {user && "LOGOUT"}</Link>
      </div>

    </div>
    </div>
  )
}

export default SidebarChairman
