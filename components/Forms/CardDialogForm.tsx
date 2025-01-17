'use client'

import { ReactNode } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { FormFooter } from './FormFooter'

interface CardDialogFormProps<TFormValues> {
  form: UseFormReturn<TFormValues>
  onSubmit: (values: TFormValues) => Promise<void>
  title: string
  children: ReactNode
  isSubmitting?: boolean
  submitText?: string
  onCancel?: () => void
}

export function CardDialogForm<TFormValues>({ 
  form, 
  onSubmit,
  title,
  children,
  isSubmitting,
  submitText,
  onCancel
}: CardDialogFormProps<TFormValues>) {
  return (
    <Card>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {children}
        </CardContent>
        <CardFooter>
          <FormFooter
            onCancel={onCancel}
            isSubmitting={isSubmitting}
            submitText={submitText}
          />
        </CardFooter>
      </form>
    </Card>
  )
}

