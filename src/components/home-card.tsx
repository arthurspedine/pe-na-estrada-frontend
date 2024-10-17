import type { HomeCardDetail } from '@/types'
import Image from 'next/image'

export function HomeCard({ image, alt, title, description }: HomeCardDetail) {
  return (
    <div className='max-w-80 w-full h-80 px-8 py-4 flex flex-col items-center gap-2 shadow-xl rounded-lg'>
      <Image src={image} alt={alt} className='w-24 mb-2' />
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='leading-7 text-muted-foreground text-center'>
        {description}
      </p>
    </div>
  )
}
