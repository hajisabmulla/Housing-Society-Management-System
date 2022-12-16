import React from 'react'

import SidebarSocietyMember from '../SidebarSocietyMember'
function MonthlyFees() {
  return (
    <div className='SM-Side-User'>
        
        <SidebarSocietyMember/>
        
        

        <div className="SM-userPage">
 
  <div className='Fees'>

  <div className='Pay-Fees'>
    <form>
       
   
    <h1 className="H1" >Monthly Fees</h1>
      
    <div className="dropdown">
       <label>Fees Type</label>
        <select className="btn btn-secondary dropdown-toggle" type="button" >
            <option>Select Fees Type</option>
            <option>Maintenance Charges</option>
            <option>Parking Charges</option>
            <option>Late Fee</option>
        
        </select>
        </div> 
      
        <div className='Amount'>
           
        <label>Amount</label>
        <input type="number" placeholder="Enter Amount" className="Form-Input" />
  
         </div>

        <div className='pay'>
         <button className='btn btn-pay'>Pay</button>
        </div>


     </form>
   </div>
  
 </div>

 </div>
       
       
     
    
    </div>
  )
}

export default MonthlyFees
