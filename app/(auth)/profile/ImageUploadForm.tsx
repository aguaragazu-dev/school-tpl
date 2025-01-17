'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Upload } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast";

export function ImageUploadForm() {
  const { user } = useUser()
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  const { toast } = useToast()

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploadingImage(true)
    try {
      await user?.setProfileImage({ file })
      toast({
        title: "Imagen de perfil actualizada",
        description: "Tu imagen de perfil ha sido actualizada exitosamente.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar la imagen de perfil. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
      console.error('Error uploading image:', error)
    } finally {
      setIsUploadingImage(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cambiar Imagen de Perfil</CardTitle>
        <CardDescription>Actualiza tu foto de perfil</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'Avatar'} />
            <AvatarFallback>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUploadingImage}
            />
            <p className="text-sm text-gray-500 mt-2">
              JPG, GIF o PNG. Máximo 1MB.
            </p>
          </div>
        </div>
        <Button className="mt-4" disabled={isUploadingImage}>
          {isUploadingImage ? (
            'Subiendo...'
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Subir Imagen
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}