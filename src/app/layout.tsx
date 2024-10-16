import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'
import { DesktopHeader } from '@/components/desktop-header'

export const metadata: Metadata = {
  title: 'Pé na Estrada',
  description: 'Site do Pé na Estrada',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen w-screen`}
      >
        <DesktopHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
