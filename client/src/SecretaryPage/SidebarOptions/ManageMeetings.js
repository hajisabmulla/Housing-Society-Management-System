import React from 'react'
import { useState, useEffect } from 'react';
import SidebarSecretary from '../SidebarSecretary'

function ManageMeetings() {

  let [Meetings,setMeetings]=useState([]);

  let [MeetingsCopy,setMeetingsCopy]=useState([]);

  // variable to store user while updating 
  let [updateMeetings,setUpdateMeetings]=useState({});

  let [margin,setMargin]=useState(-100);



  
useEffect(()=>{

  fetch("http://localhost:8000/api/auth/Meetings")
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data);
      setMeetings(data);
      setMeetingsCopy(data);
  })
  .catch(err=>{
      console.log(err);
  })


},[])


// function to delete a user 

function deleteMeetings(id)
{
  fetch(`http://localhost:8000/api/auth/Meetings/${id}`,{
      method:"DELETE"
  })
  .then((response)=>response.json())
  .then((data)=>{

      let tempMeetings=Meetings.filter((user)=>user._id!==id);
      setMeetings(tempMeetings);

  })
  .catch((err)=>{
      console.log(err);
  })
}



function readyUpdate(user)
{
  setMargin(0);
  setUpdateMeetings(user);
}

// function to read Value from form 

function readValue(property,value)
{
  setUpdateMeetings({...updateMeetings,[property]:value});
}

// function to update the user 

function update()
{
  fetch(`http://localhost:8000/api/auth/Meetings/${updateMeetings._id}`,{
      method:"PUT",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(updateMeetings)
  })
  .then((response)=>response.json())
  .then((data)=>{

      let index=Meetings.findIndex((user)=>user._id===updateMeetings._id);
      Meetings[index]=updateMeetings;
      setMeetings([...Meetings]);

    alert("Meetings Updated")

  })
  .catch((err)=>{
      console.log(err);
  })
}


// function to search user ny name 

function searchByProperty(property,value)
{
  let filteredMeetings=MeetingsCopy.filter((user)=>{
      return user[property].toUpperCase().includes(value.toUpperCase());
  })

  setMeetings(filteredMeetings);
}


  return (
    <>
    <div className='SM-Side-User'>
        
    <SidebarSecretary/>



<div className="SM-userPage">

     <div className='modal-overlay' id='modal-overlay' style={{marginTop:`${margin}%`}}>
    <div className='modal' >
    <i class="fa-sharp fa-solid fa-circle-xmark close" onClick={()=>{
                        setMargin(-100);
                    }} ></i>
            <h1>Manage Meetings</h1>
            <div class="modal-content">   
               <div>
                   <label>Agenda</label>
                   <input type="text" defaultValue={updateMeetings.agenda} placeholder="Enter Agenda" className="form-control"
                    onChange={(event)=>{
                      readValue("agenda",event.target.value);
                  }}/>
               </div>

               <div>
                   <label>Date</label>
                   <input type="text" defaultValue={updateMeetings.date} placeholder="Enter Date" className="form-control"
                    onChange={(event)=>{
                      readValue("date",event.target.value);
                  }}/>
               </div>

               <div>
                   <label>Time</label>
                   <input type="text" defaultValue={updateMeetings.time} placeholder="Enter Time" className="form-control"
                    onChange={(event)=>{
                      readValue("time",event.target.value);
                  }}/>
               </div>

               <div>
                   <label>Place</label>
                   <input type="text" defaultValue={updateMeetings.place} placeholder="Enter Place" className="form-control"
                    onChange={(event)=>{
                      readValue("place",event.target.value);
                  }}/>
               </div>

             
               

               <button onClick={update} className="btn btn-create">Update</button>
        </div>
        </div>
    </div>






    


    <div className="container chairmanContainer">
        <div>
            <div className="filters">

            <input onChange={(event)=>{
                searchByProperty("agenda",event.target.value);
            }} placeholder="Search By Agenda" className="form-control search-input"/>
            </div>
        
            
        </div>





        <h1 className='H1'>Scheduled Meetings</h1>
        <div className="ManageMeetings"> 

           
            <table className="table table-striped">
                <thead className="theme-heading">
                    <tr>
                        
                        <th>Agenda</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Place</th>
                        <th>Actions</th>
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
                                   
                                    <td className="actions">
                                        <i className="fa-solid fa-trash delete" onClick={()=>{
                                            deleteMeetings(user._id);
                                        }}></i>
                                        <i className="fa-solid fa-pen edit" onClick={()=>{
                                            readyUpdate(user);
                                        }}></i>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>

            </div>
        </div>

  

</div>




</div>

</>  
  )
}

export default ManageMeetings
