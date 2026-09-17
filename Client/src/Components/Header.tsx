// import { usernameStore } from "../Store/Store"

// const username = usernameStore((state) => state.username)


export default function Header() {
  return (
    <div>
      {/* <h1>Hello {username}</h1> */}
      <button>Register</button>
      <button>LogIn</button>
      <button>See Post</button>
      <button>Create your post</button>
    </div>
  )
}
