import React,{useState, useEffect} from 'react'

import SideBarTreasurer from '../SideBarTreasurer'
function ViewOneTimeFees() {
  let  [OneTimeFees, setOneTimeFees] = useState([]);
  
  
  
    useEffect(()=>{
  
      fetch("http://localhost:8000/api/auth/OneTimeFees")
      .then((response)=>response.json())
      .then((data)=>{
          console.log(data);
          setOneTimeFees(data);
          
      })
      .catch(err=>{
          console.log(err);
      })
    
    
    },[])
  
  
  
  
  
  
  
    return (
      <div className='SM-Side-User'>
          
      <SideBarTreasurer/>
      
      
  
     <div className="SM-userPage">
  
  
  
     
    
  
    <h1 className="H1" >One Time Fees</h1>
    <form className='ViewFees'>
                <table className="table table-striped">
                    <thead className="theme-heading">
                        <tr>
                            <th>UserName</th>
                            <th>Address</th>
                            <th>Fees Type</th>
                            <th>Amount</th>
                            <th>Payment Time</th>
                            
                        </tr>
                    </thead>
    
                    <tbody>
    
                        {
                            OneTimeFees.map((user,index)=>{
                                return (
                                    <tr key={index}>
                                        
                                        <td>{user.UserName}</td>
                                      <td>{user.Address}</td>
                                      <td>{user.Type}</td>
                                      <td>{user.amount}</td>
                                      <td>{user.createdAt}</td>
                                     
                                       
                                       
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
    

export default ViewOneTimeFees
