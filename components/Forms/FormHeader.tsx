'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
}

interface FormHeaderProps {
  title: string
  description?: string
  backHref?: string
  breadcrumbs?: Breadcrumb[]
  showSaveButton?: boolean
  onSave?: () => void
  isLoading?: boolean
  saveButtonText?: string
}

export function FormHeader({ 
  title, 
  description,
  backHref,
  breadcrumbs,
  showSaveButton,
  onSave,
  isLoading,
  saveButtonText = "Guardar Cambios"
}: FormHeaderProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {backHref && (
            <Link href={backHref}>
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </Link>
          )}
          <div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={breadcrumb.href} className="flex items-center gap-2">
                    {index > 0 && <span>/</span>}
                    <Link href={breadcrumb.href} className="hover:text-foreground">
                      {breadcrumb.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        {showSaveButton && onSave && (
          <Button 
            onClick={onSave} 
            disabled={isLoading}
          >
            {isLoading ? "Guardando..." : saveButtonText}
          </Button>
        )}
      </div>
    </div>
  )
}