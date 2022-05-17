import React, { useState } from 'react'

const Todoitem = ({todo}) => {
 
    const changestate=(id)=>{
        Todolist.map(e=>{
            return (e.id===id ? e.stat=(!e.stat):"")
        })
        setTodolist([...Todolist])
        
    }
  return (
    <div>
        <div>{todo.value},{todo.stat===false ? "no":"yes"}
            <button onClick={()=>changestate(todo.id)}>toggle</button>
         
            </div>
    </div>
  )
}

export default Todoitem