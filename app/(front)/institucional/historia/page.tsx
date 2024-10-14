import PageHeader from '@/components/PageHeader';
import TabInterface from '@/components/TabInterface';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="ABOUT US"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="About Edulyn"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6">
            We Have Experienced Professionals & We Do Our Best To Achieve Your
            Goal. Your Happiness Is Our First Priority.
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link
            href="/contact"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Historia del Colegio</h1>
      <Card>
        <CardContent className="prose max-w-none">
          <p>
            El Colegio Nuestra Señora de Guadalupe fue fundado en 1950 por un
            grupo de educadores visionarios...
          </p>
          <h2>Nuestros Inicios</h2>
          <p>
            En sus primeros años, el colegio comenzó como una pequeña escuela
            primaria con apenas 50 alumnos...
          </p>
          <h2>Crecimiento y Expansión</h2>
          <p>
            A lo largo de las décadas, el colegio fue creciendo y expandiéndose,
            agregando el nivel secundario en 1970...
          </p>
          <h2>El Colegio Hoy</h2>
          <p>
            Actualmente, el Colegio Nuestra Señora de Guadalupe es reconocido
            como una institución líder en educación...
          </p>
        </CardContent>
      </Card>

      <TabInterface />
    </div>
  );
}
