import { useNavigate } from "react-router"

export default function AccessDenied() {

  const navigate = useNavigate()

  return (
    <div>
        <h3>Access denied ! Go to LogIn </h3>
        <button onClick={() => navigate('/login')} >Go to LogIn</button>
    </div>
  )
}
