import { useDeno } from 'aleph/react'
import React from 'react'

export default function Home() {
  const post = useDeno(async () => {
    return await (await fetch('http://localhost:9001')).json();
  })
  return (
    <>
      {post.message}
    </>
  )
}
