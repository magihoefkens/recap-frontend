import {useEffect, useState} from 'react'

import './App.css'
import Navigation from "./Navigation.tsx";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import TodoList from "./TodoList.tsx";

type TodoStatus="OPEN"|"IN_PROGRESS"|"DONE"
export type Todo={
  id:string,
  description:string,
  status:TodoStatus
}
function App() {
  const[todos,setTodos]=useState<Todo[]>([])
  const fetchData= () =>
      axios.get("/api/todo")
          .then(response =>setTodos(response.data))
          .catch(error =>{
            console.log(error.message)
          })
  useEffect(
      ()=>{fetchData()},[]
  )
    console.log(todos)
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/todo" element={<TodoList todos={todos}/>}/>
               
      </Routes>
    </>
  )
}

export default App
