import React, { useState } from 'react';
import { Plus, Minus, Star, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function DishCard({ dish }) {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const [imageError, setImageError] = useState(false);

  // Find if dish is in cart
  const cartItem = cartItems.find((item) => item.id === dish.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Image Container with Fallback */}
      <div className="relative h-48 w-full overflow-hidden bg-stone-100">
        {!imageError && dish.image ? (
          <img
            src={dish.image}
            alt={dish.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest-800 to-forest-950 flex flex-col items-center justify-center p-4 text-center">
            <UtensilsCrossed className="w-8 h-8 text-amber-400/80 mb-2" />
            <span className="text-white text-sm font-semibold font-serif">
              {dish.name}
            </span>
            <span className="text-stone-300 text-xs mt-1">Karishma Valley Special</span>
          </div>
        )}

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2 py-1 rounded-md shadow-xs flex items-center gap-1.5">
          <span
            className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
              dish.isVeg
                ? 'border-emerald-600'
                : 'border-red-600'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                dish.isVeg ? 'bg-emerald-600' : 'bg-red-600'
              }`}
            />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-700">
            {dish.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>

        {/* Rating Badge if available */}
        {dish.rating && (
          <div className="absolute top-3 right-3 bg-forest-950/85 backdrop-blur-xs text-amber-300 text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
            <Star className="w-3 h-3 fill-amber-300" />
            <span>{dish.rating}</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif font-bold text-lg text-forest-950 group-hover:text-amber-800 transition-colors leading-snug">
              {dish.name}
            </h3>
            <span className="text-forest-900 font-bold text-base shrink-0 font-sans">
              ₹{dish.price}
            </span>
          </div>

          <p className="text-stone-500 text-xs leading-relaxed line-clamp-2 mb-3">
            {dish.description}
          </p>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {dish.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-stone-100 text-stone-600 text-[11px] font-medium px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action / Quantity Controls */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-400 font-medium">
            Freshly Prepared
          </span>

          {quantity > 0 ? (
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-xl px-2 py-1 shadow-2xs">
              <button
                onClick={() => updateQuantity(dish.id, quantity - 1)}
                className="w-7 h-7 rounded-lg bg-white text-amber-800 hover:bg-amber-100 flex items-center justify-center transition-colors shadow-2xs"
                aria-label={`Decrease ${dish.name} quantity`}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-bold text-sm text-amber-900 min-w-5 text-center">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(dish.id, quantity + 1)}
                className="w-7 h-7 rounded-lg bg-amber-600 text-white hover:bg-amber-700 flex items-center justify-center transition-colors shadow-2xs"
                aria-label={`Increase ${dish.name} quantity`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(dish, 1)}
              className="inline-flex items-center gap-1.5 bg-forest-900 hover:bg-forest-800 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-2xs hover:shadow transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

