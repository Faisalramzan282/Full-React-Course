// import React,{useState} from 'react'
// //RuleNo:1==>component name must be uppercase
// //RuleNo:2==>useState==>must be used in component/function's body
// //(((((RuleNo:3==>can not call conditionally==>This means they should not be called 
// //in if/else blocks, loops, or nested functions
// //  if (isLoggedIn){
// //     const [hasLiked, setHasLiked] = useState(false) 
// // this is obviously not allowed and will throw an error
// //  })))))


// function UseState() {
//     console.log(useState("Hello World"));
//     const value=useState(11)[0];
//     const handler= useState(1)[0];
//     console.log(value,handler);
// const [text,setvalue]=useState("Random name");
// const changeName=()=>{
//     if(text === "Random name")
//     {
//         setvalue("Faisal Ramzan");
//     }
//     else{
//         value("Random name")
//     }
    
//  }
//   return (
//     <React.Fragment>
//       <h1>{text}</h1>
//       <button type='button' onClick={changeName}>change name</button>
//     </React.Fragment>
//   )
// }

// export default UseState