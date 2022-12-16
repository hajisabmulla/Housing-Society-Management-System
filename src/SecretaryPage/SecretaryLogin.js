import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useState, } from 'react'

const SecretaryLogin=(props)=> {


  let [Secretary, setSecretary] = useState({username: "", password:""})
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:8000/api/auth/SecretaryLogin", {
          method: 'POSt',

          headers: {
              'Content-Type': 'application/json'
               },
               body: JSON.stringify({username:Secretary.username,password:Secretary.password })

      });
      const json = await response.json()
      console.log(json);
      if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token', json.authtoken)
          navigate("/AddMeetings")
          props.showAlert("Logged in successfully", "success")
         
         
      }
      else{
          props.showAlert("Invalid credentials", "danger")
      }
  }
  const onChange= (e)=>{
      setSecretary({...Secretary, [e.target.name]: e.target.value})
  }






  return (
    <div className='Login'>
    <form  className="App" onSubmit={handleSubmit}>
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
        <label for="SecretaryUserId" className="form-label">User Name</label>
        <input type="text" placeholder='User Name' value={Secretary.username} onChange={onChange} name="username" id="username" className="form-control" aria-describedby="IdHelp"/>
        <div id="IdHelp" className="form-text">Never share your Credentials with anyone else.</div>
        </div>
        <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password"  value={Secretary.password} onChange={onChange} name="password" placeholder='Password' className="form-control" id="password"/>
        </div>

        <button type="submit" className="btn btn-sub">Submit</button>

        <Link className="link" to="/ForgetPassword">Forget Password?</Link>
        <br></br>
        <br></br>
        <p className='form-text'>If your new to this site please create a new Account</p>
        <Link to="../SecretarySignUp" className="btn btn-sign">Register</Link>
        </div>
        </div>




        </form>
        </div>
  )
}

export default SecretaryLogin
