import  { useState } from 'react'
import { fetchRegister } from '../ServiceApi/api'
// import { useNavigate } from 'react-router'

export default function Register() {

  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [message, SetaMessage ] = useState('')
  // const navigate = useNavigate()



  return (
    <form onSubmit={ async (e) => {
      e.preventDefault()
      try {
        const data = await fetchRegister(username, email, password)
        SetaMessage(data.message)
      } catch (error) {
        SetaMessage(error.message)
      }
    }} >
      <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='Enter your name'/>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" placeholder='Enter you e-mail' />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='Enter your password' />
      <input type="image" src="" alt="" placeholder='Drag here your image'/>
      <button type="submit">Submit</button>
      {/* <button onClick={navigate('/login')} >Go to LogIn</button> */}
      <p>{message}</p>
    </form>
  )
}