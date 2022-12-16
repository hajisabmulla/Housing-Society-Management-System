import React from 'react'
import { Link } from 'react-router-dom'

function SideBarTreasurer() {
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">
        <div>
      <Link type="button" to="/ManageExpenses" className="btn btn-UserProfile">Manage Expenses</Link>
      </div>

      <div>
      <Link type="button" to="/ViewFees" className="btn btn-UserProfile">View Fees</Link>
      </div>


      <div>
      <Link type="button" to="/TRMeetings" className="btn btn-UserProfile">Meetings </Link>
      </div>

      


     
            {/* <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Monthly Fees
        </button>
       
        </div>
      
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Annual Fees
        </button>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Sinking Fund</Link></li>
        
        </ul>
        </div>
      

        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            One Time Fees
        </button>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Premium</Link></li>
            <li><Link className="dropdown-item" to="#">Transfer Charges</Link></li>
            <li><Link className="dropdown-item" to="#">Entrance Fee</Link></li>
        </ul>
        </div> */}
      
      <div className="User-SignOut">
      <button type="button" className="btn btn-User-signOut">Sign Out</button>
      </div>
    </div>
    </div>
  )
}

export default SideBarTreasurer
