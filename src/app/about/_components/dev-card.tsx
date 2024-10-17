import type { DevCardDetail } from '@/types'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export function DevCard({ github_user, alt, developer, rm }: DevCardDetail) {
  return (
    <div className='flex flex-col flex-grow items-center mt-8 py-8 shadow-lg rounded-lg'>
      <Image
        src={`https://github.com/${github_user}.png`}
        alt={alt}
        className='rounded-full shadow-md shadow-blue-600'
        width={130}
        height={130}
      />
      <div className='mt-7 flex flex-col items-center justify-between text-center gap-1'>
        <p className='text-lg line-clamp-2 break-words'>{developer}</p>
        <p className='text-xs'>RM: {rm}</p>
        <a
          href={`https://github.com/${github_user}`}
          target='_blank'
          rel='noreferrer'
          className='flex items-center space-x-1 hover:underline'
        >
          <GitHubLogoIcon className='size-7' />
          <span>@{github_user}</span>
        </a>
      </div>
    </div>
  )
}
