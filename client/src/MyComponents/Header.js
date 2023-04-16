import React,{ useContext } from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../context/Context'
import {useHistory} from 'react-router-dom';

function Header() {

    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    }
    let navigate=useHistory();

    function redirectToLoginPage()
    {
      
       navigate.push("../LoginPage");
    }
  
  return (
    <div>
                    <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <div className="navbar-brand" href="#">
           
           ICON
           
            {/* <img src="./Images/HousingSocietyMS.png" alt="bug" /> */}
            </div>
            
           
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="">About Us</Link>
                </li>
                
                
   <li className='nav-item'>
      <Link type="button" to="/" className="nav-link" onClick={handleLogout}> {user && "LOGOUT"}</Link>
      </li>
                
         
            
                
            </ul>



            {user ? (
          <>
          <h4 className="us-name">Hii, {user.username }</h4>
        
        
          
          </>
        

        ) : (
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item LinkBTN">
                <Link className="nav-link LinkBTN" to="LoginPage" role="button" onClick={redirectToLoginPage}>
                    Login <i class="fa-solid fa-user-plus user"> </i>
                </Link>
               
                </li>
          </ul>
        )}
            </div>
        </div>
        </nav>
    </div>
  )
}




export default Header

