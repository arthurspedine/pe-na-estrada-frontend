'use client'
import { Button } from '@/components/ui/button'
import { DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog'
import { Label } from '@radix-ui/react-label'
import { Plus } from 'lucide-react'

export function AddNewCar() {
  return (
    <button
      type='button'
      className='absolute right-4 top-4 bg-green-500 rounded-full p-1'
    >
      <Plus style={{ width: '22px', height: '22px' }} />
    </button>
  )
}
