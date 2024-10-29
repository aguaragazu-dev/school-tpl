'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DismissibleCTAProps {
  message: string;
}

export default function DismissibleCTA({ message }: DismissibleCTAProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>{message}</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-blue-700"
        >
          <X size={20} />
        </Button>
      </div>
    </div>
  );
}