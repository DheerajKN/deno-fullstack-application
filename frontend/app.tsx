import React, { FC } from 'react'

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <center>
        {"Welcome to Aleph Frontend"}
        <br/>
        <a rel="nav" href="/">Home</a>
        { " | " }
        <a rel="nav" href="/post">Post</a>
        <br/>
      </center>
      <Page {...pageProps} />
    </main>
  )
}
