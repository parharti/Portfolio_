import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'

const  spaceGrotesk = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // customize weights as needed
})
export const metadata: Metadata = {
  title: 'Prisha Sharma | Portfolio',
  description: 'Engineering Ideas, Empowering Space.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
