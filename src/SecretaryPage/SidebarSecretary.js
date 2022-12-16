import React from 'react'
import {Link} from 'react-router-dom'
function SidebarSecretary() {
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">

      <div>
      <Link type="button" to="/AddMeetings" className="btn btn-UserProfile">Add Meetings</Link>
      </div>


        <div>
      <Link type="button" to="/ManageMeetings" className="btn btn-UserProfile">Manage Meetings</Link>
      </div>

    
      
      <div className="User-SignOut">
      <button type="button" className="btn btn-User-signOut">Sign Out</button>
      </div>
    </div>
    </div>
  )
}

export default SidebarSecretary
