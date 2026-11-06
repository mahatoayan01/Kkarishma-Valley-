import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ExternalLink,
  Instagram,
  Facebook
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT } from '../data/restaurant';
import SeoMeta from '../components/SeoMeta';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.trim().length < 10)
      errs.phone = 'Valid phone number is required';
    if (!formData.message.trim()) errs.message = 'Please enter your message or inquiry';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="pb-20">
      <SeoMeta
        title="Contact & Inquiries"
        description="Contact Karishma Valley Restaurant in Banashankari 6th Stage, Bengaluru. Phone: +91 81055 84829, WhatsApp, address, inquiry form, and table bookings."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-12 sm:py-16 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
            We are Here to Help
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
            Get in Touch
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-light">
            Questions regarding private cabin reservations, group celebrations, catering, or takeaway orders? Reach out via phone, WhatsApp, or send an inquiry below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Touchpoints */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-forest-950 border-b border-stone-100 pb-4">
                Direct Contact Points
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-stone-500 block">
                    Phone Inquiries & Orders
                  </span>
                  <a
                    href={`tel:${RESTAURANT.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-forest-950 hover:text-amber-700 transition-colors"
                  >
                    {RESTAURANT.phone}
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">Available 12:30 PM - 11:00 PM</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-stone-500 block">
                    Direct WhatsApp Desk
                  </span>
                  <a
                    href={`https://wa.me/${RESTAURANT.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1"
                  >
                    {RESTAURANT.whatsapp}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">Instant booking & menu assistance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-stone-500 block">
                    Official Email
                  </span>
                  <span className="text-sm font-medium text-stone-800 italic">
                    {RESTAURANT.email}
                  </span>
                  <p className="text-[11px] text-amber-700 mt-0.5 font-medium">
                    * Placeholder pending restaurant confirmation
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0 border border-forest-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-stone-500 block">
                    Physical Address
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed mt-0.5">
                    {RESTAURANT.address}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Landmark: {RESTAURANT.landmark}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 text-xs">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>{RESTAURANT.social.instagram}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 text-xs">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>{RESTAURANT.social.facebook}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Shortcut to Table Booking */}
            <div className="bg-amber-600 text-white rounded-3xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Need a Table Instead?</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mt-1">
                Book a Thatched Hut Directly
              </h3>
              <p className="text-amber-100 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Skip the inquiry form and jump directly to our interactive table reservation form.
              </p>
              <Link
                to="/#book-table"
                className="mt-4 inline-flex items-center gap-2 bg-white text-forest-950 hover:bg-stone-100 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
              >
                <span>Go to Table Booking</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Demo Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm">
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                Send Us a Note
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1 mb-2">
                Customer Inquiry Form
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mb-8">
                Send a question or feedback directly to our team. (Demo only – form submissions display an immediate confirmation).
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding "<strong>{formData.subject}</strong>" has been registered in demo mode.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-forest-900 text-white rounded-xl text-xs font-semibold hover:bg-forest-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anjali Nair"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
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
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="anjali@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Subject / Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-forest-600 focus:ring-2 focus:ring-forest-200 bg-white"
                      >
                        <option value="General Inquiry">General Dining Inquiry</option>
                        <option value="Group Celebration">Birthday / Group Celebration</option>
                        <option value="Thatched Hut Booking">Thatched Hut Booking Question</option>
                        <option value="Catering / Bulk Order">Bulk Takeaway / Food Catering</option>
                        <option value="Feedback">Feedback on Food / Service</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest-900 hover:bg-forest-800 text-white font-semibold py-3 px-6 rounded-xl shadow-sm hover:shadow transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Message (Demo)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

