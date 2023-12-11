import {useState} from "react";
import {Todo} from "./App.tsx";
import TodoKarte from "./TodoKarte.tsx";
type ToDoListProps={

    todos:Todo[]
}
export default function TodoList(props:ToDoListProps){
    const [todos, setTodos]=useState([])
    return(
        <>
            <h1>ToDo List</h1>
            {props.todos.map(todo => <TodoKarte
                                                key={todo.id}
                                                todo={todo}/>)}
        </>
    )
}