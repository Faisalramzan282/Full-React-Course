import React,{useState,useEffect} from 'react'

const Hide=()=> {
const [show,setShow]=useState(false);
  return (
   <>
     <button style={{marginTop:'5rem'}} onClick={()=>setShow(!show)}>Show the toggle</button>
     {show && <Item/>}
   </>
    
    
  )
}
  const Item=()=>{
  const [size,setSize]=useState(window.innerWidth);
  const checkSize=()=>{
      setSize(window.innerWidth);
  }
  useEffect(()=>{
      window.addEventListener('resize',checkSize);
      return ()=>
      {
       window.removeEventListener('resize',checkSize);
      }
  },[])
    return(
        <div>
            <h2>window</h2>
            <h2>Size :{size} PX</h2>
        </div>
    )
  }
 



export default Hide