import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

export function useAdminAccess() {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const response = await axios.get('/api/users/me')
        if (response.data.role !== 'ADMIN') {
          router.push('/')
        }
      } catch (error) {
        router.push('/')
      }
    }
    
    if (user) {
      checkAdminAccess()
    }
  }, [user, router])

  return { isLoading: !user }
}
