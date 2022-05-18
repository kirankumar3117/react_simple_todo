import React, { useState } from 'react'
import Todoitem from './Todoitem'
import "./todo.css"
import Todoinput from './Todoinput'
import Todolist from './Todolist'

const Todo = () => {
let [list,setList]=useState([])
  const addTodo=(value)=>{
    if(value.length>0){
      const payload={
        id:Date.now(),
        state:false,
        value:value,
      }
      list=[payload,...list]
      setList(list)
    }
    else{
      alert("Please Write Something")
    }
    
  }
  const toggle=(id)=>{
    list.map(e=>{
        return (e.id===id ? e.state=(!e.state):"")
    })
    setList([...list])
    
}
   
  return (
    <div className='container'>
    
        <Todoinput addTodo={addTodo}/>
       <Todolist>
       {list.map(todo=>{
        return <div><Todoitem todo={todo} toggle={toggle}/></div>
        })}
       </Todolist>
        
    </div>
  )
}

export default Todo