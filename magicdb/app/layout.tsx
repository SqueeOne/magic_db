import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="//cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css"
            rel="stylesheet"
            type="text/css"
          />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
