import { DesktopHeader } from '@/components/desktop-header'
import { Footer } from '@/components/footer'

export default function HomeLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-screen'>
      <DesktopHeader />
      <div className='flex flex-col flex-grow overflow-y-auto'>
        {children}
        <Footer />
      </div>
    </main>
  )
}
