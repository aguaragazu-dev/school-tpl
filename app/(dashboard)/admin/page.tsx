import { Calendar, FileText, Home, Users } from 'lucide-react';
import StatCard from './components/StatCard';
import RecentSection from './components/RecentSection';

export default function DashboardHome() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h3 className="text-gray-700 text-3xl font-medium">
        Bienvenido al Panel de Administración
      </h3>

      <div className="mt-8">
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Usuarios"
            value="1,234"
            icon={<Users size={20} />}
          />
          <StatCard
            title="Noticias Publicadas"
            value="42"
            icon={<FileText size={20} />}
          />
          <StatCard
            title="Eventos Próximos"
            value="8"
            icon={<Calendar size={20} />}
          />
          <StatCard
            title="Nuevas Matrículas"
            value="23"
            icon={<Home size={20} />}
          />
        </div>
      </div>

      <div className="flex flex-wrap mt-8 -mx-6">
        <RecentSection
          title="Últimas Matrículas"
          items={[
            { name: 'Juan Pérez', time: 'Hace 2 horas' },
            { name: 'María García', time: 'Hace 3 horas' },
            { name: 'Carlos Rodríguez', time: 'Hace 5 horas' },
          ]}
        />
        <RecentSection
          title="Últimas Admisiones"
          items={[
            { name: 'Ana Martínez', time: 'Hace 1 hora' },
            { name: 'Luis Sánchez', time: 'Hace 4 horas' },
            { name: 'Elena Gómez', time: 'Hace 6 horas' },
          ]}
        />
      </div>
    </div>
  );
}