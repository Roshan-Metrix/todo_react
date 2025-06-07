import React,{useState} from 'react'
import './App.css'
import { Form } from './components/Form.jsx'


function App() {
const  [task, setTask] = useState("");
  return (
  <>
 <div className="border-2 border-black w-130 p-4 h-auto">
  <h1 className="text-center text-5xl font-semibold">Todo List app</h1>
  <Form setTask={setTask} />

 </div>
    </>
  )
}

export default App
