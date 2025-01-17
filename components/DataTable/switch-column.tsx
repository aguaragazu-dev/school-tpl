'use client'

import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import type { SwitchColumnProps } from "../../types/data-table"

export function SwitchColumn({
  value,
  onChange,
  activeColor = "bg-green-500",
  inactiveColor = "bg-red-500",
  immediate = true,
  onConfirm,
  loading = false
}: SwitchColumnProps) {
  const [isPending, setIsPending] = useState(false)
  const [localValue, setLocalValue] = useState(value)
  
  // Actualizamos el estado local cuando cambia el valor prop
  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = async (checked: boolean) => {
    if (loading || isPending) return

    if (immediate) {
      onChange?.(checked)
      return
    }

    if (onConfirm) {
      try {
        setIsPending(true)
        // Actualizamos el estado local primero para feedback inmediato
        setLocalValue(checked)
        // Intentamos confirmar con el servidor
        await onConfirm(checked)
        // Si la confirmación es exitosa y hay un onChange, lo llamamos
        onChange?.(checked)
      } catch (error) {
        // Si hay error, revertimos el estado local
        setLocalValue(value)
        console.error('Error al confirmar el cambio:', error)
        throw error // Propagamos el error para que pueda ser manejado por el padre
      } finally {
        setIsPending(false)
      }
    }
  }

  return (
    <Switch
      checked={localValue}
      onCheckedChange={handleChange}
      disabled={loading || isPending}
      className={cn(
        `data-[state=checked]:{activeColor}`,
        `data-[state=unchecked]:{inactiveColor}`,
        (loading || isPending) && "opacity-50 cursor-not-allowed"
      )}
    />
  )
}
