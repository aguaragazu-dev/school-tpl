import EventCard from './EventCard';

const events = [
  {
    id: 1,
    image: '/placeholder.svg?height=200&width=300',
    title: 'Ratione omnis consequuntur placeae consol.',
    date: '25 MARCH',
    time: '7:30pm',
    location: '795 South Park Avenue, CA 94107.',
    description:
      'Fugiat et aperiam similique, perferendis maiores tenetur voluptatem consequuntur harum unde illo alias mollitia a cumque.',
  },
  {
    id: 2,
    image: '/placeholder.svg?height=200&width=300',
    title: 'Ratione omnis consequuntur placeae consol.',
    date: '25 MARCH',
    time: '7:30pm',
    location: '795 South Park Avenue, CA 94107.',
    description:
      'Fugiat et aperiam similique, perferendis maiores tenetur voluptatem consequuntur harum unde illo alias mollitia a cumque.',
  },
  {
    id: 3,
    image: '/placeholder.svg?height=200&width=300',
    title: 'Ratione omnis consequuntur placeae consol.',
    date: '25 MARCH',
    time: '7:30pm',
    location: '795 South Park Avenue, CA 94107.',
    description:
      'Fugiat et aperiam similique, perferendis maiores tenetur voluptatem consequuntur harum unde illo alias mollitia a cumque.',
  },
];

export default function EventList() {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}
