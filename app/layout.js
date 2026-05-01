import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Nakamura Shota',
  description: 'Portfolio of Nakamura Shota',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.variable}>{children}</body>
    </html>
  )
}
