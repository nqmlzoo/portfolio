import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Nakamura Shota',
  description: 'Portfolio of Nakamura Shota',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={cormorant.className}>{children}</body>
    </html>
  )
}
