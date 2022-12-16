import React from 'react'
import {Link} from 'react-router-dom'
import { useState} from 'react'
import { useNavigate } from "react-router-dom";


const SocietyMemberLogin =(props)=> {


    //   const [ username, setUsername] = useState('');
    //   const [password, setPassword] = useState('');
    //   const navigate = useNavigate();
      
    //   const handleUsername =(e) => {
    //     setUsername(e.target.value)
    //   }
    //   const handlePassword = (e) => {
    //     setPassword(e.target.value)

    //   }

    //   const handleApi = (e) => {
    //     let userData = fetch('http://localhost:8000/api/v1/SocietyMembers',{
    //       method: 'GET',
    //       username : username,
    //       password : password,
          

    //   })

    //   if (userData) { // getItem can return actual value or null
    //     if (userData.username === e.password) {
    //       console.log(userData.username + " You Are Successfully Logged In");
    //       navigate("/UserProfile");
    //     } else {
    //       console.log("Username or Password is not matching with our record");
    //     }
    //   } else {
    //     console.log("UserName or Password is not valid");
    //   }
      
    // }

    let [SocietyMember, setSocietyMember] = useState({username: "", password:""})
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POSt',

            headers: {
                'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({username:SocietyMember.username,password:SocietyMember.password })

        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/UserProfile")
            props.showAlert("Logged in successfully", "success")
           
           
        }
        else{
            props.showAlert("Invalid credentials", "danger")
        }
    }
    const onChange= (e)=>{
        setSocietyMember({...SocietyMember, [e.target.name]: e.target.value})
    }
  



  return (

  
            <div className='Login'>
      <form  className="App" onSubmit={handleSubmit} >
        <div className='Login-form'>
        <div class="left">
        <div class="overlay">
          
        <h1>Hello 
          Welcome Back!!
        </h1>
        <br></br>
        
        <p>Glad to see you again</p>
        </div>
        </div>
        <div className='right'>
        
          <h1>Login</h1>
          <br></br>
        <div className="mb-3">
            <label for="SocietyMemberUserId" className="form-label">UserName</label> 
            <input type="text"  placeholder='UserName' className="form-control" value={SocietyMember.username} onChange={onChange} name="username" id="username" aria-describedby="IdHelp"
         
          
          
          />
          
            <div id="IdHelp" className="form-text">Never share your Credentials with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password"  value={SocietyMember.password} onChange={onChange} name="password" placeholder='Password' className="form-control" id="password"
          />
         
        </div>
        
        <button type={"submit"}  className="btn btn-sub">Submit</button>
        
        <Link className="link" to="/ForgetPassword">Forget Password?</Link>
        <br></br>
        <br></br>
        <p className='form-text'>If your new to this site please create a new Account</p>
        <Link to="/SocietyMemberSignUp" className="btn btn-sign">Register</Link>
        </div>
        </div>




     </form>
    </div>
  )
}

export default SocietyMemberLogin;
