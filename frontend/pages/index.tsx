import { useDeno } from 'aleph/react'
import React, {useState} from 'react'

export default function Home() {
  const [starter, setStarter] = useState(useDeno(async () => {
    return await (await fetch(Deno.env.get('BACKEND_URL'))).json();
  }));
  return (
    <>
      {starter.message}
    </>
  )
}
