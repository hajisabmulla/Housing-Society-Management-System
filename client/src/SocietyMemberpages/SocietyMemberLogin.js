import axios from "axios";
import { useContext,useRef, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const SocietyMemberLogin =(props)=> {


  
  
  const { dispatch, isFetching } = useContext(Context);

    let [SocietyMember, setSocietyMember] = useState({
      username: "", 
      password:""
    })


    const [validation, setValidation] = useState({
      username: "",
      
      
      password: "",
      
    });


    const checkValidation = () => {
      let errors = JSON.parse(JSON.stringify(validation));
      
    


      //User Name validation
      const username = SocietyMember.username;
      if (!SocietyMember.username.trim()) {
        errors.username = "Username is required";
      } else {
        errors.username = "";
      }

      
     
  
     //password validation
  
     const password = SocietyMember.password;
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
  }, [SocietyMember]);
  


    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch({ type: "LOGIN_START" });
        try {
      

        const res = await axios.post("http://localhost:8000/api/auth/login", {
           

         username:SocietyMember.username,
         password:SocietyMember.password ,
              
        });
        console.log(res);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        alert("User Logged in Successfully");
            
            console.log("Logged in successfully", "success")
            
        }
     
        catch(err){
          
            console.log("Invalid credentials", "danger")
        }
    }
    const handleChange= (e)=>{
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
            <input
              type="text"
              placeholder='UserName' 
              className="form-control" 
              value={SocietyMember.username} 
              onChange={(e) => handleChange(e)}
              name="username" 
              id="username" 
              aria-describedby="IdHelp"
              required
          
          
          />
          {validation.username &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.username}</p></span>}
            <div id="IdHelp" className="form-text">Never share your Credentials with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password"  
            value={SocietyMember.password} 
            onChange={(e) => handleChange(e)}
            name="password" 
            placeholder='Password' 
            className="form-control" 
            id="password"

            required
          />
            {validation.password &&  <span style={{color:"red",paddingLeft:"10px",fontSize:"18px"}}><p>{validation.password}</p></span> }

        </div>
        
        <button type={"submit"}  className="btn btn-sub" >Submit</button>
        <Link to="/SocietyMemberSignUp" className="btn btn-sign">Register</Link>
        
        {/* <Link className="link" to="/ForgetPassword">Forget Password?</Link> */}
        <br></br>
        <br></br>
        <p className='form-text'>If your new to this site please create a new Account</p>
        </div>
        </div>




     </form>
    </div>
  )
}

export default SocietyMemberLogin;
