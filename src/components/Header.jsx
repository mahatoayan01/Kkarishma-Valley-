import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X, Phone, UtensilsCrossed, Calendar } from 'lucide-react';
import { RESTAURANT } from '../data/restaurant';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/location', label: 'Location' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all shadow-sm">
      {/* Top micro announcement bar */}
      <div className="bg-forest-900 text-stone-200 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today: 12:30 PM - 11:00 PM
            </span>
            <span className="text-stone-400">|</span>
            <span className="text-stone-300">Banashankari 6th Stage, Bengaluru</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{RESTAURANT.phone}</span>
            </a>
            <span className="text-stone-500">|</span>
            <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-500/30">
              Demo Website
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-forest-900 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-forest-800 transition-colors">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-950 block group-hover:text-amber-700 transition-colors">
                Karishma Valley
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-stone-700 block">
                Restaurant & Garden Dining
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-forest-50 text-forest-900 font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-forest-900 hover:bg-stone-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-forest-900 hover:bg-forest-50 rounded-lg transition-colors"
            >
              Order Online
            </Link>

            <Link
              to="/cart"
              className="relative p-2.5 rounded-xl text-stone-700 hover:text-forest-900 hover:bg-stone-100 transition-colors"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scale">
                  {totalItemCount}
                </span>
              )}
            </Link>

            <a
              href="#book-table"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  // Let router handle home navigation with hash
                } else {
                  e.preventDefault();
                  document.getElementById('book-table')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/cart"
              onClick={closeMenu}
              className="relative p-2 text-stone-700 hover:text-forest-900 transition-colors"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-forest-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-forest-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-forest-50 text-forest-900 font-semibold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-2.5">
            <Link
              to="/menu"
              onClick={closeMenu}
              className="w-full text-center py-2.5 px-4 rounded-xl font-medium bg-forest-900 text-white hover:bg-forest-800 transition-colors"
            >
              Order Online / View Menu
            </Link>
            <Link
              to="/cart"
              onClick={closeMenu}
              className="w-full text-center py-2.5 px-4 rounded-xl font-medium bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Cart ({totalItemCount} items)</span>
            </Link>
            <div className="text-xs text-stone-500 text-center mt-2 flex items-center justify-center gap-2">
              <span>Open 12:30 PM - 11:00 PM</span>
              <span>•</span>
              <a href={`tel:${RESTAURANT.phoneRaw}`} className="text-forest-700 underline font-medium">
                {RESTAURANT.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

