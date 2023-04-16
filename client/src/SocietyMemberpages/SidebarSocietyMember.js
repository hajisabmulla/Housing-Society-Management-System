import React ,{useContext}from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../context/Context';
function SidebarSocietyMember() {

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (

    <div className='sidebar'>
      <div className="sidebarMenu">
        <div>
      <Link type="button" to="/UserProfile" className="btn btn-UserProfile">User Profile</Link>
      </div>

      <div>
      <Link type="button"  to="/MonthlyFees" className="btn btn-UserProfile">Monthly Fees</Link>
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
        


      <div className="User-SignOut">
      <Link type="button" to="/" className="btn btn-User-signOut" onClick={handleLogout}> {user && "LOGOUT"}</Link>
      </div>

    </div>
    </div>
  )
}

export default SidebarSocietyMember
