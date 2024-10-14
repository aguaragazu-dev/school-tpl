import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({
  id,
  image,
  title,
  date,
  time,
  location,
  description,
}: EventCardProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="w-1/4">
        <Image
          src={image}
          alt={title}
          width={200}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/4 p-6 flex justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <Clock size={16} className="mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={16} className="mr-2" />
            <span>{location}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-2xl font-bold text-green-500">{date}</div>
          <Link
            href={`/eventos/${id}`}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
