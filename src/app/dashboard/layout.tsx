import { DashboardNavBar } from '@/components/dashboard-navbar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col h-[calc(100dvh)] w-full'>
      {children}
      <DashboardNavBar />
    </div>
  )
}
