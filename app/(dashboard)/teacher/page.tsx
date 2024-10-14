import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TeacherDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenido, Profesor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Clases de Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Matemáticas 101 - 9:00 AM</li>
              <li>Álgebra Avanzada - 11:00 AM</li>
              <li>Geometría - 2:00 PM</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tareas por Calificar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Examen de Matemáticas 101 (25 estudiantes)</li>
              <li>Proyecto de Álgebra Avanzada (15 estudiantes)</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximas Reuniones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Reunión de Departamento - 16/06/2023</li>
              <li>Conferencia de Padres - 20/06/2023</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}