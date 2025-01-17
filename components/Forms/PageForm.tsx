'use client'

import { ReactNode } from 'react'
import { UseFormReturn, FormProvider } from 'react-hook-form'
import { FormHeader } from './FormHeader'
import { FormFooter } from './FormFooter'
import { Card, CardContent } from '@/components/ui/card'

interface PageFormProps<TFormValues> {
  form: UseFormReturn<TFormValues>
  onSubmit: (values: TFormValues) => Promise<void>
  title: string
  description?: string
  backHref?: string
  breadcrumbs?: { label: string; href: string }[]
  children: ReactNode
  isSubmitting?: boolean
  submitText?: string
  onCancel?: () => void
}

export function PageForm<TFormValues>({ 
  form, 
  onSubmit,
  title,
  description,
  backHref,
  breadcrumbs,
  children,
  isSubmitting,
  submitText,
  onCancel
}: PageFormProps<TFormValues>) {
  return (
    <div className="container max-w-2xl py-10">
      <FormHeader
        title={title}
        description={description}
        backHref={backHref}
        breadcrumbs={breadcrumbs}
        showSaveButton
        onSave={form.handleSubmit(onSubmit)}
        isLoading={isSubmitting}
        saveButtonText={submitText}
      />
      <Card>
        <CardContent className="pt-6">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {children}
              <FormFooter
                onCancel={onCancel}
                isSubmitting={isSubmitting}
                submitText={submitText}
              />
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
}
