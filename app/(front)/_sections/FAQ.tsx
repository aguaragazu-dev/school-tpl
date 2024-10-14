'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "I don't know What should I write here?",
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon.',
  },
  {
    id: 2,
    question: "I don't know What should I write here?",
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid.',
  },
  {
    id: 3,
    question: "I don't know What should I write here?",
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-3xl font-bold mb-6">
        FREQUENTLY ASK <span className="text-green-500">QUESTION</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded-lg">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openId === faq.id ? (
                <Minus size={20} className="text-green-500" />
              ) : (
                <Plus size={20} className="text-green-500" />
              )}
            </button>
            {openId === faq.id && (
              <div className="p-4 pt-0">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
