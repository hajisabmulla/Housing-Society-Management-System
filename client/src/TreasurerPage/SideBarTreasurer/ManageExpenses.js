import React,{useState, useEffect} from 'react'
import SideBarTreasurer from '../SideBarTreasurer'


const moment = require('moment');

let now = moment().format('MMMM Do YYYY, h:mm:ss a');
const d = now.toString();

function ManageExpenses() {

  let [ManageExpenses,setManageExpenses]=useState({

    Type:"",
    amount:"",
    createdAt:d,
    updatedAt:d,

  });


  
  let [ManageExpense,setManageExpense]=useState([]);
  let [ManageExpenseCopy,setManageExpenseCopy]=useState([]);

  function deleteExpense(id)
  {
      fetch(`http://localhost:8000/api/auth/ManageExpenses/${id}`,{
          method:"DELETE"
      })
      .then((response)=>response.json())
      .then((data)=>{
  
          let tempManageExpenses=ManageExpense.filter((user)=>user._id!==id);
          setManageExpense(tempManageExpenses);
  
      })
      .catch((err)=>{
          console.log(err);
      })
  }
  

  useEffect(()=>{

  fetch("http://localhost:8000/api/auth/ManageExpenses")
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data);
      setManageExpense(data);
      setManageExpenseCopy(data);
  })
  .catch(err=>{
      console.log(err);
  })


},[])


  

   
  function readValue(property,value)
  {
    setManageExpenses({...ManageExpenses,[property]:value});
      
  }


  function pay()
  {
      fetch("http://localhost:8000/api/auth/ManageExpenses",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(ManageExpenses)
          
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
      console.log(ManageExpenses);
  })


  

  return (
    <div className='SM-Side-User'>
        
    <SideBarTreasurer/>
    
    

   <div className="SM-userPage">
    <div className='Fees'>

 <div className='Pay-Fees'>

   <form >
   
  
   <h1 className="H1" >Manage Expenses</h1>
     
   <div className="dropdown">
      <label > Expenses</label>
       <select  className="btn btn-secondary dropdown-toggle" type="button" 
       onChange={(event)=>{
        readValue("Type",event.target.value);
    }}
       >
           <option value="" >Select Expenses Type</option>
           <option value="service">Service</option>
           <option value="Maintenance">Maintenance</option>
           <option value="Repair">Repair</option>
       </select>
       </div> 
     
       <div className='Amount'>
          
       <label>Amount</label>
       <input type="text"  name="amount"  id="amount" placeholder="Enter Amount" className="Form-Input"
       onChange={(event)=>{
        readValue("amount",event.target.value);
    }} />
 
        </div>

       <div className='pay'>
        <button type="submit" onClick={pay}  className='btn btn-pay'>Manage</button>
       </div>


    </form>
  </div>
  <div>
  <form className='expense'>
  
    
  <h1 className="H1" >Expenses</h1>

  
              <table className="table table-striped">
                  <thead className="theme-heading">
                      <tr>
                          
                          <th>Fees Type</th>
                          <th>Amount</th>
                          <th>Payment Time</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
  
                  <tbody>
  
                      {
                          ManageExpense.map((user,index)=>{
                              return (
                                  <tr key={index}>
                                      
                                      <td>{user.Type}</td>
                                      <td>{user.amount}</td>
                                      <td>{user.createdAt}</td>
                                     
                                      <td className="actions">
                                        <i className="fa-solid fa-trash delete" onClick={()=>{
                                            deleteExpense(user._id);
                                        }}></i>
                                      
                                    </td>
                                     
                                  </tr>
                              )
                          })
                      }
  
                  </tbody>
  
              </table>
  

  </form>
</div>
      </div>
      
   
   </div>
   
   
 

</div>
  )
}

export default ManageExpenses
