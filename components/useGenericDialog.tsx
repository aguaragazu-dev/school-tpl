import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Info, HelpCircle } from "lucide-react"

type DialogType = 'message' | 'info' | 'error' | 'confirm'

interface DialogProps {
  type: DialogType
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => Promise<void> | void
  onCancel?: () => void
}

const useGenericDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dialogProps, setDialogProps] = useState<DialogProps | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const showDialog = (props: DialogProps) => {
    setDialogProps(props)
    setIsOpen(true)
  }

  const handleConfirm = async () => {
    if (dialogProps?.onConfirm) {
      setIsLoading(true)
      await dialogProps.onConfirm()
      setIsLoading(false)
    }
    setIsOpen(false)
  }

  const handleCancel = () => {
    dialogProps?.onCancel?.()
    setIsOpen(false)
  }

  const DialogComponent = () => {
    if (!dialogProps) return null

    const { type, title, message, confirmText, cancelText } = dialogProps

    const iconMap = {
      message: <HelpCircle className="h-6 w-6 text-blue-500" />,
      info: <Info className="h-6 w-6 text-blue-500" />,
      error: <AlertCircle className="h-6 w-6 text-red-500" />,
      confirm: <CheckCircle className="h-6 w-6 text-green-500" />
    }

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-2">
              {iconMap[type]}
              <DialogTitle>{title}</DialogTitle>
            </div>
          </DialogHeader>
          <DialogDescription>{message}</DialogDescription>
          <DialogFooter>
            {type === 'confirm' && (
              <Button variant="outline" onClick={handleCancel}>
                {cancelText || 'Cancelar'}
              </Button>
            )}
            <Button onClick={handleConfirm} disabled={isLoading}>
              {isLoading ? 'Procesando...' : confirmText || 'Aceptar'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return { showDialog, DialogComponent }
}

export default useGenericDialog