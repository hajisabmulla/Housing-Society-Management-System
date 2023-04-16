import React,{useState,useEffect} from 'react'
import SidebarSocietyMember from '../SidebarSocietyMember'

import { Link } from 'react-router-dom';


const moment = require('moment');

let now = moment().format('MMMM Do YYYY, h:mm:ss a');
const d = now.toString();

function OneTimeFees() {


  let  [OneTimeFees, setOneTimeFees] = useState({
    Type:"",
    amount:"",
    UserName:"",
    Address:"",
    createdAt: d,
    updateAt:d,


  });
        
  function readValue(property,value)
  {
    setOneTimeFees({...OneTimeFees,[property]:value});
      
  }

  function pay()
  {
      fetch("http://localhost:8000/api/auth/OneTimeFees",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(OneTimeFees)
          
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
      console.log(OneTimeFees);
  })
  return (
    <div className='SM-Side-User'>
        
    <SidebarSocietyMember/>
    
   
    <div className="SM-userPage">
 
 <div className='Fees'>

 <div className='Pay-Fees'>
   <form>
      
  
   <h1 className="H1" >One Time Fees</h1>
     
   <div className="dropdown">
      <label>Fees Type</label>
       <select className="btn btn-secondary dropdown-toggle" type="button" 
        onChange={(event)=>{
          readValue("Type",event.target.value);
      }}>
           <option value="">Select Fees Type</option>
           <option value="Premium">Premium</option>
           <option value="Transfer Charges">Transfer Charges</option>
           <option Value="Entrance Fee">Entrance Fee</option>
       
       </select>
       </div> 
     
       <div className='Amount'>
          
       <label>Amount</label>
       <input name="amount" type="number"  id="amount" placeholder="Enter Amount" className="Form-Input"
       onChange={(event)=>{
        readValue("amount",event.target.value);
    }}
       />
 
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
        <Link type="submit" to="Payment" onClick={pay} className='btn btn-pay'>Pay</Link>
       </div>


    </form>
  </div>

      </div>
      </div>
      </div>
       
       
     
  )
}

export default OneTimeFees
