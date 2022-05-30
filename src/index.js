// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import reactDom from "react-dom";
import { StrictMode } from "react/cjs/react.production.min";

    //CSS
import './index.css'
                            //JSX Rules
//div/section/fragment
//use camelCase for HTML attribute
//use className instead of class
//closing every element
//formating {we use paranthesis like after return ();}
// function Greet()
// {
//  return (
//      <React.Fragment>
//      <div>
//          <h3>I want to become web developer by the grace of GOD.</h3>
//          <ul>
//              <li>ahsan Ramzan</li>
//              <li>batman &#49;</li>
//          </ul>
//          <img src="" alt="" srcset="" />
//          <input type="button" value="clickMEEE" />
//      </div>
//      <h2>My name</h2>
//      </React.Fragment>
//     // <div>This is valid HTML &amp; JSX at the same time.</div>
//  )
 
// }

// const Greet=()=>
// {
    // return React.createElement("div",{},
    // React.createElement("h3",{},"I want to become web developer by the grace of GOD."),
    // React.createElement("h5",{},"hello")
   

    
    
//}
       //Nested component/React tools
// function Greet()
// {
//     return(
//      <div>
//        <Person/>
//        <Message/>
//      </div>   
    
//     );
// }

// const Person = ()=> 
// <h2>MR. Faisal</h2>
// const Message = ()=> <p>This message i will convey to the boss</p>
// reactDom.render(<Greet/>,document.getElementById('root'))

          //I want to create a bookList which have three component
// function BookList()
// {
//   return (
//       <section className="bookList">
//           <Book/>
//           <Book/>
//           <Book/>
//           <Book/>
//           <Book/>
//           <Book/>
//           <Book/>
//           <Book/>
//       </section>
//   );
// }
// const Book=()=> {
//  return(  
//      <article className="book">
//          <Image/>
//          <Title/>
//          <Author/>
//      </article> 

//  );
// }
// const Image=()=>{
//     return(
// <img width={150} height={200} src="https://www.rd.com/wp-content/uploads/2020/01/57_The-Book-Thief-by-Markus-Zusak-via-amazon.jpg?fit=700,700" alt="book Image" />
// );

// }
// const Title=()=> <h2>React Course</h2>
// const Author=()=> <p style={{color:"gray",fontFamily:"sans-serif",
// marginBottom:"0.75rem"}}>John Alamberg</p>
// reactDom.render(<BookList/>,document.getElementById('root'))

                                        //JSX JavaScript
// function Ja()
// {
//     return(
//         <React.Fragment>
//             <Book/>
//         </React.Fragment>
//     );

// }
// const Book=()=>{
// const j = "I am working on react.js"
// return(
    
//   <section>
//       <div>{j}</div>
//   </section>
// );
// }

// reactDom.render(<Ja/>,document.getElementById('root'))

                                         //Props in react.js
                                         //Props->Children
// const img= "https://www.rd.com/wp-content/uploads/2020/01/57_The-Book-Thief-by-Markus-Zusak-via-amazon.jpg?fit=700,700";
// const title= "React Course";
// const author= "MR. Faisal";
// const obj1={
//     img:"https://www.rd.com/wp-content/uploads/2020/01/57_The-Book-Thief-by-Markus-Zusak-via-amazon.jpg?fit=700,700",
//     title:"React Course",
//     author:"MR. Faisal"
// }
// const obj2={
//     img:"https://pngimg.com/uploads/book/book_PNG2111.png",
//     title:"Flutter Course",
//     author:"MR. Ahsan"
// }
// function Learn()
// {
//     return(
//      <>
//      <Abc img={obj1.img} title={obj1.title} author={obj1.author}> 
//      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
//          Porro vero provident id numquam itaque nostrum esse voluptates atque modi
//           assumenda excepturi, ducimus nihil quae 
//          illo quo quisquam nisi quos? Dolore!</p>
//      </Abc>
//      <Abc img={obj2.img} title={obj2.title} author={obj2.author}/>
//      </>
//     );

// }
// const Abc=(props)=>{
//     const {img,title,author,children}=props;
//     console.log(props)
//     return(
//         <article className="book">
//            <img height={200}  width={150} src={img} alt="book image" />
//            <p>{title}</p>
//            <h2>{author}</h2>
//            <p>{children}</p>
//         </article>
      
//     );
// }

// reactDom.render(<Learn/>,document.getElementById('root'))

             //if we create 100's of objects, it is not a practical work 
             //so we create list/array for refactoring
             //lists/array in react
             //key props are used in the lists and their children/siblings can not access
             //that keys(mean further classes can not access that key)
// const books = [
// {   id:1,
//     img:"https://www.rd.com/wp-content/uploads/2020/01/57_The-Book-Thief-by-Markus-Zusak-via-amazon.jpg?fit=700,700",
//     title:"React Course",
//     author:"MR. Faisal"
// },
// {   id:2,
//     img:"https://pngimg.com/uploads/book/book_PNG2111.png",
//     title:"Flutter Course",
//     author:"MR. Ahsan"
// },
// {   id:3,
//     img:"https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612",
//     title:"PHP Course",
//     author:"MR. Ahmad"
// }



// ]
// // const name = ["ahsan","ali","ahmad"];
// // const newName = name.map((names)=>{
// //     return <h1>{names}</h1>
// // })
// // console.log(newName)


// function Learn()
// {
    
//     return(
//      <>
//      {books.map((book,index)=>{
//         const {img,title,author}=book;
//       return (
//         <Abc key={book.id} book={book}>   
//         {/* <Abc key={book.id} {...book}>    */}
//         </Abc>
//       )
      
//      })}
//      </>
//     );

// }
// const Abc=(props)=>{
//     const {img,title,author}=props.book;
//     // console.log(props)
//     return(
//         <article className="book">
//            <img height={200}  width={150} src={img} alt="book image" />
//            <h4>{title}</h4>
//            <h2>{author}</h2>
           
//         </article>
      
//     );
// }

// reactDom.render(<Learn/>,document.getElementById('root'))


                                      //example of keys and props
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);
                                    //props with specific key props
// function Blog(props) {
//     const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//     );
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {sidebar}
//         <hr />
//         {content}
//       </div>
//     );
//   }
  
//   const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];


// reactDom.render(<Blog posts={posts}/>,document.getElementById('root'))

                            //events (eventhandler,attribute)
                            //onClick,mouseOver
                    
// const books = [
//     {   id:1,
//         img:"https://www.rd.com/wp-content/uploads/2020/01/57_The-Book-Thief-by-Markus-Zusak-via-amazon.jpg?fit=700,700",
//         title:"React Course",
//         author:"MR. Faisal"
//     },
//     {   id:2,
//         img:"https://pngimg.com/uploads/book/book_PNG2111.png",
//         title:"Flutter Course",
//         author:"MR. Ahsan"
//     },
//     {   id:3,
//         img:"https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612",
//         title:"PHP Course",
//         author:"MR. Ahmad"
//     }
//     ]
//     function Learn()
//     {
        
//         return(
//          <>
//          {books.map((book,index)=>{
//             const {img,title,author}=book;
//           return (
//             // <Abc key={book.id} book={book}>   
//              <Abc key={book.id} {...book}>   
//             </Abc>
//           )
          
//          })}
//          </>
//         );
    
//     }
//     const Abc=({img,title,author})=>{
        
//         // console.log(props)
//         const onClickHandler=(e)=>{
//             alert ("hello");
//             // console.log(e);
//             // console.log(e.target);
//         }
//         const clicking=(author)=>{
//         console.log(author);
//         }
//         return(
//             <article className="book" onMouseOver={()=>{
//                 console.log(title);
//             }}>
//                <img height={200}  width={150} src={img} alt="book image" />
//                <h4>{title}</h4>
//                <h2>{author}</h2>
//                <button type="button" onClick={onClickHandler}>Click ME</button>
//                <button type="button" onClick={()=>clicking(author)}>ComplexWork</button>
//             </article>
          
//         );
//     }
    
//     reactDom.render(<Learn/>,document.getElementById('root'))
                    //import and export statements

// import {books} from './books'
// import Book from './Abc.js'

// function Learn()
//     {
        
//         return(
//          <>
//          {books.map((book,index)=>{
//             const {img,title,author}=book;
//           return (
//             // <Abc key={book.id} book={book}>   
//              <Book key={book.id} {...book}>   
//             </Book>
//           )
          
//          })}
//          </>
//         );
    
//     }

// reactDom.render(<Learn/>,document.getElementById('root'))

                            //Advance react tutorial starter

import App from './App.js'
                         //for adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
function Learn()
    {
        
        return(
         <div className='container'>
             <App/>
         </div>
        );
    
    }

reactDom.render(<Learn/>,document.getElementById('root'))


