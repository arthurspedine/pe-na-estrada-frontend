import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { ProcessedApiResponse } from '../../types'
import { OptionMessage } from './option-message'

interface MessageProps {
  text: string | ProcessedApiResponse[]
  fromUser: boolean
  timestamp: string
  usernameInitials: string
  setValue: (value: string) => void
}

export function Message({
  text,
  fromUser,
  usernameInitials,
  timestamp,
  setValue,
}: MessageProps) {
  return (
    <div
      className={`flex items-start space-x-2 ${fromUser ? 'justify-end' : ''}`}
    >
      {!fromUser && (
        <Avatar className='size-8 sm:size-10'>
          <AvatarFallback className='size-8 sm:size-10'>PE</AvatarFallback>
        </Avatar>
      )}

      <div className={`flex flex-col ${fromUser ? 'items-end' : ''}`}>
        <div
          className={`p-3 rounded-lg shadow-sm max-w-xs lg:max-w-md ${
            fromUser
              ? 'bg-primary text-background rounded-tr-none'
              : 'bg-secondary text-secondary-foreground rounded-tl-none'
          }`}
        >
          {typeof text === 'string' ? (
            <p className='text-sm lg:text-base'>{text}</p>
          ) : (
            text.map((item: ProcessedApiResponse) => {
              if ('content' in item) {
                return (
                  <p
                    key={item.content}
                    className='text-sm lg:text-base'
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                )
              }
              if ('options' in item) {
                return (
                  <OptionMessage
                    key={`${item.options}-${timestamp}`}
                    options={item.options}
                    setValue={setValue}
                  />
                )
              }
              return null
            })
          )}
        </div>
        <span className='text-xs text-gray-500 mt-1'>{timestamp}</span>
      </div>

      {fromUser && (
        <Avatar>
          <AvatarFallback>{usernameInitials}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
