import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Car, Phone, ShieldCheck, Info } from 'lucide-react';
import { RESTAURANT } from '../data/restaurant';
import SeoMeta from '../components/SeoMeta';

export default function LocationPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Karishma+Valley+Restaurant+Banashankari+Bengaluru`;

  return (
    <div className="pb-20">
      <SeoMeta
        title="Location & Directions"
        description="Find Karishma Valley Restaurant in Banashankari 6th Stage, Lingadheeranahalli, Bengaluru. Keyless map, driving directions, parking details, and hours."
      />

      {/* Header */}
      <div className="bg-forest-950 text-white py-12 sm:py-16 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Visit Our Garden Sanctuary
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
            Location & Directions
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-light">
            Conveniently situated along 80 Feet Road in Banashankari 6th Stage (Lingadheeranahalli), Bengaluru with ample free parking.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Map Container (col 12 or 8) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 sm:p-6 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-forest-950">
                    Interactive Map Embed
                  </h3>
                  <p className="text-xs text-stone-500">
                    Keyless standard Google Maps live viewport
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={RESTAURANT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-forest-900 hover:bg-forest-800 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Keyless Google Maps Iframe */}
            <div className="relative w-full h-[450px] sm:h-[500px] bg-stone-100">
              <iframe
                title="Karishma Valley Restaurant Google Maps Location"
                src={RESTAURANT.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Details Sidebar (col 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-forest-950 border-b border-stone-100 pb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Exact Address</span>
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed font-medium">
                {RESTAURANT.address}
              </p>

              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100 text-xs space-y-1.5 text-stone-600">
                <p><strong>Landmark:</strong> {RESTAURANT.landmark}</p>
                <p><strong>Area:</strong> {RESTAURANT.shortAddress}</p>
                <p><strong>PIN Code:</strong> {RESTAURANT.pincode}</p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-forest-700" />
                  <span>Call Us: {RESTAURANT.phone}</span>
                </a>
              </div>
            </div>

            {/* Parking & Accessibility Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-forest-950 border-b border-stone-100 pb-3 flex items-center gap-2">
                <Car className="w-4 h-4 text-emerald-600" />
                <span>Parking & Facility Info</span>
              </h3>
              <ul className="text-xs text-stone-600 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                  <span><strong>Dedicated Parking:</strong> Ample, spacious free parking on-site for cars and two-wheelers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                  <span><strong>Private Thatched Cabins:</strong> Family cabins set along open garden pathways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                  <span><strong>Nature & Pet Friendly:</strong> Peaceful surrounding featuring free-roaming ducks and rabbits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                  <span><strong>BYOL Policy:</strong> Customers are permitted to bring their own beverages.</span>
                </li>
              </ul>
            </div>

            {/* Hours Summary Card */}
            <div className="bg-forest-900 text-white rounded-3xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operating Timings</span>
              </div>
              <h4 className="font-serif text-xl font-bold">Open Everyday</h4>
              <p className="text-stone-300 text-xs leading-relaxed">
                Monday to Sunday: <strong>12:30 PM to 11:00 PM</strong> without mid-day closure.
              </p>
              <div className="pt-2">
                <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  Kitchen Open Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

