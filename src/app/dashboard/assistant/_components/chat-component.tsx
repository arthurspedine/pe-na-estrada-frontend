'use client'

import { useEffect, useRef, useState } from 'react'
import { createSession, sendMessage } from '../watsonApi'
import type { ProcessedApiResponse, ProcessedOptionResponse } from '../../types'
import { getFormattedTime } from '@/helper/format-message-timestamp'
import { processApiResponse } from '../process-api-response'
import { Message } from './message'
import { SendHorizonal } from 'lucide-react'
import { getInitials } from '@/helper/get-initials'

type ChatProps = {
  username: string
  vehicles: { id: number; name: string }[]
  workshops: { id: number; name: string }[]
}

export function ChatComponent({ username, vehicles, workshops }: ChatProps) {
  const usernameInitials = getInitials(username)

  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const [sessionId, setSessionId] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [inputEnable, setInputEnable] = useState<boolean>(true)
  const [messages, setMessages] = useState<
    {
      text: string | ProcessedApiResponse[]
      fromUser: boolean
      timestamp: string
    }[]
  >([])

  // init session
  useEffect(() => {
    const initSession = async () => {
      const data = await createSession()
      setSessionId(data.id)
      const processWelcomeMessage = processApiResponse(data.message)
      setMessages([
        {
          text: processWelcomeMessage,
          fromUser: false,
          timestamp: getFormattedTime(),
        },
      ])
    }
    initSession()
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  function handleOptionComponent(value: string) {
    setInput(value)
    setInputEnable(true)
    setTimeout(() => {
      submitButtonRef.current?.click()
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return
    setInput('')

    const userInputTimeStamp = getFormattedTime()
    setMessages([
      ...messages,
      {
        text: input,
        fromUser: true,
        timestamp: userInputTimeStamp,
      },
    ])

    // msg to watson
    const responseAPI = await sendMessage(sessionId, input)
    const respTimeStamp = getFormattedTime()

    const resp: ProcessedApiResponse[] = processApiResponse(responseAPI)

    if (
      'content' in resp[0] &&
      resp[0].content === 'Escolha o veículo que deseja:'
    ) {
      resp.push({
        options: vehicles.map(v => {
          return { label: v.name, value: v.name }
        }),
      })
    }

    if (
      'content' in resp[0] &&
      resp[0].content.includes(
        'Vamos lhe informar o custo do orçamento em alguns instantes, aguarde por favor.'
      )
    ) {
      resp.push({
        options: workshops.map(w => {
          return { label: w.name, value: w.name }
        }),
      })
    }

    setMessages([
      ...messages,
      {
        text: input,
        fromUser: true,
        timestamp: userInputTimeStamp,
      },
      {
        text: resp,
        fromUser: false,
        timestamp: respTimeStamp,
      },
    ])

    const hasOptionResponse = resp.some(item => 'options' in item)

    if (hasOptionResponse) setInputEnable(false)
    else setInputEnable(true)
  }

  return (
    <div className='flex flex-col flex-grow w-full bg-primary/30 p-1 rounded-sm mb-2'>
      <div className='flex flex-col flex-grow p-4 space-y-6 bg-popover w-full'>
        {messages.map((msg, index) => (
          <Message
            key={`${msg.timestamp}-${index}`}
            text={msg.text}
            fromUser={msg.fromUser}
            timestamp={msg.timestamp}
            usernameInitials={usernameInitials}
            setValue={handleOptionComponent}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* input */}
      <form onSubmit={handleSubmit} className='bg-background border p-4'>
        <div className='flex w-full'>
          <input
            type='text'
            disabled={!inputEnable}
            placeholder='Escreva aqui o que está acontecendo...'
            value={input}
            onChange={e => setInput(e.target.value)}
            className='w-full text-sm focus:outline-none bg-secondary focus:placeholder-foreground/80 text-foreground placeholder-foreground/70 pl-3 border rounded-md rounded-r-none px-3 sm:text-base disabled:cursor-not-allowed'
          />
          <div className='items-center flex'>
            <button
              type='submit'
              disabled={!inputEnable}
              ref={submitButtonRef}
              className='inline-flex items-center justify-center rounded-lg rounded-l-none px-4 py-3 border border-primary transition duration-500 ease-in-out text-white bg-primary hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed'
            >
              <SendHorizonal className='size-5 sm:size-6' />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
