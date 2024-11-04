import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[600px]"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="text-black max-w-3xl">
          <h2 className="text-2xl mb-4">Comunidad Educativa </h2>
          <h1 className="text-5xl font-bold mb-6">
          Santa Rita de Casia
          </h1>
          <p className="text-xl mb-8">Formando líderes del mañana con valores y excelencia académica</p>
          <div className="flex space-x-4">
            <Link
              href="/niveles"
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300"
            >
              Oferta
            </Link>
            <Link
              href="/contact"
              className="bg-navy-blue text-white px-6 py-3 rounded hover:bg-blue-800 transition duration-300"
            >
              Contactenos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
