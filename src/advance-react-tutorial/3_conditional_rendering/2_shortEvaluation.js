import React, { useState } from 'react'
//short circuit evaluation
//ternary operators
function ShortEval() {
    const[text,setText]=useState('Hello');
    const[isError,setIsError]=useState(false);
    const firstValue = text || 'Hello World';
    const secondValue = text && 'Hello World';

  return (
    <>
     <h2>{firstValue}</h2>
     <h4>Value:{secondValue}</h4>
     {text && <h6>Hellow World</h6>}
     {!text && <h6>Hellow World</h6>}
    <button type='button' onClick={()=>setIsError(!isError)}>Click ME</button>
    {isError && <h2>That is error!</h2>}
    {isError?(<h1>That is true sentence</h1>)
    :
    (<h1>That is false sentence</h1>)}
    </>
  )
}

export default ShortEval
