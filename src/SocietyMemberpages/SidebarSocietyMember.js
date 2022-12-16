import React from 'react'
import {Link} from 'react-router-dom'
function SidebarSocietyMember() {
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">
        <div>
      <Link type="button" to="/UserProfile" className="btn btn-UserProfile">User Profile</Link>
      </div>

      <div>
      <Link type="button" to="/MonthlyFees" className="btn btn-UserProfile">Monthly Fees</Link>
      </div>


      <div>
      <Link type="button" to="/AnnualFees" className="btn btn-UserProfile">Annual Fees</Link>
      </div>


      <div>
      <Link type="button" to="/OneTimeFees" className="btn btn-UserProfile">One Time Fees</Link>
      </div>
        

      <div>
      <Link type="button" to="/Meetings" className="btn btn-UserProfile">Meetings</Link>
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

export default SidebarSocietyMember
