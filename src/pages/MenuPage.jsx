import React, { useState, useMemo } from 'react';
import { Search, Filter, UtensilsCrossed, AlertCircle, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, MENU_ITEMS, MENU_DISCLAIMER } from '../data/menu';
import { RESTAURANT } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import DishCard from '../components/DishCard';
import SeoMeta from '../components/SeoMeta';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'
  const { totalItemCount, subtotal } = useCart();

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Diet match
      const matchesDiet =
        dietFilter === 'all' ||
        (dietFilter === 'veg' && item.isVeg) ||
        (dietFilter === 'nonveg' && !item.isVeg);

      // Search match
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <div className="pb-20">
      <SeoMeta
        title="Menu & Online Order"
        description="Explore the authentic menu of Karishma Valley Restaurant: Tandoori starters, Mutton Ghee Roast, Chicken Tikka Masala, and rich vegetarian curries in Bengaluru."
      />

      {/* Hero Header */}
      <div className="bg-forest-950 text-white py-12 sm:py-16 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Clay Tandoor & Curries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
            Karishma Valley Food Menu
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-light">
            Sizzling tandoori kebabs, slow-braised meat gravies, aromatic biryanis, and comforting vegetarian dishes prepared fresh for dine-in, takeaway, or doorstep delivery.
          </p>

          {/* Prominent Mandatory Sample Menu Disclaimer */}
          <div className="mt-6 inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/40 text-amber-200 px-4 py-2 rounded-xl text-xs max-w-xl mx-auto">
            <AlertCircle className="w-4 h-4 text-amber-300 shrink-0" />
            <span>{MENU_DISCLAIMER}</span>
          </div>
        </div>
      </div>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs py-3.5 px-4 sm:px-6 lg:px-8 transition-all">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Tikka, Ghee Roast, Naan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 bg-stone-100 rounded-xl text-xs sm:text-sm border border-stone-200 focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-forest-200 focus:border-forest-600 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Diet Filter Controls */}
            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl self-start md:self-auto">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  dietFilter === 'all'
                    ? 'bg-white text-forest-950 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-xs font-bold'
                    : 'text-emerald-800 hover:text-emerald-950'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                <span>Pure Veg</span>
              </button>
              <button
                onClick={() => setDietFilter('nonveg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'nonveg'
                    ? 'bg-red-700 text-white shadow-xs font-bold'
                    : 'text-red-800 hover:text-red-950'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-300"></span>
                <span>Non-Veg</span>
              </button>
            </div>

            {/* Quick Cart Pill if Active */}
            {totalItemCount > 0 && (
              <Link
                to="/cart"
                className="hidden lg:inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-colors shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Checkout ({totalItemCount} items • ₹{subtotal})</span>
              </Link>
            )}
          </div>

          {/* Category Chips (Horizontal Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-forest-900 text-white shadow-xs font-bold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Item Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {filteredItems.length > 0 ? (
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
              <span>Showing <strong>{filteredItems.length}</strong> delicious dishes</span>
              {(selectedCategory !== 'all' || dietFilter !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setDietFilter('all');
                    setSearchQuery('');
                  }}
                  className="text-amber-700 hover:underline font-semibold"
                >
                  Reset all filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-stone-800">No dishes match your filter</h3>
            <p className="text-stone-500 text-xs mt-1">
              Try searching for something else or clear your active filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-forest-900 text-white rounded-xl text-xs font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

