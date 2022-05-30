import React, { useState,useReducer } from 'react'
import Model from './model'
import { data } from '../../data'
//error is not solved 
const reducer=(state,action)=>{
  console.log(state);
  if(action.type === "ADD_ITEM")
  {
    const Items=[...state.people,action.payload]
    return {...state,
            people:Items,
            isModelOpen:true,
            modelContent:"added Item"
          };
  }
  if(action.type === "NO_ITEM")
  {
    return{...state,
           isModelOpen:true,
           modelContent:"Please Enter String"
    }
  }
  if(action.type === "REMOVE_ITEM")
  {
    return{...state,
           isModelOpen:false    
    }
  }
  if(action.type === "REMOVEiTEM")
  {
    const newPeople = state.people.filter((person)=>{
    person.id !== action.payload
    return ({...state, people:newPeople})
    })
  }
  // return state;
  throw new Error("no matching action type");
}
const defaultState = {
    people:[],
    isModelOpen:false,
    modelContent:""
}
const Index=()=> {
const [name,setName] = useState('');
// const [people,setPeople]=useState(data);
// const [showModel,setShowModel] = useState(false);
const [state,dispatch] = useReducer(reducer,defaultState);

const handleSubmit=(e)=>{
  e.preventDefault();
  if(name)
  {
    const newItem = {id:new Date().getTime().toString(),name};
    // setShowModel(true);
    // setPeople([...people,{id:new Date().getTime().toString()}, name ])
    // setName('')
    dispatch({type:"ADD_ITEM" , payload:newItem});
    setName('');
  }
  else{
    //  setShowModel(true);
    dispatch({type:"NO_ITEM"});
  }

}
const closeModel=()=>{
   dispatch({type:"REMOVE_ITEM"})
}
// console.log(data);
  return (
  <>
  {state.isModelOpen && <Model closeModel={closeModel} modelContent={state.modelContent}/>}
  <form onSubmit={handleSubmit}>
   <div>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
       <button>Submit</button>
   </div>
  </form>
  {state.people.map((person)=>{
      return <div key={person.id}>
       <h2>{person.name}</h2>
       <button onClick={()=>dispatch({type:"REMOVEiTEM",payload:person.id})}>Remove</button>
      </div>
  }

  )}
  </>
    
  )
}
export default Index