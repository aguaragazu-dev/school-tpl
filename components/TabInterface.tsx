'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const tabs = [
  { id: 'why-edulyn', label: 'Why Edulyn' },
  { id: 'our-mission', label: 'Our Mission' },
  { id: 'our-vision', label: 'Our Vision' },
  { id: 'our-ranking', label: 'Our Ranking' },
  { id: 'our-research', label: 'Our Research' },
];

const tabContent = {
  'our-ranking': {
    title: 'Our Ranking',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae? Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga ipsum quia debitis totam, tempore laudantium quasi dicta dolorem deleniti.`,
    bulletPoints: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.',
    ],
  },
  // Add content for other tabs as needed
};

export default function TabInterface() {
  const [activeTab, setActiveTab] = useState('our-ranking');

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/3 bg-gray-100">
        <ul className="py-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`w-full text-left px-6 py-3 focus:outline-none ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                → {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4">
          {tabContent[activeTab].title}
        </h2>
        <p className="text-gray-600 mb-4">{tabContent[activeTab].content}</p>
        <ul className="space-y-2">
          {tabContent[activeTab].bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-gray-600">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
