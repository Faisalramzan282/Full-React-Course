import React,{useState,useEffect} from 'react'

const url="https://api.github.com/users/QuincyLarson"

const Multiple=()=>{
const [isLoading,isSetLoading] = useState(true);
const [isError,isSetError] = useState(false);
const [user,setUser] = useState('default user');

useEffect(()=>{
    fetch(url)
    .then((resp)=>{
        if(resp.status>=200 && resp.json<=299)
        {
           return resp.json();
          
        }
        else{
            isSetLoading(false);
            isSetError(true);
            throw new isError(resp.statusText);
        }
    })
    // .then((user)=>{
    //     const {login} = user;
    //     console.log(setUser(login));
    //     // isSetLoading(false);
    // }
    .then((user)=>{
        const {login} = user;
        setUser(login);
        // isSetLoading(false);
    })

    
    .catch((error)=>console.log(error))
},[])

if(isLoading)
{
  return  <h2>Loading...</h2>
}
if(isError)
{
    return  <h2>Error...</h2>
}
return (
    //  <h2>Multiple Returns</h2>
    <h2>{user}</h2>
  )
}
export default Multiple
