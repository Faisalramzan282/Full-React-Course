// import React from 'react'
// import { useState } from 'react/cjs/react.production.min';
// import { data } from '../../data';


// function UseStateArray() {
// const [people,setPeople]=React.useState(data);
//  //remove single button
// const removeItems=(id)=>{
//   let newPeople = people.filter((persons)=>persons.id!==id);
//   setPeople(newPeople);
// }
//   return (
//     <React.Fragment>
//       <h2>array example</h2>
//        {people.map((persons)=>{
//         const {id,name}=persons;
//         return <div key={id}>
//           <h4>{name}</h4>
//           <button type='button' onClick={()=>removeItems(id)}>Clear-Single-Item</button>
//         </div>
        
//        })}
//       <button type='button'className='btn' onClick={()=>setPeople([])}>Clear-All-Items</button>
//     </React.Fragment>
//   );
// }

// export default UseStateArray