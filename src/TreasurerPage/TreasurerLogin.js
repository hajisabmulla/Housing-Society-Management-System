import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useState, } from 'react'

const TreasurerLogin=(props)=> {

  let [Treasurer, setTreasurer] = useState({username: "", password:""})
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:8000/api/auth/TreasurerLogin", {
          method: 'POSt',

          headers: {
              'Content-Type': 'application/json'
               },
               body: JSON.stringify({username:Treasurer.username,password:Treasurer.password })

      });
      const json = await response.json()
      console.log(json);
      if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token', json.authtoken)
          navigate("/TreasurerMainPage")
          props.showAlert("Logged in successfully", "success")
         
         
      }
      else{
          props.showAlert("Invalid credentials", "danger")
      }
  }
  const onChange= (e)=>{
      setTreasurer({...Treasurer, [e.target.name]: e.target.value})
  }






  return (
    <div className='Login'>
    <form className="App" onSubmit={handleSubmit}>
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
            <label for="TreasurerUserId" className="form-label">User Name</label>
            <input type="text" placeholder='User Name' className="form-control" value={Treasurer.username} onChange={onChange} name="username" id="username" aria-describedby="IdHelp"/>
            <div id="IdHelp" className="form-text">Never share your Credentials with anyone else.</div>
            </div>
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" placeholder='Password' className="form-control"value={Treasurer.password} onChange={onChange} name="password" id="password"/>
            </div>

        <button type="submit" className="btn btn-sub">Submit</button>

        <Link className="link" to="/ForgetPassword">Forget Password?</Link>
        <br></br>
        <br></br>
        <p className='form-text'>If your new to this site please create a new Account</p>
        <Link to="../TreasurerSignUp" className="btn btn-sign">Register</Link>
        </div>
        </div>




        </form>
        </div>
  )
}

export default TreasurerLogin
