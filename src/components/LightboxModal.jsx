import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function LightboxModal({ items, activeIndex, onClose, onNavigate }) {
  if (activeIndex === null || activeIndex === undefined || !items[activeIndex]) {
    return null;
  }

  const currentItem = items[activeIndex];

  // Handle ESC and Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-hidden"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 sm:left-6 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        className="absolute right-4 sm:right-6 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content wrapper */}
      <div
        className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[72vh] overflow-hidden rounded-2xl shadow-2xl bg-stone-900 border border-white/10">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-96 h-64 bg-forest-900 flex flex-col items-center justify-center p-6 text-center text-white"
          >
            <ImageIcon className="w-12 h-12 text-amber-400 mb-2" />
            <p className="font-serif font-bold text-lg">{currentItem.title}</p>
            <p className="text-xs text-stone-300 mt-1">{currentItem.fallbackText}</p>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-4 text-white max-w-xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2.5 py-0.5 rounded-full">
              {currentItem.category}
            </span>
            <span className="text-xs text-stone-400">
              {activeIndex + 1} of {items.length}
            </span>
          </div>
          <h4 className="font-serif text-lg font-bold">{currentItem.title}</h4>
          <p className="text-sm text-stone-300 mt-1 font-light leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

