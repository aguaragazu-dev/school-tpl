import { createContext, useContext } from 'react'
import { AsyncLocalStorage } from 'async_hooks'

export const asyncLocalStorage = new AsyncLocalStorage()

export const PrismaContext = createContext({
  userId: null,
  ip: null,
  userAgent: null,
  path: null,
  method: null,
  headers: null
})

export const usePrismaContext = () => useContext(PrismaContext)