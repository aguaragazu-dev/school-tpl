import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type RelatedDataProps = {
  relatedData?: {
    sessions?: Array<{ device: string; lastActiveAt: string }>
    courses?: Array<{ name: string }>
  }
}

export function RelatedDataDisplay({ relatedData }: RelatedDataProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Datos Relacionados</CardTitle>
        <CardDescription>Información adicional de tu cuenta</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Sesiones Activas</h3>
            <ul className="list-disc list-inside">
              {relatedData?.sessions?.map((session, index) => (
                <li key={index}>
                  {session.device} - Última actividad: {format(new Date(session.lastActiveAt), 'dd/MM/yyyy HH:mm', { locale: es })}
                </li>
              )) || <li>No hay sesiones activas</li>}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Cursos Inscritos</h3>
            <ul className="list-disc list-inside">
              {relatedData?.courses?.map((course, index) => (
                <li key={index}>{course.name}</li>
              )) || <li>No hay cursos inscritos</li>}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}