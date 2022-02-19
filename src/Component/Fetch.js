import React, { useEffect, useState } from "react";
import Dialogs from "./Dialog.js"
// import {Divider} from "@material-ui/core"


export default function Fetch(){
const[data,setdata]=useState([])

// dialog
const [open,setopen]=useState(false);

function handler1(id){
     setopen(true)
}


function handler(id){
  const newdata=data.filter((jk,index)=>index!==id);
       
          setdata(newdata);
 }


useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((json)=>setdata(json))
},[])


console.log(data)

  return(
   <>
   <div>
   <h1>Hello sir </h1>
   {data.map((value,index)=>{
     return(
       <>
      
       <div style={{width:"60vh",height:"105vh",border:"2px solid black",padding:"5px 10px",margin:"40px 10px"}}>
       <img style={{backgroundColor:"grey",padding:"30px 30px"}} src={`https://avatars.dicebear.com/v2/avataaars/${value.username}.svg`} alt="error"></img>
        <div style={{textAlign:"center"}}>
        <h1>{value.username}</h1>
        <p>Email:{value.email} </p>
        <p>Phone:{value.phone} </p>
        <p>Website:{value.website}</p>
        {/* <Divider/> */}
        <button onClick={()=>{alert("thank you for like me")}}>Like</button>
        <button onClick={()=>handler1(index)}>Edit</button>
        <button onClick={()=>handler(index)}>Delete</button>
        </div>
       </div>
      
       </>
     )
   })}
 </div>        
 <Dialogs open={open} setopen={setopen}/>
   </>

  )
}