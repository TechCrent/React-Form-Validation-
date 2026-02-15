import './App.css'
import Form from './Form.jsx'
import {useState} from 'react'

function App() {

  const [name, setName] = useState("");
  const [error, setError] = useState("");


  return (
    <>
      <Form 
        name = {name}
        setName = {setName}
      />
    </>
  )
}

export default App
