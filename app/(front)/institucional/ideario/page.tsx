import { Card, CardContent } from '@/components/ui/card';

export default function IdearioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ideario Institucional</h1>
      <Card>
        <CardContent className="prose max-w-none">
          <h2>Nuestra Misión</h2>
          <p>Formar integralmente a nuestros alumnos, desarrollando sus capacidades intelectuales, morales y sociales...</p>
          <h2>Nuestra Visión</h2>
          <p>Ser reconocidos como una institución educativa de excelencia, que prepara a sus estudiantes para los desafíos del siglo XXI...</p>
          <h2>Valores</h2>
          <ul>
            <li>Respeto</li>
            <li>Responsabilidad</li>
            <li>Solidaridad</li>
            <li>Excelencia académica</li>
            <li>Compromiso social</li>
          </ul>
          <h2>Propuesta Educativa</h2>
          <p>Nuestro enfoque educativo se basa en...</p>
        </CardContent>
      </Card>
    </div>
  );
}