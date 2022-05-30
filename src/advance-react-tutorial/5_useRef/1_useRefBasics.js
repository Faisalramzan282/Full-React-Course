import React,{useState,useEffect,useRef} from 'react'
//preserve values
//does not trigger  ----re-renders
//target DOM nodes/elements

const StateBasics=()=> {
const refContainer = useRef("null");
const divContainer = useRef("null")

const handleChange=(e)=>{
   e.preventDefault();
   console.log(refContainer.current.value);
   console.log(divContainer.current.value);
  }
console.log(refContainer);
useEffect=()=>{
  console.log(refContainer.current.value);
  refContainer.current.focus();
}
  return (
    <>
     <form onSubmit={handleChange}>
       <div>
         <input type="text" name="yes" ref={refContainer} />
         <button type='button'>Submit</button>
       </div>
   
     </form>
     <div ref={divContainer}>Hello World</div>
    </>
  )
}

export default StateBasics