'use client'

import { ReactNode } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog'
import { FormFooter } from './FormFooter'

interface DialogFormProps<TFormValues> {
  form: UseFormReturn<TFormValues>
  onSubmit: (values: TFormValues) => Promise<void>
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  isSubmitting?: boolean
  submitText?: string
}

export function DialogForm<TFormValues>({ 
  form, 
  onSubmit,
  title,
  isOpen,
  onClose,
  children,
  isSubmitting,
  submitText
}: DialogFormProps<TFormValues>) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {children}
          </div>
          <DialogFooter>
            <FormFooter
              onCancel={onClose}
              isSubmitting={isSubmitting}
              submitText={submitText}
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

