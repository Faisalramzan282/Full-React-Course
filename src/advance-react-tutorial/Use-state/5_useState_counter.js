import React,{useState} from 'react'

function Counter() {
  let [value,setvalue]=useState(0);
  let [val,setVal]=useState(0);
  const increaseLater=()=>{
   setTimeout(() => {
    //  setVal(val+1);
    setVal(()=>{
       return val+1;
    })
   }, 2000);
  }
  return (
    <>
      <h2>Simple Counter</h2>
      <h3>{value}</h3>
      <button type='button' onClick={()=>{
       
          setvalue(value+1)
      }}>Increase</button>
      <button type='button' onClick={()=>{
        setvalue(value-1)
      }}>decrease</button>
      <button type='button' onClick={()=>{
        setvalue(0)
      }}>Reset</button>

      {/* //More Complex Counter */}
      <h2>Complex Counter</h2>
      <h3>{val}</h3>
      <button type='button' onClick={increaseLater()}>Increase Later</button>
    </>
  )
}

export default Counter