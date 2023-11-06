import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portals',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
