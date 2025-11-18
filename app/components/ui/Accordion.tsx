'use client';

import { useState, ReactNode } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="text-lg font-semibold text-gray-900">
                {item.title}
              </span>
              <span
                className={`text-2xl text-blue-600 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
