import React,{useState} from 'react';
import Axios from 'axios'
export default function App(){
  const [arr,setary]=useState([])
 Axios.get("https://jsonplaceholder.typicode.com/users")
 .then(res=>setary(res.data))
 console.log(arr,"hello"); 
 return (
   <>
   { arr.map((ele)=>{
     return(
    <div className='flex'>
      <div className='border border-black w-[30vw] h-auto text-2xl font-bold leading-[15vh] ml-2'>
        <h1>Id:{ele.id}</h1>
        <h1>Contact:{ele.phone}</h1>
        <h1>Name:{ele.name}</h1>
        <h1>User-Name:{ele.username}</h1>
        <h1>E-mail:{ele.email}</h1>
        <h1>Website:{ele.website}</h1>
        </div>
    </div>
    )
    })
   }
   </>
  )
}
