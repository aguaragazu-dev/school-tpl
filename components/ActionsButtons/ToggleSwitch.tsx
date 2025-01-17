import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface ToggleSwitchProps<T> {
  row: T
  isChecked: boolean
  onToggle: (row: T) => void
  labelOn: string
  labelOff: string
  confirmationTitle: string
  confirmationDescription: string
}

export function ToggleSwitch<T>({ 
  row, 
  isChecked, 
  onToggle, 
  labelOn, 
  labelOff, 
  confirmationTitle, 
  confirmationDescription 
}: ToggleSwitchProps<T>) {
  const { toast } = useToast()

  const handleToggle = () => {
    const newState = !isChecked
    const action = newState ? labelOn : labelOff
    
    toast({
      title: confirmationTitle,
      description: confirmationDescription,
      action: (
        <div className="flex space-x-2">
          <button
            className="px-3 py-2 bg-primary text-primary-foreground rounded-md"
            onClick={() => {
              onToggle(row)
              toast({
                title: "Acción completada",
                description: `El elemento ha sido ${action.toLowerCase()}.`,
              })
            }}
          >
            Confirmar
          </button>
          <button
            className="px-3 py-2 bg-secondary text-secondary-foreground rounded-md"
            onClick={() => toast({ title: "Acción cancelada" })}
          >
            Cancelar
          </button>
        </div>
      ),
    })
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch id="toggle" checked={isChecked} onCheckedChange={handleToggle} />
      <Label htmlFor="toggle">{isChecked ? labelOn : labelOff}</Label>
    </div>
  )
}