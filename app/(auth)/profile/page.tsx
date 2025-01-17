'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ProfileForm } from './ProfileForm'
import { EmailChangeForm } from './EmailChangeForm'
import { PasswordChangeForm } from './PasswordChangeForm'
import { ImageUploadForm } from './ImageUploadForm'
import { RelatedDataDisplay } from './RelatedDataDisplay'
import { DeleteAccountButton } from './DeleteAccountButton'

// API functions
const fetchUserProfile = async () => {
  const response = await axios.get('/api/user/profile')
  return response.data
}

const fetchRelatedData = async () => {
  const response = await axios.get('/api/user/related-data')
  return response.data
}

export default function ProfilePage() {
  const { user } = useUser()
  const queryClient = useQueryClient()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    staleTime: 300000, // 5 minutes
    cacheTime: 3600000, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const { data: relatedData, isLoading: isLoadingRelatedData } = useQuery({
    queryKey: ['userRelatedData'],
    queryFn: fetchRelatedData,
    staleTime: 300000, // 5 minutes
    cacheTime: 3600000, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  if (isLoadingProfile || isLoadingRelatedData) {
    return <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Perfil de Usuario</CardTitle>
          <CardDescription>Gestiona tu información personal y configuración de cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="email">Correo</TabsTrigger>
              <TabsTrigger value="password">Contraseña</TabsTrigger>
              <TabsTrigger value="image">Imagen</TabsTrigger>
              <TabsTrigger value="data">Datos</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="flex flex-col md:flex-row gap-8 mt-6">
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'Avatar'} />
                      <AvatarFallback>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-xl font-semibold">{user?.fullName}</h2>
                    <p className="text-sm text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <ProfileForm profile={profile} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="email">
              <EmailChangeForm />
            </TabsContent>
            <TabsContent value="password">
              <PasswordChangeForm />
            </TabsContent>
            <TabsContent value="image">
              <ImageUploadForm />
            </TabsContent>
            <TabsContent value="data">
              <RelatedDataDisplay relatedData={relatedData} />
            </TabsContent>
          </Tabs>
          <div className="mt-8">
            <DeleteAccountButton />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}