import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StudentDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenido, Estudiante</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Próximas Tareas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Ensayo de Historia - Vence: 15/06/2023</li>
              <li>Proyecto de Ciencias - Vence: 20/06/2023</li>
              <li>Examen de Matemáticas - Fecha: 22/06/2023</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calificaciones Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Matemáticas: 85/100</li>
              <li>Literatura: 92/100</li>
              <li>Física: 88/100</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Anuncios</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Feria de Ciencias - 25/06/2023</li>
              <li>Vacaciones de Verano - Inician 01/07/2023</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}