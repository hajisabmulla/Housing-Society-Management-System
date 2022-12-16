import React from 'react'
import SidebarSocietyMember from '../SidebarSocietyMember'
function UserProfile() {
  return (
    <div className='SM-Side-User'>
        
    <SidebarSocietyMember/>
    
    

   <div className="SM-userPage">
 
    <div className='UserProf'>
    <div className='EditProfile'>
            <h3>Edit Profile</h3><i class="fa-sharp fa-solid fa-pen-to-square pen"></i>
          </div>
      <div className='userDetails'>
        <form>
          
      
      <h1 className="H1" >User Profile</h1>
  
               <div>
                   <label>First Name</label> 
                   <input type="text" placeholder="Enter First Name" className="Form-Input" />
                   
               </div>

               <div>
                   <label>Last Name</label> 
                   <input type="text" placeholder="Enter Last Name" className="Form-Input"/>
               </div>

               <div>
                   <label>Enter User Name</label> 
                   <input type="text" placeholder="Enter UserName" className="Form-Input" />
               </div>

               <div>
                   <label>Enter Address</label> 
                   <input type="text" placeholder="Enter Address" className="Form-Input"/>
               </div>

               <div>
                   <label>Set Password</label>
                   <input type="password" placeholder="Password" className="Form-Input"/>
               </div>


               <div>
                   <label>Enter Contact No</label> 
                   <input type="number" placeholder="Contact No..." className="Form-Input"/>
               </div>


               

               <button className="btn btn-create">Save</button>
       
        
        </form>
      </div>
      <div class="custom-shape-divider-bottom-1668325809">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 140" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    </div>

    </div>
    </div>
    
  )
}

export default UserProfile
