import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Singup } from './Signup'

function App() {
  const [users , setUsers] = useState([])
  const [login,setLogin] = useState([])
  const [message,setMessage] =useState("")

  const addUser = user => {
    if(login.includes(user.login)){
      setMessage("Such user with this email exists , please fill other email")
    } else {
         setUsers((prev) => {
         return [...prev,{...user,id:Date.now()}]
         
    })
  }
    setLogin(user.login)
    
    
  }
  
  return (
    <>
    <Singup onAdd = {addUser}/>
    {message && <p style={{color:"red"}}>{message}</p> }
      
    </>
  )
}

export default App
