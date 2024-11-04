import PageHeader from '@/components/PageHeader';
import EventList from './components/EventList';
import Sidebar from './components/Sidebar';

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        title="EVENTOS"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Eventos', href: '/eventos' },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <EventList />
          </div>
          <div className="md:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
