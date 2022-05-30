import React,{useEffect} from 'react'



const Model=({modelContent,closeModel})=> {
  useEffect(()=>{
    setTimeout(() => {
      closeModel();
    }, 3000);
  })
  return (
    <>
    <p>{modelContent}</p>
    <h4>{closeModel}</h4>
    </>
  )
}

export default Model