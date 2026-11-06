import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id || null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-stone-200/90 rounded-2xl bg-white overflow-hidden transition-all shadow-2xs hover:shadow-xs"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden focus:bg-stone-50"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-stone-900 text-sm sm:text-base flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-forest-700 shrink-0" />
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-forest-800' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

