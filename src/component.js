import React,{useState} from 'react'
import Axios  from 'axios'
export default function Component(){
    const [arr,set_ary]=useState([])
Axios.get("https://jsonplaceholder.typicode.com/todos")
.then(res=>set_ary(res.data))
console.log(arr,"data")
  return (
    <div>
        {arr.map((ele)=>{
            return(
                <div className=' mt-2 border font-serif border-black w-[30vw] h-auto text-xl font-bold leading-[15vh] ml-2'>
                <h1>Id:{ele.id}</h1>
                <h1>User-Id:{ele.userId}</h1>
                <h1>Title:{ele.title}</h1>
                </div>
)
})}
</div>
)
}