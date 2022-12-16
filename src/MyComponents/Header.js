import React from 'react'
import {Link,} from 'react-router-dom'

import {useNavigate} from 'react-router-dom';
function Header() {

    let navigate=useNavigate();

    function redirectToLoginPage()
    {
      
       navigate("../LoginPage");
    }

  return (
    <div>
                    <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <Link className="navbar-brand" href="#">Icon</Link>
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
                
                
            
         
            <li className="nav-item LinkBTN">
                <Link className="nav-link LinkBTN" to="LoginPage" role="button" onClick={redirectToLoginPage}>
                    Login <i class="fa-solid fa-user-plus user"> </i>
                </Link>
               
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}




export default Header

