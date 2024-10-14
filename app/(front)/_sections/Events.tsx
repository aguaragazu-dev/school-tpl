import { Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    date: '25 March',
    title: '2020 admidion fair going on this week',
    time: '5:30pm - 7.00pm',
    location: 'Newyork,NY.',
    description: 'Lorem ipsum dolor sit amet consectetur. Como Ssee hou',
  },
  {
    id: 2,
    date: '25 March',
    title: '2020 admidion fair going on this week',
    time: '5:30pm - 7.00pm',
    location: 'Newyork,NY.',
    description: 'Lorem ipsum dolor sit amet consectetur. Como Ssee hou',
  },
  {
    id: 3,
    date: '25 March',
    title: '2020 admidion fair going on this week',
    time: '5:30pm - 7.00pm',
    location: 'Newyork,NY.',
    description: 'Lorem ipsum dolor sit amet consectetur. Como Ssee hou',
  },
];

export default function Events() {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-3xl font-bold mb-6">
        UPCOMING <span className="text-green-500">EVENTS</span>
      </h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="flex items-start">
            <div className="bg-green-500 text-white rounded-lg p-4 text-center mr-4 flex-shrink-0">
              <div className="text-2xl font-bold">
                {event.date.split(' ')[0]}
              </div>
              <div>{event.date.split(' ')[1]}</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-1">
                <Clock size={16} className="mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
