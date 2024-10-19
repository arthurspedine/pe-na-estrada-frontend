'use client'
import { useEffect, useState } from 'react'
import { Car, ChevronLeft, ChevronRight, UserPen, Vote } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const steps = [
  {
    id: 1,
    width: '0',
    route: 'information',
    path: '/client/register/information',
    icon: <UserPen />,
  },
  {
    id: 2,
    width: '50%',
    route: 'vehicle',
    path: '/client/register/vehicle',
    icon: <Car />,
  },
  {
    id: 3,
    width: '99%',
    route: 'confirm',
    path: '/client/register/confirm',
    icon: <Vote />,
  },
]

export function StepNavigation() {
  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()

  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (currentPath === 'register') return

    const step = steps.findIndex(s => s.route === currentPath)
    setCurrentStep(step)
  }, [currentPath])

  return (
    <section className='w-full py-4'>
      <div className='relative flex items-center justify-between w-full'>
        <div className='absolute left-0 top-2/4 h-0.5 w-[99%] -translate-y-2/4 bg-gray-300' />
        <div
          className='absolute left-0 top-2/4 h-0.5 -translate-y-2/4 bg-primary transition-all duration-400'
          style={{ width: steps[currentStep].width }}
        />
        {steps.map(s => (
          <Link
            href={s.path}
            key={s.id}
            prefetch={true}
            className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all ease-in-out duration-200 ${s.id - 1 <= currentStep ? 'bg-primary' : 'bg-gray-300'} rounded-full place-items-center`}
          >
            {s.icon}
          </Link>
        ))}
      </div>
    </section>
  )
}
