import React,{useState} from 'react'

const Todoinput = ({addTodo}) => {
    const [input,setInput]=useState("")
    const handle=(e)=>{
       setInput(e.target.value)
    }
  return (
    <div className='input-field'>
        <input type="text" value={input} placeholder='Write Somthing' onChange={handle} className="input"/>
        <button onClick={()=>{
           addTodo(input)
            setInput("")
        }} className="inputadd">+</button>
    </div>
  )
}

export default Todoinput