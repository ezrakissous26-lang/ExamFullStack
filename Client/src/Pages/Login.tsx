import { useState } from "react"
import { myStore, usernameStore } from "../Store/Store"
import { fecthLogin } from "../ServiceApi/api"

export default function Login() {

  const [email, SetEmail] =useState('')
  const [password, setPassword ] = useState('')
  const [message, setMessage] = useState('')
  const setToken = myStore((state) => state.setToken)
  const [validlogin, setValidLogin] = useState(false)
  const setUsername = usernameStore((state) => state.setUsername)


  return (
    <form onSubmit={ async (e) => {
      e.preventDefault()
      try {
        const data = await fecthLogin(email, password)
        setToken(data.token)
        setUsername(data.username)
        setMessage(data.message)
        setValidLogin(true)
      } catch (error) {
        setMessage(error.message)
        setValidLogin(false)
      }
    }} >
      <h3>Hello</h3>
        <input onChange={(e)=> SetEmail(e.target.value)} value={email} type="email" name="" id="" placeholder='Enter you e-mail'/>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='Enter your password'/>
        <button type="submit">Submit</button>
        <p>{message}</p>
    </form>
  )
}
