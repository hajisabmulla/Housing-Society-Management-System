import React from 'react'
import { useState} from 'react'

import { useNavigate } from 'react-router-dom';
const SecretarySignUp=(props)=> {
  
  const [Secretary, setSecretary] = useState({
    name:"",
    username:"",
    password:"",

  });
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, username, password} = Secretary;
    const response = await fetch("http://localhost:8000/api/auth/Secretary", {
     
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
             },
             body: JSON.stringify({name , username, password })

    });
    const json = await response.json()
    console.log(json);
    if(json.success){
        // save the auth token and redirect
        localStorage.setItem('token', json.authtoken)
        navigate("/SecretaryLogin")
        props.showAlert("Account successfully created", "success")
    }
    else{
      props.showAlert("Invalid Details", "danger")
    }
    
}
const onChange= (e)=>{
    setSecretary({...Secretary, [e.target.name]: e.target.value})
}

  
  

  // function readValue(property,value)
  // {
  //   setSecretary({...Secretary,[property]:value});
      
  // }

  // function createSecretary()
  // {
  //     fetch("http://localhost:8000/api/v1/CommitteeMembers/Secretary",{
  //         method:"POST",
  //         headers:{
  //             "Content-Type":"application/json"
  //         },
  //         body:JSON.stringify(Secretary)
          
  //     })
  //     .then((response)=>response.json())
  //     .then((data)=>{
  //         console.log(data);
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  // }

  // useEffect(()=>{
  //     console.log(Secretary);
  // })





  return (
    <div className='StSignUp-page'>
        
      
    <div className='SPSt-left'>

  </div>
  <form  className='App' onSubmit={handleSubmit}>
      <div className='SPSt-right'>
    <h1>Secretary</h1>
             
             <div>
                 <label>Name</label>
                 <input type="text" name="name" onChange={onChange} id="name" placeholder="Enter First Name" className="form-control"
                  />
             </div>

             <div>
                 <label>User Name</label>
                 <input type="text" name="username" onChange={onChange} id="username" placeholder="Enter UserName" className="form-control"
                //   onChange={(event)=>{
                //     readValue("username",event.target.value);
                // }}

                />
             </div>

             <div>
                 <label>Set Password</label>
                 <input type="password"  name="password" onChange={onChange} id="password" placeholder="Password" className="form-control"
                //   onChange={(event)=>{
                //     readValue("password",event.target.value);
                // }}
                
                />
             </div>

             <button type="submit" className="btn btn-create">Submit</button>
      </div>
    </form>
  
  </div>
  )
}

export default SecretarySignUp
