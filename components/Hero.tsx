import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white py-16 px-4 rounded-lg my-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos al Colegio Nuestra Señora de Guadalupe</h1>
        <p className="text-xl mb-8">Formando líderes del mañana con valores y excelencia académica</p>
        <Button variant="secondary" size="lg">Conoce Más</Button>
      </div>
    </div>
  );
}