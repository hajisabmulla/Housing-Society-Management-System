import React from 'react'
import {Link} from 'react-router-dom'
function SidebarChairman() {
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">

      <div>
      <Link type="button" to="/ChairmanCRUD" className="btn btn-UserProfile">ChairmanCRUD</Link>
      </div>

      <div>
      <Link type="button" to="/CMMeetings" className="btn btn-UserProfile">Meetings</Link>
      </div>



    </div>
    </div>
  )
}

export default SidebarChairman
