import React,{useState,useEffect} from 'react'

//js
//const input=document.getElementById('myText');
//const inputValue=input.value;

//search on google=>dynamic object properties

const ControlInputs=()=> {
const [firstName,setFirstName]=useState('hello world');
const [email,setEmail]=useState('');
const [people,setPeople]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName && email)
        {
          const person = {id:new Date().getTime().toString() ,firstName, email};
          console.log(person);
          setPeople((people)=>{
           return [...people,person]
          })
        }
        else{
           console.log("empty value")
        }
    }
  return (
    <>
     <form className='myWorld' onSubmit={handleSubmit}>
        <div className='myText'>
         <label htmlFor="firstName">Name:</label>
         <input type="text" style={{marginTop:'5rem'}} id="firstName" 
         value={firstName}
         onChange={(e)=>setFirstName(e.target.value)}
         />
        </div>
        <div className='myText'>
         <label htmlFor="email">Email:</label>
         <input type="text" style={{marginTop:'5rem'}} id="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         />
        </div>
     </form>
    <button type='submit'onClick={handleSubmit} >Log In</button>
     {people.map((person,index)=>{
      const {id,firstName,email} = person;
      return(
        <div key={id}>
          <h4>{firstName}</h4>
          <h3>{email}</h3>
        </div>
      )
     }

     )
    }
    </>
  )
}


export default ControlInputs