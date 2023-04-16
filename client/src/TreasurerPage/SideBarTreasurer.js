import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../context/Context';
function SideBarTreasurer() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className='sidebar'>
      <div className="sidebarMenu">

      <div>
      <Link type="button" to="/TRUserProfile" className="btn btn-UserProfile">User Profile</Link>
      </div>

        <div>
      <Link type="button" to="/ManageExpenses" className="btn btn-UserProfile">Manage Expenses</Link>
      </div>

      <div>
      <Link type="button" to="/ViewAnnualFees" className="btn btn-UserProfile">View Annual Fees</Link>
      </div>

      <div>
      <Link type="button" to="/ViewMonthlyFees" className="btn btn-UserProfile"> View Monthly Fees</Link>
      </div>

      <div>
      <Link type="button" to="/ViewOneTimeFees" className="btn btn-UserProfile"> View One Time Fees</Link>
      </div>

      <div>
      <Link type="button" to="/TRMeetings" className="btn btn-UserProfile">Meetings </Link>
      </div>

      <div className="User-SignOut">
      <Link type="button" to="/" className="btn btn-User-signOut" onClick={handleLogout}> {user && "LOGOUT"}</Link>
      </div>


    </div>
    </div>
  )
}

export default SideBarTreasurer
