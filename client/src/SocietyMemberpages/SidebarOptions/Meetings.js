import React from 'react'
import { useState, useEffect } from 'react';
import SidebarSocietyMember from '../SidebarSocietyMember'
function Meetings() {

    let [Meetings,setMeetings]=useState([]);

  
  
    useEffect(()=>{

        fetch("http://localhost:8000/api/auth/Meetings")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setMeetings(data);
            
        })
        .catch(err=>{
            console.log(err);
        })
      
      
      },[])






  return (
    <div className='SM-Side-User'>
        
    <SidebarSocietyMember/>
    
    

    <div className="SM-userPage">

    <h1 className="H1" >Scheduled Meetings</h1>
<form className="Meetings">
  



            <table className="table table-striped">
                <thead className="theme-heading">
                    <tr >
                        
                        <th>Agenda</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Place</th>
                       
                    </tr>
                </thead>

                <tbody>

                    {
                        Meetings.map((user,index)=>{
                            return (
                                <tr key={index}>
                                    
                                    <td>{user.agenda}</td>
                                    <td>{user.date}</td>
                                    <td>{user.time}</td>
                                    <td>{user.place}</td>
                                   
                                   
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>


</form>
</div>

  </div>
  
   
   
 

  )
}

export default Meetings
