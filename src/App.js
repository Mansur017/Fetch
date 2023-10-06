import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";


function App() {

    const [todos, setTodos] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
        
        
    }, [])

    return(
        <div className="App">
            <header>
                <h1>Количество задач № {todos.length} </h1>
            </header>  
            <Todos
                todos={todos}
                setTodos={setTodos}
            />
            <TodoForm
               todos={todos}
               setTodos={setTodos}
            />
        </div>
    )

}

export default App;