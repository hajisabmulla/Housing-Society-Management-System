import React from 'react'
import {useState, useEffect} from 'react'
import SidebarChairman from '../SidebarChairman';
const ChairmanCRUD=(props)=> {


    let [SocietyMembers,setSocietyMembers]=useState([]);

    let [SocietyMembersCopy,setSocietyMembersCopy]=useState([]);

    // // variable to store user while updating 
    let [updateSocietyMember,setUpdateSocietyMember]=useState({});

    let [margin,setMargin]=useState(-100);


useEffect(()=>{

    fetch("http://localhost:8000/api/auth/SocietyMembers")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        setSocietyMembers(data);
        setSocietyMembersCopy(data);
    })
    .catch(err=>{
        console.log(err);
    })


},[])


// function to delete a user 

function deleteSocietyMember(id)
{
    fetch(`http://localhost:8000/api/auth/SocietyMembers/${id}`,{
        method:"DELETE"
    })
    .then((response)=>response.json())
    .then((data)=>{

        let tempSocietyMembers=SocietyMembers.filter((user)=>user._id!==id);
        setSocietyMembers(tempSocietyMembers);

    })
    .catch((err)=>{
        console.log(err);
    })
}



function readyUpdate(user)
{
    setMargin(0);
    setUpdateSocietyMember(user);
}

// function to read Value from form 

function readValue(property,value)
{
    setUpdateSocietyMember({...updateSocietyMember,[property]:value});
}

// function to update the user 

function update()
{
    fetch(`http://localhost:8000/api/auth/SocietyMembers/${updateSocietyMember._id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updateSocietyMember)
    })
    .then((response)=>response.json())
    .then((data)=>{

        let index=SocietyMembers.findIndex((user)=>user._id===updateSocietyMember._id);
        SocietyMembers[index]=updateSocietyMember;
        setSocietyMembers([...SocietyMembers]);
    alert("Society Member Updated Successfully")


    })
    .catch((err)=>{
        console.log(err);
    })
}


// function to search user ny name 

function searchByProperty(property,value)
{
    let filteredSocietyMembers=SocietyMembersCopy.filter((user)=>{
        return user[property].toUpperCase().includes(value.toUpperCase());
    })

    setSocietyMembers(filteredSocietyMembers);
}




  return (

    <>
    <div className='SM-Side-User'>
        
    <SidebarChairman/>



<div className="SM-userPage">
     <div className='modal-overlay' id='modal-overlay' style={{marginTop:`${margin}%`}}>
    <div className='modal' >
    <i class="fa-sharp fa-solid fa-circle-xmark close" onClick={()=>{
                        setMargin(-100);
                    }} ></i>
            <h1>SocietyMember</h1>
            <div class="modal-content">   
               <div>
                   <label>First Name</label>
                   <input type="text" defaultValue={updateSocietyMember.fname} placeholder="Enter First Name" className="form-control"
                    onChange={(event)=>{
                      readValue("fname",event.target.value);
                  }}/>
               </div>

               <div>
                   <label>Last Name</label>
                   <input type="text" defaultValue={updateSocietyMember.lname} placeholder="Enter Last Name" className="form-control"
                    onChange={(event)=>{
                      readValue("lname",event.target.value);
                  }}/>
               </div>

               <div>
                   <label>Enter User Name</label>
                   <input type="text" defaultValue={updateSocietyMember.username} placeholder="Enter UserName" className="form-control"
                    onChange={(event)=>{
                      readValue("username",event.target.value);
                  }}/>
               </div>

               <div>
                   <label>Enter Address</label>
                   <input type="text" defaultValue={updateSocietyMember.address} placeholder="Enter Flat No" className="form-control"
                    onChange={(event)=>{
                      readValue("address",event.target.value);
                  }}/>
               </div>

       

               <div>
                   <label>Enter Contact No</label>
                   <input type="number" defaultValue={updateSocietyMember.contactNo} placeholder="Contact No.." className="form-control"
                    onChange={(event)=>{
                      readValue("contactNo",event.target.value);
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
                searchByProperty("username",event.target.value);
            }} placeholder="Search By UserName" className="form-control search-input"/>
            </div>
        
            
        </div>





        <h1 className='H1'> Society Members</h1>
        <div className="SMCRUD"> 

            
            <table className="table table-striped">
                <thead className="theme-heading">
                    <tr>
                        
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>UserName</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        SocietyMembers.map((user,index)=>{
                            return (
                                <tr key={index}>
                                    
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.address}</td>
                                    <td>{user.contactNo}</td>
                                   
                                    <td className="actions">
                                        <i className="fa-solid fa-trash delete" onClick={()=>{
                                            deleteSocietyMember(user._id);
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

export default ChairmanCRUD
