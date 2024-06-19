import { useState } from "react"

export const Singup = ({onAdd}) => {
    const [user , setUser] = useState({name: "" , surname: "", login: "", password: ""})
    const [error , setError] = useState("")
     
    const [message,setMessage] = useState("")

    const handleUser = user => {
        return user.name && user.surname && user.login && user.password
    }


    const handleLogin = (str) =>{
        const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
         if (regex.test(str)) {
             return true
            } else return false
        }

    const handlePassword = (str) =>{
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
        if (regex.test(str)) {
            return true
        } else return false
    }

    const handleSubmit = e => {
        
        e.preventDefault()
        if(!handleUser(user)){
            return setError("Please fill all fields")
        }
        if (!handleLogin(user.login)){
            return setError("Login must be valid email")
        }
        if (!handlePassword(user.password)){
            return setError("Password must contain least 1 upper case 1 special character 1 numeric character")
        }
        onAdd(user)
        setUser({name: "" , surname: "", login: "", password: ""})
        setError("")
        setMessage("Successfully registered")
     
    }
    return <div>
        <h3>Add user</h3>
        <form  onSubmit={handleSubmit} >
        {error && <p style={{color:"red"}}>{error}</p> }
      
            <input placeholder="name" value={user.name} onChange={e => setUser({...user , name:e.target.value})} />
            <input placeholder="surname" value={user.surname} onChange={e => setUser({...user , surname:e.target.value})}/>
            <input placeholder="login" value={user.login} onChange={e => setUser({...user , login:e.target.value})} />
            <input placeholder="password" value={user.password} onChange={e => setUser({...user , password:e.target.value})}/>
            
           
            <button>Add</button>
            {message && <p style={{color:"green"}}>{message}</p> }
            
        </form>
    </div>

}