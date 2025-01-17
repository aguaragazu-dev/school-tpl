'use client';

import DOMPurify from 'isomorphic-dompurify';

interface RichContentProps {
  content: string;
  className?: string;
}

export function RichContent({ content, className = '' }: RichContentProps) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div 
      className={`prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
    />
  );
}
