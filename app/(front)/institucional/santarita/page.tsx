import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SantaRitaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="SANTA RITA DE CASIA"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Santa Rita", href: "/santarita" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/santarita/hero-sta-rita.png?height=400&width=600"
            alt="Santa Rita de Casia"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6">Santa Rita de Casia</h2>
          <p className="text-gray-600 mb-6 p-5 text-justify">
            Nacida como Margherita Lotti en 1381 en Roccaporena, Italia, es
            reconocida como una de las santas más veneradas de la Iglesia
            Católica. Desde temprana edad, Rita manifestó un profundo interés
            por la vida religiosa, aunque sus padres, preocupados por su
            bienestar y con deseos de protegerla, la comprometieron en
            matrimonio con Paolo Mancini, un hombre de temperamento fuerte y
            difícil. A pesar de las dificultades en su vida conyugal, Rita buscó
            siempre la paz y el entendimiento, logrando finalmente la conversión
            de su esposo hacia una vida más serena y justa.
          </p>
          <p className="text-gray-600 mb-6 p-5 text-justify">
            Su vida sufrió un fuerte revés con el asesinato de Paolo debido a
            disputas familiares. Aunque enfrentó el dolor de la pérdida, su fe
            permaneció firme, y ella oró para que sus hijos no buscaran
            venganza. Después de la muerte de sus hijos, Rita se dedicó de lleno
            a la vida religiosa e intentó ingresar al convento de las Agustinas
            en Casia, un deseo que inicialmente fue rechazado. Sin embargo, tras
            varios intentos y después de un milagro atribuido a su intercesión,
            fue aceptada.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pl-12  ">
          <p className="text-gray-600 mb-6 p-5 text-justify">
            Durante su tiempo en el convento, Santa Rita vivió con humildad y
            devoción, conocida por su vida de oración y sacrificio. Uno de los
            momentos más significativos de su vida fue la aparición de una
            espina en su frente, en respuesta a su oración de compartir el
            sufrimiento de Cristo, un estigma que llevó hasta su muerte en 1457.
          </p>
          <p className="text-gray-600 mb-6 p-5 text-justify">
            Santa Rita es conocida como la “Santa de los Imposibles” debido a
            los milagros que se le atribuyen y a su vida de superación y fe
            inquebrantable en circunstancias difíciles. Fue canonizada en 1900
            por el Papa León XIII, y su festividad se celebra cada 22 de mayo.
            Su historia inspira a muchas personas en situaciones difíciles, y se
            le pide intercesión en casos de causas desesperadas y problemas
            matrimoniales.
          </p>
          <p className="text-gray-600 mb-6 p-5 text-justify">
            Su legado perdura en su santuario en Casia, lugar de peregrinación
            para miles de devotos de todo el mundo.
          </p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/santarita/Santa-Rita-da-Cascia.jpg?height=400&width=500"
            alt="Santa Rita de Casia"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      
    </div>
  );
}
