import React,{useState,useEffect} from 'react'

const url="https://api.github.com/users"
function UseEffect_fetchData() {
const [users,setUsers]=useState([]);
const getUsers= async()=>{
const respone=await fetch(url);
const user=await respone.json();
// console.log(user);
setUsers(user);
}
useEffect(()=>{
    getUsers();
  
},[])

  return (
    <>
    
     <h2>gitHub Users</h2>
     <ul className='userz'> 
       {
           users.map((users)=>{
               const{id,login,avatar_url,html_url}=users;
               return <li key="id">
                    <img className='imgSetting' src={avatar_url} alt="image" />
                    <div>
                        <h4>{login}</h4>
                        <a href={html_url}profile></a>
                    </div>
               </li>
           })


       }

     </ul>
     
  

    </>
  )
}

export default UseEffect_fetchData