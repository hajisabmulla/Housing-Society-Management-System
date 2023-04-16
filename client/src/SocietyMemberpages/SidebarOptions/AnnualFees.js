import SidebarSocietyMember from '../SidebarSocietyMember'
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react'

const moment = require('moment');



let now = moment().format('MMMM Do YYYY, h:mm:ss a');

const d = now.toString();



function AnnualFees(){

   
  let  [AnnualFees, setAnnualFees] = useState({
    Type:"",
    amount:"",
    UserName:"",
    Address:"",
    createdAt: d,
    updateAt:d,

  });
   
  function readValue(property,value)
  {
    setAnnualFees({...AnnualFees,[property]:value});
      
  }


  function pay  ()
  {
     fetch("http://localhost:8000/api/auth/AnnualFees",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(AnnualFees)
          
      })
      
      .then((response)=>response.json())
      .then((data)=>{
          console.log(data);
       
      })
      
      .catch((err)=>{
          console.log(err);
      })
      
  }

  useEffect(()=>{
      console.log(AnnualFees);
     
  })


  return (

    
    
    <div className='SM-Side-User'>
        
        <SidebarSocietyMember/>
        
        

        <div className="SM-userPage">
 
 <div className='Fees'>

 <div className='Pay-Fees'>

   <form >
   
  
   <h1 className="H1" >Annual Fees</h1>
     
   <div className="dropdown">
      <label >Fees Type</label>
       <select  className="btn btn-secondary dropdown-toggle" type="button" 
       onChange={(event)=>{
        readValue("Type",event.target.value);
    }}
       >
           <option value="" >Select Fees Type</option>
           <option value="sinking fund">Sinking Fund</option>
           
       
       </select>
       </div> 
     
       <div className='Amount'>
          
       <label>Amount</label>
       <input type="number"  name="amount"  id="amount" placeholder="Enter Amount" className="Form-Input"
       onChange={(event)=>{
        readValue("amount",event.target.value);
    }} />
 
        </div>

        <div className='Amount'>
           
           <label>UserName</label>
           <input  name="UserName"  id="UserName" placeholder="Enter UserName" className="Form-Input"
          onChange={(event)=>{
           readValue("UserName",event.target.value);
       }}
           />
     
            </div>
   
            <div className='Amount'>
              
           <label>Address</label>
           <input  name="Address"  id="Address" placeholder="Enter Address" className="Form-Input"
          onChange={(event)=>{
           readValue("Address",event.target.value);
       }}
           />
     
            </div>
   

       <div className='pay'>
        <Link type="submit"  onClick={pay} to="Payment" className='btn btn-pay'>Pay</Link>
       </div>


    </form>
  </div>

      </div>
      </div>
      </div>
       
       
     
    
    
  )
}

export default AnnualFees
