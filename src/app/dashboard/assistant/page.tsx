import { userChatBotInitDetails } from '@/http/user-chatbot-init-details'
import { ChatComponent } from './_components/chat-component'

export default async function AssistantPage() {
  const data = await userChatBotInitDetails()
  return (
    <main className='flex flex-col flex-grow px-2'>
      <h1 className='text-2xl font-semibold text-center'>
        Assistente Pé na Estrada
      </h1>
      <ChatComponent
        username={data.username}
        vehicles={data.vehicles}
        workshops={data.workshops}
      />
    </main>
  )
}
