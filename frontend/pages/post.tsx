import { useDeno } from 'aleph/react'
import React, {useState} from 'react'

export default function Post() {
  const [post, setPost] = useState(useDeno(async () => {
    return await (await fetch(Deno.env.get('BACKEND_URL')+'/post')).json();
  }));
  return (
    <>
      {post.message}
    </>
  )
}
