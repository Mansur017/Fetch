import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

export default function Todo({index,todo,removeTask,todos,setTodos}) {


    const completedTask = () => {
        const todosCopy = [...todos];
        todosCopy[index].completed = !todo.completed;
        setTodos(todosCopy)
        

    }
    


     

    return (
        <div className="todo-block">
        <div className={todo.completed ? "todo overline" : "todo"}   onClick={completedTask} >
            {todo.title}
        </div>
        <button onClick={() => (removeTask(index))}>
            <IoCloseSharp className="icon"/>
         </button>
         </div>
    )
}


