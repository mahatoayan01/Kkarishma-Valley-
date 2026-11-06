import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT } from '../data/restaurant';
import { useCart } from '../context/CartContext';

export default function FloatingActions() {
  const { totalItemCount } = useCart();
  const waUrl = `https://wa.me/${RESTAURANT.whatsappRaw}?text=${encodeURIComponent(
    'Hello Karishma Valley Restaurant! I would like to inquire about dining / table booking / ordering.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating Cart Indicator (if items exist) */}
      {totalItemCount > 0 && (
        <Link
          to="/cart"
          className="pointer-events-auto bg-amber-600 hover:bg-amber-700 text-white px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 animate-bounce"
          aria-label="View current cart"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Cart ({totalItemCount})</span>
        </Link>
      )}

      {/* Action Buttons Stack */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        {/* Call Button */}
        <a
          href={`tel:${RESTAURANT.phoneRaw}`}
          className="bg-forest-900 hover:bg-forest-800 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 border-2 border-white/20"
          title={`Call ${RESTAURANT.phone}`}
          aria-label="Call Restaurant"
        >
          <Phone className="w-5 h-5 text-amber-400" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white w-13 h-13 rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 border-2 border-white/30"
          title="Chat on WhatsApp"
          aria-label="Chat with Restaurant on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}

