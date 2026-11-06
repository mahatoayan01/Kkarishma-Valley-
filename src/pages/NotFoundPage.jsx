import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ArrowLeft, Home } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center animate-fadeIn">
      <SeoMeta title="Page Not Found (404)" />

      <div className="max-w-md bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <UtensilsCrossed className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-forest-950 mt-3">
            Page Not Found
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            The page you are looking for doesn't exist or has moved. Let's get you back to the garden menu.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

