import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import EventSidebar from '../components/EventSidebar';
import PopularCourses from '../components/PopularEvents';

// In a real application, you would fetch this data based on the event ID
const eventData = {
  id: 1,
  title:
    'International students coming in UK from Asian subcontinant for better education.',
  date: '19 February, 2021',
  time: '10:30am',
  location: '795 South Park Avenue, CA',
  category: 'Social Science',
  image: '/placeholder.svg?height=400&width=800',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt harum facilis odit inventore molestias qui asperiores recusandae architecto mollitia provident ipsa unde, praesentium impedit enim voluptate ducimus, saepe autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo inventore, aliquid, odit modi harum libero culpa distinctio. Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Illo porro maiores fuga dignissimos temporibus odio nulla nobis nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  startDate: 'Aug 21, 2020',
  time: '08:30am',
  seat: 220,
  place: 'Ontario,CA',
  organizer: 'David Young',
  phone: '+1 (396) 486 4709',
  email: 'email@me.com',
  website: 'www.mydomain.com',
};

export default function EventDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <PageHeader
        title="EVENT DETAILS"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: eventData.title, href: `/events/${params.id}` },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-8">
            <h1 className="text-3xl font-bold mb-4">{eventData.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar size={20} className="mr-2" />
              <span className="mr-4">{eventData.date}</span>
              <Clock size={20} className="mr-2" />
              <span className="mr-4">{eventData.time}</span>
              <MapPin size={20} className="mr-2" />
              <span>{eventData.location}</span>
            </div>
            <div className="mb-6">
              <Image
                src={eventData.image}
                alt={eventData.title}
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
            <p className="text-gray-700 mb-6">{eventData.description}</p>
          </div>
          <div className="lg:w-1/3">
            <EventSidebar {...eventData} />
            <PopularCourses />
          </div>
        </div>
      </div>
    </div>
  );
}
