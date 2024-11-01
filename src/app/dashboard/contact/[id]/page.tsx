import { redirect } from 'next/navigation'
import type { Contact, User } from '../../interfaces'
import { cookies } from 'next/headers'
import { EditContactForm } from '@/components/edit-contact-form'
import { DeleteContact } from '@/components/delete-contact'

export default async function EditContactPage({
  params,
}: { params: { id: number } }) {
  const id = Number(params.id)

  const req = await fetch(`${process.env.BACKEND_URL}/client/dashboard`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: cookies().toString(),
      'Content-Type': 'application/json',
    },
  })
  const data: User = await req.json()

  const contact: Contact | undefined = data.contacts.find(c => c.id === id)

  if (contact === undefined) redirect('/dashboard')

  const cleanedString = contact.number.replace(/\D/g, '')
  const ddi = Number(cleanedString.slice(0, 2))
  const ddd = Number(cleanedString.slice(2, 4))
  const number = cleanedString.slice(4)

  let formattedNumber = ''

  if (number.length === 8)
    formattedNumber = `${number.slice(0, 4)}-${number.slice(4)}`
  else formattedNumber = `${number.slice(0, 5)}-${number.slice(5)}`

  return (
    <section className='flex flex-col flex-grow px-8 items-center'>
      <div className='max-w-[431px] w-full'>
        <div className='w-full flex justify-between'>
          <h1 className='text-2xl font-semibold'>Editar contato</h1>
          <DeleteContact id={id} />
        </div>
        <EditContactForm id={id} ddi={ddi} ddd={ddd} number={formattedNumber} />
      </div>
    </section>
  )
}
