'use client';

import { useState } from 'react';

export default function ContactCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, email, subject });
    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
  };

  return (
    <section className="bg-navy-blue py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          If You have Any Question Please Don't Hesitate To Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="bg-navy-blue-light text-white placeholder-gray-400 py-3 px-4 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-navy-blue-light text-white placeholder-gray-400 py-3 px-4 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter Subject"
              className="bg-navy-blue-light text-white placeholder-gray-400 py-3 px-4 rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-8 rounded hover:bg-green-600 transition duration-300"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
