import React, { useState } from 'react'
import { fecthPostPost } from '../ServiceApi/api'
import { myStore } from '../Store/Store'

export default function PostPost() {

  const token = myStore((state) => state.token)
  const [ post , setPost ] = useState('')
  const [ message, setMessage ] = useState('')

  return (
    <form onSubmit={ async (e) => {
      e.preventDefault()
      try {
        const data = await fecthPostPost(post, token)
        setMessage(data.message)
      } catch (error) {
        setMessage(error.message)
      }
    }} >
      <input onChange={(e) => setPost(e.target.value)} value={post} type="text" placeholder='What you want post today'/>
      <button type="submit">Submit</button>
      <button>See all posts</button>
      <p>{message}</p>
    </form>
  )
}
