import { DashboardNavBar } from '@/components/dashboard-navbar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col relative'>
      <div className='flex-grow flex flex-col items-center justify-start gap-8 overflow-y-scroll'>
        {children}
      </div>
      <DashboardNavBar />
    </div>
  )
}
