import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Mail, ShieldAlert, ArrowRight, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { RESTAURANT } from '../data/restaurant';
import SeoMeta from '../components/SeoMeta';

export default function OwnerLoginPage() {
  const [email, setEmail] = useState(RESTAURANT.demoCredentials.email);
  const [password, setPassword] = useState(RESTAURANT.demoCredentials.password);
  const [errorMessage, setErrorMessage] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect to dashboard
  const destination = location.state?.from?.pathname || '/owner-dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const res = login(email, password);
    if (res.success) {
      navigate(destination, { replace: true });
    } else {
      setErrorMessage(res.error || 'Authentication failed');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-stone-100/60">
      <SeoMeta title="Owner Login (Demo)" />

      <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-forest-950 text-white p-8 text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-2xl font-bold tracking-tight">
            Owner Management Portal
          </h1>
          <p className="text-stone-300 text-xs">
            Karishma Valley Restaurant Administration
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Demo Helper Banner with exact credentials */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-800">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Demo Credentials (Pre-filled)</span>
            </div>
            <p className="leading-relaxed">
              This is a client-side demo authentication system. Use the demo credentials below to log into the owner management dashboard:
            </p>
            <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200/70 font-mono text-[11px] space-y-1">
              <div>Email: <strong>{RESTAURANT.demoCredentials.email}</strong></div>
              <div>Password: <strong>{RESTAURANT.demoCredentials.password}</strong></div>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Owner Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-forest-900 hover:bg-forest-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Log In to Dashboard</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </form>

          <div className="text-center pt-2">
            <Link
              to="/"
              className="text-xs text-stone-500 hover:text-stone-800 underline transition-colors"
            >
              ← Return to Restaurant Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

