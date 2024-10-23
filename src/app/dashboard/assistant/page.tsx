import { ChatComponent } from './_components/chat-component'
import { cookies } from 'next/headers'

export default async function AssistantPage() {
  const res = await fetch(`${process.env.BACKEND_URL}/client/chatbot/init`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()
  return (
    <section className='flex flex-col flex-grow px-2'>
      <h1 className='text-2xl font-semibold text-center'>
        Assistente Pé na Estrada
      </h1>
      <ChatComponent
        username={data.username}
        vehicles={data.vehicles}
        workshops={data.workshops}
      />
    </section>
  )
}
