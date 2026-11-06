import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { RESTAURANT } from '../data/restaurant';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '4',
    seatingPreference: 'Garden Thatched Hut',
    specialRequest: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.date) {
      errs.date = 'Reservation date is required';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setSubmittedBooking({ ...formData, referenceId: `TB-${Math.floor(1000 + Math.random() * 9000)}` });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '19:30',
      guests: '4',
      seatingPreference: 'Garden Thatched Hut',
      specialRequest: '',
    });
  };

  const getWhatsAppBookingUrl = () => {
    if (!submittedBooking) return '#';
    const message = `Hello Karishma Valley Restaurant!%0A%0A*Table Reservation Request (Ref: ${submittedBooking.referenceId})*%0A• Name: ${encodeURIComponent(submittedBooking.name)}%0A• Phone: ${encodeURIComponent(submittedBooking.phone)}%0A• Date: ${encodeURIComponent(submittedBooking.date)}%0A• Time: ${encodeURIComponent(submittedBooking.time)}%0A• Guests: ${encodeURIComponent(submittedBooking.guests)}%0A• Seating: ${encodeURIComponent(submittedBooking.seatingPreference)}%0A• Notes: ${encodeURIComponent(submittedBooking.specialRequest || 'None')}%0A%0APlease confirm availability for our table. Thank you!`;
    return `https://wa.me/${RESTAURANT.whatsappRaw}?text=${message}`;
  };

  return (
    <div id="book-table" className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden scroll-mt-24">
      <div className="bg-forest-900 text-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Garden & Hut Dining Experience</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
          Reserve a Table or Private Cabin
        </h3>
        <p className="text-stone-300 text-sm mt-1.5 max-w-xl">
          Enjoy peaceful dining in our rustic thatched huts or open lawn. Instant demo confirmation with direct WhatsApp reservation option.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {isSubmitted && submittedBooking ? (
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Booking Reference: {submittedBooking.referenceId}
              </span>
              <h4 className="font-serif text-2xl font-bold text-forest-950 mt-3">
                Table Reservation Received!
              </h4>
              <p className="text-stone-600 text-sm mt-1 max-w-md mx-auto">
                Thank you, <strong>{submittedBooking.name}</strong>. Your table for <strong>{submittedBooking.guests} guests</strong> on <strong>{submittedBooking.date}</strong> at <strong>{submittedBooking.time}</strong> ({submittedBooking.seatingPreference}) has been registered in demo mode.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-stone-600">
              <p><strong>Note:</strong> This is a front-end demo. No live server reservation was stored.</p>
              <p>To directly send this reservation to the restaurant's actual WhatsApp desk, click below:</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-300'
                      : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98450 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-300'
                      : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 transition-all ${
                      errors.date
                        ? 'border-red-400 focus:ring-red-300'
                        : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.date}
                  </p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Time Slot *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-200 focus:border-forest-600 bg-white"
                >
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="13:30">01:30 PM (Lunch)</option>
                  <option value="14:30">02:30 PM (Lunch)</option>
                  <option value="18:30">06:30 PM (Evening)</option>
                  <option value="19:30">07:30 PM (Dinner)</option>
                  <option value="20:30">08:30 PM (Dinner)</option>
                  <option value="21:30">09:30 PM (Dinner)</option>
                </select>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Guests *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-200 focus:border-forest-600 bg-white"
                >
                  <option value="2">2 Guests (Couple)</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests (Family)</option>
                  <option value="6">6 Guests (Hut Group)</option>
                  <option value="8">8 Guests (Large Cabin)</option>
                  <option value="10+">10+ Guests (Celebration)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Seating preference */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Seating Preference
                </label>
                <select
                  value={formData.seatingPreference}
                  onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-200 focus:border-forest-600 bg-white"
                >
                  <option value="Garden Thatched Hut">Garden Thatched Hut (Private)</option>
                  <option value="Family Cabin">Family Cabin (Semi-Enclosed)</option>
                  <option value="Open Lawn Seating">Open Lawn Seating (Under Trees)</option>
                  <option value="Any Available Table">First Available Table</option>
                </select>
              </div>

              {/* Special Request */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Special Request (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, High chair for child"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-200 focus:border-forest-600"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-forest-900 hover:bg-forest-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Confirm Table Reservation (Demo)</span>
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-2">
                Reservations are demo-only. WhatsApp link provided after submission to connect with restaurant staff.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

