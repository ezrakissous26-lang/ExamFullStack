// import { usernameStore } from "../Store/Store"

import { Link } from "react-router";


// const username = usernameStore((state) => state.username)

export default function Header() {
  return (
    <div>
      <h1>Hello</h1>
      {/* <h1>Hello {username}</h1> */}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/getpost">See Post</Link>
      <Link to="/post">Create your post</Link>
    </div>
  )
}
