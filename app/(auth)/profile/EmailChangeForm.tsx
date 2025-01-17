'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast";

const emailSchema = z.object({
  email: z.string().email('Ingrese un correo electrónico válido'),
})

type EmailFormValues = z.infer<typeof emailSchema>

export function EmailChangeForm() {
  const { user } = useUser()
  const [isChangingEmail, setIsChangingEmail] = useState(false)
  const { toast } = useToast()

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: EmailFormValues) => {
    setIsChangingEmail(true)
    try {
      await user?.updateEmail({ email: data.email })
      toast({
        title: "Correo electrónico actualizado",
        description: "Se ha enviado un correo de verificación a tu nueva dirección.",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el correo electrónico. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
      console.error('Error changing email:', error)
    } finally {
      setIsChangingEmail(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cambiar Correo Electrónico</CardTitle>
        <CardDescription>Actualiza tu dirección de correo electrónico</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nuevo Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isChangingEmail}>
              {isChangingEmail ? 'Cambiando...' : 'Cambiar Correo'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}