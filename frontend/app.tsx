import React, { FC } from 'react'
import { useDeno } from 'https://deno.land/x/aleph/framework/react/mod.ts';

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
  // const url = Deno.env.get("BACKEND_URL");
  const post = useDeno(async () => {
    return await (await fetch('http://localhost:9001')).json();
  })
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      {post.message}
    </main>
  )
}
