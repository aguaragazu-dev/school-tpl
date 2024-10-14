import Image from 'next/image';

const photos = [
  { src: 'https://source.unsplash.com/random/800x600?school', alt: 'Fachada del colegio' },
  { src: 'https://source.unsplash.com/random/800x600?classroom', alt: 'Aula moderna' },
  { src: 'https://source.unsplash.com/random/800x600?library', alt: 'Biblioteca' },
  { src: 'https://source.unsplash.com/random/800x600?laboratory', alt: 'Laboratorio de ciencias' },
  { src: 'https://source.unsplash.com/random/800x600?playground', alt: 'Patio de juegos' },
  { src: 'https://source.unsplash.com/random/800x600?sports', alt: 'Instalaciones deportivas' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Galería de Fotos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative h-64">
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}