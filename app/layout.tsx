import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rune Finance',
  description: 'Expert mortgage brokering, financial advice, and self-managed super fund solutions tailored to your needs.',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
