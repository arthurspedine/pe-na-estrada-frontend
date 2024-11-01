'use client'

import { useEffect, useRef, useState } from 'react'
import { createSession, sendMessage } from '../watsonApi'
import type { ProcessedApiResponse } from '../../types'
import { getFormattedTime } from '@/helper/format-message-timestamp'
import { processApiResponse } from '../process-api-response'
import { Message } from './message'
import { SendHorizonal } from 'lucide-react'
import { getInitials } from '@/helper/get-initials'
import { toast } from 'sonner'
import { handleCreateEstimate } from '../handle-create-estimate'
import { useRouter } from 'next/navigation'

type ChatProps = {
  username: string
  vehicles: { id: number; name: string }[]
  workshops: { id: number; name: string }[]
}

export type CreateEstimate = {
  vehicleId: number
  workshopId: number
  description: string
  scheduledAt: string
}

export function ChatComponent({ username, vehicles, workshops }: ChatProps) {
  const router = useRouter()

  const usernameInitials = getInitials(username)

  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const [sessionId, setSessionId] = useState<string>('')

  const [input, setInput] = useState<string>('')
  const [inputEnable, setInputEnable] = useState<boolean>(true)

  const [newEstimate, setNewEstimate] = useState<CreateEstimate>({
    vehicleId: 0,
    workshopId: 0,
    description: '',
    scheduledAt: '',
  })

  const [toSelectVehicle, setToSelectVehicle] = useState<boolean>(false)
  const [toSelectWorkShop, setToSelectWorkShop] = useState<boolean>(false)
  const [scheduleEstimateActive, setScheduleEstimateActive] =
    useState<boolean>(false)

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
    if (messagesEndRef.current && messages) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  function handleOptionComponent(value: string, id: number | null) {
    if (toSelectVehicle && id) {
      setNewEstimate(prev => ({ ...prev, vehicleId: id }))
      setToSelectVehicle(false)
    }
    if (toSelectWorkShop && id) {
      setNewEstimate(prev => ({ ...prev, workshopId: id }))
      setToSelectWorkShop(false)
    }

    setInput(value)
    setInputEnable(true)
    setTimeout(() => {
      submitButtonRef.current?.click()
    }, 100)
  }

  const handleScheduleEstimate = async (scheduledAt: string) => {
    const date = new Date(scheduledAt)
    date.setHours(date.getHours() - 3)
    const formattedScheduledAt = date.toISOString().slice(0, 19)
    console.log(formattedScheduledAt)

    const data: CreateEstimate = {
      ...newEstimate,
      scheduledAt: formattedScheduledAt,
    }
    const createEstimateRequest = handleCreateEstimate(data)

    toast.promise(createEstimateRequest, {
      loading: 'Agendando orçamento...',
      success: () => {
        router.replace('/dashboard/estimate')
        return 'Orçamento agendado com sucesso!'
      },
      error: 'Algo deu ao agendar seu orçamento.',
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return
    let inputValue = null

    if (scheduleEstimateActive) {
      const scheduleDate = new Date(input)
      const today = new Date()
      if (scheduleDate < today) {
        toast.error(
          'Você não pode agendar um orçamento em uma data anterior à hoje.',
          {
            position: 'top-center',
            style: { filter: 'none', zIndex: 10 },
          }
        )
        return
      }
      inputValue = input.replace('T', ' às ')
      setScheduleEstimateActive(false)
    }
    setInput('')

    const userInputTimeStamp = getFormattedTime()
    setMessages([
      ...messages,
      {
        text: inputValue ? inputValue : input,
        fromUser: true,
        timestamp: userInputTimeStamp,
      },
    ])

    // msg to watson
    const responseAPI = await sendMessage(
      sessionId,
      inputValue ? inputValue : input
    )
    const respTimeStamp = getFormattedTime()

    const resp: ProcessedApiResponse[] = processApiResponse(responseAPI)

    if (
      'content' in resp[0] &&
      resp[0].content === 'Escolha o veículo que deseja:'
    ) {
      resp.push({
        options: vehicles.map(v => {
          return { label: v.name, value: v.name, id: v.id }
        }),
      })
      setToSelectVehicle(true)
    }

    if (
      'content' in resp[0] &&
      resp[0].content ===
        'Perfeito! Diga-me a data/dia de sua preferência para marcarmos o serviço.'
    ) {
      setScheduleEstimateActive(true)
    }

    if (resp.length > 1 && resp.length < 3) {
      if (
        'content' in resp[1] &&
        resp[1].content.includes(
          'Para finalizar seu orçamento, escolha uma das oficinas listadas por sua preferencia:'
        )
      ) {
        resp.push({
          options: workshops.map(w => {
            return { label: w.name, value: w.name, id: w.id }
          }),
        })
        setToSelectWorkShop(true)
      }
    } else if (resp.length === 3) {
      const description = resp.pop()
      if (!description) return
      if ('content' in description) {
        const parsed = JSON.parse(description.content.replaceAll('\n', '\\n'))
        const formattedDesc = `${parsed.problems} Valor aproximado: ${parsed.value.toLocaleString(
          'pt-BR',
          {
            style: 'currency',
            currency: 'BRL',
          }
        )}`
        setNewEstimate(prev => ({ ...prev, description: formattedDesc }))
      }
    }

    if (scheduleEstimateActive) {
      handleScheduleEstimate(input)
    }

    setMessages([
      ...messages,
      {
        text: inputValue ? inputValue : input,
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
    <div className='flex flex-col flex-grow bg-primary/30 p-1 rounded-sm mb-2 max-w-[1440px] w-full'>
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
      <form onSubmit={handleSubmit} className='bg-background border py-4 px-2'>
        <div className='flex w-full'>
          <input
            type={scheduleEstimateActive ? 'datetime-local' : 'text'}
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
