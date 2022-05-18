import React, { useState } from 'react'

const Todoitem = ({todo,toggle}) => {
 
  return (
    <div  className='todolist'>
      < div className={todo.state===false ? "todovalue":"rtodovalue"}>{todo.value}</div>
      <button
        onClick={()=>{
          toggle(todo.id)
        }}
        className={todo.state===false ? "toggle":"rtoggle"}
        ></button>
    </div>
  )
}

export default Todoitem