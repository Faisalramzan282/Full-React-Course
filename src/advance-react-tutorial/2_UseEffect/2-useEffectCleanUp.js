import React,{useState,useEffect} from 'react'

function UseEffectCleanUp() {
    const[size,setSize]=useState(window.innerWidth);
    console.log(size);

const checkSize=()=>{
    setSize(window.innerWidth);
}

    useEffect(()=>{
        console.log("UseEffect")
        window.addEventListener("resize",checkSize);
        return ()=>{
            console.log("cleanUP");
            window.removeEventListener("resize",checkSize);
        }
    })
    console.log("removeEventListener");
  return (
    <>
    <h2>UseState CleanUp</h2>
    <h2>{size}PX</h2>
    </>
  )
}

export default UseEffectCleanUp