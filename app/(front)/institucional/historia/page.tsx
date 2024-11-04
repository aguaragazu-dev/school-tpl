import PageHeader from '@/components/PageHeader';
import TabInterface from '@/components/TabInterface';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import BlogPosts from '../../_sections/BlogPosts';
import BlogSidebar from '../../noticias/components/BlogSidebar';

const recentPosts = [
  {
    id: 1,
    title: 'Celebración del Día de la Independencia',
    date: '2023-07-09',
    content:
      'El Colegio Nuestra Señora de Guadalupe celebró el Día de la Independencia con un acto especial...',
    image: 'https://source.unsplash.com/random/800x400?independence',
  },
  {
    id: 2,
    title: 'Resultados de las Olimpiadas de Matemáticas',
    date: '2023-06-15',
    content:
      'Nos enorgullece anunciar que nuestros estudiantes obtuvieron excelentes resultados en las Olimpiadas de Matemáticas...',
    image: 'https://source.unsplash.com/random/800x400?mathematics',
  },
  // Add more news articles as needed
];


export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="HISTORIA"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Historia', href: '/about' },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/santarita/hero-sta-rita.png?height=400&width=600"
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
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </Link>

          <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Post</h2>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex space-x-4">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-green-500 transition duration-300"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Historia de la Comunidad Educativa Santa Rita de Casia</h1>
      
          <p>
          La Comunidad Educativa Santa Rita de Casia, ubicada en la ciudad de Santa Fe, Argentina, 
          tiene sus raíces en los esfuerzos de varias familias y docentes que se unieron para crear 
          un espacio educativo innovador y accesible en el barrio. Desde sus comienzos, la escuela se 
          ha caracterizado por una filosofía inclusiva y una cercanía comunitaria que se reflejan en su 
          compromiso constante con la formación de los estudiantes y el bienestar del entorno social.
          </p>
          <h2 className='text-blue-600 font-semibold mt-4 mb-2'>Inicios y Fundación del Nivel Primario (década de 1980)</h2>
          <p>
          La historia de la escuela Santa Rita de Casia comienza formalmente en la década de 1980, 
          en un contexto donde el acceso a instituciones educativas de calidad era un desafío en ciertos 
          sectores de la ciudad. Con un esfuerzo compartido entre la comunidad local y la parroquia, 
          en 1984 se inauguró el nivel primario en un espacio que marcó un hito en el barrio. Este primer 
          edificio contaba con paredes prefabricadas, un recurso que se obtuvo mediante la reutilización 
          de materiales provenientes de la escuela Nuestra Señora de Fátima, otra institución educativa 
          con un compromiso social similar.
          </p>
          <p>La elección de paredes prefabricadas recicladas no solo fue una solución económica, sino 
            también un símbolo de sostenibilidad y colaboración entre las comunidades educativas, reflejando 
            valores de solidaridad y creatividad. Este enfoque pionero permitió que los primeros estudiantes 
            tuvieran un espacio adecuado para sus estudios, a pesar de las limitaciones de recursos iniciales.</p>
          <h2 className='text-blue-600 font-semibold mt-4 mb-2'>Crecimiento y Consolidación (1990-2000)</h2>
          <p>
          A medida que crecía el número de estudiantes, la escuela Santa Rita de Casia experimentó 
          una expansión física y académica. Durante los años noventa, la comunidad educativa y las 
          familias trabajaron conjuntamente para mejorar la infraestructura, adaptando las instalaciones 
          para atender la creciente demanda. Se llevaron a cabo obras que ampliaron el espacio de aulas, 
          zonas recreativas y áreas de actividades culturales, consolidando a la institución como un 
          referente educativo en la ciudad.
          </p>
          <h2 className='text-blue-600 font-semibold mt-4 mb-2'>Compromiso con la Comunidad (2000 en adelante)</h2>
          <p>
          En el nuevo milenio, la institución continuó ampliando su propuesta educativa, 
          incluyendo una orientación sólida hacia la educación en valores y el desarrollo 
          integral de sus alumnos. La escuela Santa Rita de Casia se ha destacado por su 
          participación en proyectos comunitarios y su vocación de servicio, consolidando 
          su papel como un espacio de referencia y apoyo en el barrio.
          </p>
          <p>La Comunidad Educativa Santa Rita de Casia es hoy una institución valorada 
            por su espíritu de cooperación y compromiso con la formación de ciudadanos 
            comprometidos. Con un pasado que honra la resiliencia y la creatividad, la 
            escuela sigue siendo un lugar donde cada estudiante es acogido y guiado, 
            siguiendo los principios de su fundación.</p>
          <p>En el año 2023, la Comunidad Educativa Santa Rita de Casia se ha convertido en 
            una institución reconocida por su compromiso con la educación en valores y 
            el desarrollo integral de sus alumnos. Con un enfoque en la innovación y 
            la colaboración, la escuela se ha destacado por su participación en proyectos 
            comunitarios y su vocación de servicio, consolidando su papel como un espacio 
            de referencia y apoyo en el barrio.</p>

    
            <BlogPosts />
    </div>

  );
}
