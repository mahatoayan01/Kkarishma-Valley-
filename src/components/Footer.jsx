import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  UtensilsCrossed,
  ShieldCheck,
  Heart,
  MessageCircle
} from 'lucide-react';
import { RESTAURANT } from '../data/restaurant';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-stone-300 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-900">
          {/* Col 1: About & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Karishma Valley
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              {RESTAURANT.shortDescription}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium pt-1">
              <span>★ {RESTAURANT.rating} / 5.0</span>
              <span>•</span>
              <span>{RESTAURANT.reviewCount}+ Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-white transition-colors">
                  Home & Ambience
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-stone-400 hover:text-white transition-colors">
                  Full Food Menu & Online Ordering
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-stone-400 hover:text-white transition-colors">
                  Location & Driving Directions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-white transition-colors">
                  Contact & Table Reservation
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-stone-400 hover:text-white transition-colors">
                  View Demo Cart / Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Reach */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Opening Hours
            </h3>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Monday to Sunday</p>
                  <p className="text-xs text-stone-400">12:30 PM to 11:00 PM</p>
                  <p className="text-[11px] text-emerald-400 mt-1">Open All 7 Days</p>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-xs text-stone-400 font-medium">Cuisines Served:</p>
                <p className="text-xs text-stone-300 mt-0.5">
                  North Indian, Tandoori Grills, Chinese, Coastal & Mutton Gravies
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Address & Direct Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Contact & Address
            </h3>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-stone-300">
                  {RESTAURANT.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="text-white hover:text-amber-300 transition-colors font-medium text-sm"
                >
                  {RESTAURANT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${RESTAURANT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-medium inline-flex items-center gap-1"
                >
                  WhatsApp: {RESTAURANT.whatsapp}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={RESTAURANT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline font-medium"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} {RESTAURANT.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-forest-900 text-stone-300 px-2 py-0.5 rounded border border-forest-800">
              Demo website built for presentation
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-500">
              Designed with care & authentic details
            </span>
            <Link
              to="/owner-login"
              className="text-stone-400 hover:text-amber-400 transition-colors underline font-medium flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Owner Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

