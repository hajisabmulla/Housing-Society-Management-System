import React from 'react'

import SidebarSocietyMember from '../SocietyMemberpages/SidebarSocietyMember'
function Payment() {
  return (
     
    <div className='SM-Side-User'>
        
        <SidebarSocietyMember/>
        
        

        <div className="SM-userPage">
    
        <div className='Fees'>

<div className='Pay-Fees'>

    <h1 className='H1'>UPI Payment</h1>
    <br></br>
    <div className='QR_Instruction'>
    <h4>Scan The QR Code below for Making Transaction!!!</h4>
    </div>

    <div className="QR-Code" >
       <div className='img-top'>

        
       </div>
       
        </div>
        <div className="card-b">
            
            <p className="card-t">Upi ID: XXXXXXXXXXXXX</p>
            

        </div>
        
    
 </div>

     </div>
  </div>

      </div>
      
       
       
  )
}

export default Payment
