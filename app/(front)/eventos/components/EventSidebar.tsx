import { Clock, MapPin, User, Phone, Mail, Globe } from 'lucide-react';

interface EventSidebarProps {
  startDate: string;
  time: string;
  seat: number;
  place: string;
  organizer: string;
  phone: string;
  email: string;
  website: string;
}

export default function EventSidebar({
  startDate,
  time,
  seat,
  place,
  organizer,
  phone,
  email,
  website,
}: EventSidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">11</div>
          <div className="text-sm text-gray-600">DAYS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">10</div>
          <div className="text-sm text-gray-600">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">35</div>
          <div className="text-sm text-gray-600">MINUTES</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <Clock size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Start Date:</div>
            <div>{startDate}</div>
          </div>
        </div>
        <div className="flex items-center">
          <Clock size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Time:</div>
            <div>{time}</div>
          </div>
        </div>
        <div className="flex items-center">
          <User size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Seat:</div>
            <div>{seat}</div>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Place:</div>
            <div>{place}</div>
          </div>
        </div>
        <div className="flex items-center">
          <User size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Organizer:</div>
            <div>{organizer}</div>
          </div>
        </div>
        <div className="flex items-center">
          <Phone size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Phone:</div>
            <div>{phone}</div>
          </div>
        </div>
        <div className="flex items-center">
          <Mail size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Email:</div>
            <div>{email}</div>
          </div>
        </div>
        <div className="flex items-center">
          <Globe size={20} className="mr-2 text-green-500" />
          <div>
            <div className="text-sm text-gray-600">Website:</div>
            <div>{website}</div>
          </div>
        </div>
      </div>
      <button className="w-full bg-green-500 text-white py-2 rounded mt-6 hover:bg-green-600 transition duration-300">
        Buy Ticket
      </button>
    </div>
  );
}
