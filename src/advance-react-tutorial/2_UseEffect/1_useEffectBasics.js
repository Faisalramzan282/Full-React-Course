import React,{useState,useEffect} from 'react'

//by default runs after every re-renders
//second parameter in dependency list

const UseEffectBasics=()=> {
const [value,setValue] = useState(0); 
//can not called hooks conditionally 
//we can use conditions inside useEffect hook
//if(value>1){
    useEffect(()=>{
        console.log("call useEffect")
        if(value>1){
            document.title=`React Messages(${value})`
        }
        
    },[value])
//} 
  useEffect(()=>{
      console.log("hi!everyOne");
  },[value])

console.log("render component")
  return (
    <>
    <h1>UseEffect Basics</h1>
     <h3>{value}</h3>
     <button type='button' onClick={()=>setValue(value+1)}>Click Me</button>
    </>
  )
}
export default UseEffectBasics