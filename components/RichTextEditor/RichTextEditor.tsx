'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  return (
    <div className="relative">
      <style jsx global>{`
        .quill {
          background-color: white;
        }
        
        .dark .quill {
          background-color: rgb(30 41 59 / 0.6);
        }

        .dark .ql-toolbar {
          background-color: rgb(30 41 59 / 0.8);
          border-color: rgb(55 65 81);
        }

        .dark .ql-container {
          border-color: rgb(55 65 81);
        }

        .dark .ql-editor {
          color: rgb(229 231 235);
          background-color: rgb(30 41 59 / 0.6);
        }

        .dark .ql-editor.ql-blank::before {
          color: rgb(156 163 175);
        }

        .dark .ql-snow.ql-toolbar button,
        .dark .ql-snow .ql-toolbar button {
          color: rgb(229 231 235);
        }

        .dark .ql-snow.ql-toolbar button:hover,
        .dark .ql-snow .ql-toolbar button:hover,
        .dark .ql-snow.ql-toolbar button.ql-active,
        .dark .ql-snow .ql-toolbar button.ql-active {
          color: rgb(96 165 250);
        }

        .dark .ql-snow.ql-toolbar button:hover .ql-stroke,
        .dark .ql-snow .ql-toolbar button:hover .ql-stroke,
        .dark .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .dark .ql-snow .ql-toolbar button.ql-active .ql-stroke {
          stroke: rgb(96 165 250);
        }

        .dark .ql-snow .ql-stroke {
          stroke: rgb(229 231 235);
        }

        .dark .ql-snow .ql-picker {
          color: rgb(229 231 235);
        }

        .dark .ql-snow .ql-picker-options {
          background-color: rgb(30 41 59);
          border-color: rgb(55 65 81);
        }
      `}</style>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="min-h-[400px]"
      />
    </div>
  );
}

export default React.memo(RichTextEditor);
