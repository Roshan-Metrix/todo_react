import React,{useState} from 'react'
import './App.css'
import { Form } from './components/Form.jsx'


function App() {
  return (
  <>
 <div className="border-2 border-black w-auto p-8 h-auto">
  <h1 className="text-center text-5xl font-semibold">Your TODO</h1>
  <Form />
 </div>
    </>
  )
}

export default App
