import React from 'react'
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { cn } from '@/lib/utils'

interface DeleteBtnProps {
  label?: string
  onClick: () => void
  disableDelete?: boolean
}

export default function DeleteBtn({ onClick, disableDelete = false, label }: DeleteBtnProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      disabled={disableDelete}
      className={cn('text-red-600', disableDelete ? 'opacity-50 cursor-not-allowed' : '')}>
      <Trash className="h-4 w-4" />
      {label && <span className="sr-only">{label}</span>}
    </Button>
  )
}