import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster theme='light' richColors />
      </body>
    </html>
  )
}
