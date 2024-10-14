import React from 'react';

type RecentItem = {
  name: string;
  time: string;
};

type RecentSectionProps = {
  title: string;
  items: RecentItem[];
};

export default function RecentSection({ title, items }: RecentSectionProps) {
  return (
    <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
      <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
        <div className="mx-5 w-full">
          <h4 className="text-2xl font-semibold text-gray-700">{title}</h4>
          <div className="mt-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <span className="text-gray-600">{item.name}</span>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
