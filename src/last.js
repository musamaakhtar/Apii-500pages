import React, { useState } from 'react'
import Axios from 'axios'
export default function Last() {
    const [arrry,set_arrry]=useState([])
Axios.get("https://jsonplaceholder.typicode.com/comments")
.then(res=>set_arrry(res.data))  
return (
    <>
    {arrry.map((ele)=>{
     return(
        <div className=' mt-2 border bg-[lightcyan] border-black font-serif  h-auto ml-2'>
        <h1 className='text-3xl text-[darkorange] font-bold leading-[7vh]'>Id#:{ele.id}</h1>
        <h1 className='text-2xl text-[darkgray] font-bold leading-[7vh]'>Post Id#:{ele.postId}</h1>
        <h1 className='text-xl font-bold leading-[7vh]'>Name:{ele.name}</h1>
        <h1 className='text-xl font-bold leading-[7vh]'>E-mail:{ele.email}</h1>
        <h1 className='font-semibold text-[darkblue]'>Body:{ele.body}</h1>
        
        </div>
     )
    })

    }
    </>
  )
}
