import { DashboardNavBar } from '@/components/dashboard-navbar'
import { DesktopHeader } from '@/components/desktop-header'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex flex-col h-[calc(100dvh)]'>
      <DesktopHeader />
      <div className='flex flex-col w-full flex-grow overflow-y-auto'>
        {children}
      </div>
      <DashboardNavBar />
    </main>
  )
}
