import React, { useState } from 'react'
import Todoitem from './Todoitem'
import "./todo.css"

const Todo = () => {
    let [Todolist,setTodolist]=useState([])
    const [input,setInput]=useState("")
    const handle=(e)=>{
      setInput(e.target.value)
    }
    let payload={}
    const handleinput=()=>{
        if(input.length>0){
        payload={
            id:Date.now(),
            stat:false,
            value:input,
        }
        Todolist=([payload,...Todolist])
        setTodolist(Todolist)
        setInput("")
    }
    else{
        alert("please enter something")
    }
    }
    const changestate=(id)=>{
       Todolist.map(e=>{
           return (e.id===id ? e.stat=(!e.stat):"")
       })
       setTodolist([...Todolist])
       
    }
  return (
    <div className='container'>
        <div className='input-field'>
        <input value={input} placeholder='Write Somthing' onChange={handle} className="input" />
        <button onClick={
          handleinput
        } className="inputadd">+</button>
        </div>

        {Todolist.map(todo=>{
            return (
                <div className='todolist'>
                    <div className={todo.stat===false ? "todovalue":"rtodovalue"}>{todo.value}</div>
            <button onClick={()=>changestate(todo.id)} className={todo.stat===false ? "toggle":"rtoggle"}></button>
         
            </div>
            )


            // <Todoitem Todolist={Todolist} todo={Todo}/>
        })}
    </div>
  )
}

export default Todo