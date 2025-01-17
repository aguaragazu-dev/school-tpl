'use client'

import { Button } from '../ui/button'

interface FormFooterProps {
  onCancel?: () => void
  isSubmitting?: boolean
  submitText?: string
  cancelText?: string
}

export function FormFooter({ 
  onCancel, 
  isSubmitting = false,
  submitText = "Guardar",
  cancelText = "Cancelar"
}: FormFooterProps) {
  return (
    <div className="flex items-center justify-end gap-4 pt-6">
      {onCancel && (
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          {cancelText}
        </Button>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Guardando..." : submitText}
      </Button>
    </div>
  )
}

