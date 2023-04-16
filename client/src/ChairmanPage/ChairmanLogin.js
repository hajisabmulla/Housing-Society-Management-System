import axios from "axios";
import { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const ChairmanLogin =(props) => {

  
  const { dispatch, isFetching } = useContext(Context);

  let [Chairman, setChairman] = useState({username: "", password:""})


  const [validation, setValidation] = useState({
    username: "",
    password: "",
    
  });

  
  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));
    
  


    //User Name validation
    const username = Chairman.username;
    if (!Chairman.username.trim()) {
      errors.username = "Username is required";
    } else {
      errors.username = "";
    }

    
   

   //password validation

   const password = Chairman.password;
   if (!password) {
     errors.password = "Password is required";
   } 
    else {
     errors.password = "";
   }


  

   setValidation(errors);
 };

 useEffect(() => {
  checkValidation();
}, [Chairman]);

  // const navigate = useHistory();
  const handleSubmit = async (e) => {
     e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/api/auth/ChairmanLogin", {
       
               username:Chairman.username,
               password:Chairman.password,

      })
      
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      alert("User Logged in Successfully");
          // navigate("/ChairmanCRUD")
          
    }
    catch(err){

    }
    
  
  }
  const handleChange= (e)=>{
      setChairman({...Chairman, [e.target.name]: e.target.value})
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
        <label for="ChairmanUserId" className="form-label">User Name</label>
        <input type="text"  
        placeholder='UserName' 
        className="form-control" 
        value={Chairman.username} 
        onChange={(e) => handleChange(e)}
        name="username" 
        id="username" 
        aria-describedby="IdHelp"
        
        />
          {validation.username &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.username}</p></span>}


        <div id="IdHelp" className="form-text">Never share your Credentials with anyone else.</div>
        </div>
        <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password"  
        value={Chairman.password} 
        onChange={(e) => handleChange(e)}
        name="password" 
        placeholder='Password' 
        className="form-control" 
        id="password" 
       
        />
            {validation.password &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.password}</p></span> }

        </div>

        <button type="submit" className="btn btn-sub" >Submit</button>

        {/* <Link className="link" to="/ForgetPassword">Forget Password?</Link> */}
        <Link to="../ChairmanSignup" className="btn btn-sign">Register</Link>

        <br></br>
        <br></br>
        <p className='form-text'>If your new to this site please create a new Account</p>
        </div>
        </div>




        </form>
        </div>
  )
}

export default ChairmanLogin
