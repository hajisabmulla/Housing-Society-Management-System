import React from 'react'
import { useState, useEffect } from 'react';
import SidebarSecretary from '../SidebarSecretary'




function AddMeetings() {

  
  let  [Meetings, setMeetings] = useState({
    agenda:"",
    date:"",
    time: "",
    place:"",

  });
 

  
        
  function readValue(property,value)
  {
    setMeetings({...Meetings,[property]:value});
      
  }

  function createMeetings()
  {
      fetch("http://localhost:8000/api/auth/Meetings",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(Meetings)
          
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
      console.log(Meetings);
  })
  
  var today = new Date().toISOString().split('T')[0];



  return (
    <div className='SM-Side-User'>
        
    <SidebarSecretary/>



<div className="SM-userPage">

<form className="App">
        <div className='Add-Meetings'>
      <h1>Add Meetings</h1>
               
               <div>
                   <label>Agenda</label>
                   <input type="text" name="agenda" id="agenda"  placeholder="Enter Agenda" className="form-control"
                    onChange={(event)=>{
                      readValue("agenda",event.target.value);
                  }}
                 
                  
                  />
               </div>

               <div>
                   <label>Date</label>
                   <input type="date" name="date"  id="date"  min={today} placeholder="Enter Meeting date" className="form-control"
                    onChange={(event)=>{
                      readValue("date",event.target.value);
                  }}
          
                  />
               </div>

              

               <div>
                   <label>Time</label>
                   <input type="time" name="time"  id="time" placeholder="Enter Meeting Time" className="form-control"
                    onChange={(event)=>{
                      readValue("time",event.target.value);
                  }}

                  />
                 
               </div>

               <div>
                   <label>Place</label>
                   <input type="text" name="place"  id="place" placeholder="Enter Meeting Place" className="form-control"
                    onChange={(event)=>{
                      readValue("place",event.target.value);
                  }}

                  />
                 
               </div>


              
           


               

               <button type="submit" onClick={createMeetings}  className="btn btn-create">Submit</button>
        </div>
      </form>
  
</div>




</div>
  )
}

export default AddMeetings
