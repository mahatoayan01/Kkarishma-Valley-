import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Clock,
  MapPin,
  UtensilsCrossed,
  ArrowRight,
  Shield,
  Sparkles,
  Phone,
  MessageCircle,
  ExternalLink,
  Instagram,
  Check,
  ChevronRight,
  Heart,
  Calendar
} from 'lucide-react';
import { RESTAURANT } from '../data/restaurant';
import { MENU_ITEMS } from '../data/menu';
import { SPECIAL_OFFERS } from '../data/offers';
import { GALLERY_ITEMS } from '../data/gallery';
import { REVIEWS_DATA } from '../data/reviews';
import { INSTAGRAM_DATA } from '../data/instagram';
import DishCard from '../components/DishCard';
import BookingForm from '../components/BookingForm';
import FaqAccordion from '../components/FaqAccordion';
import LightboxModal from '../components/LightboxModal';
import SeoMeta from '../components/SeoMeta';

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter 6 popular dishes for the homepage
  const popularDishes = MENU_ITEMS.filter((item) => item.isPopular).slice(0, 6);

  // Identify today's day for opening hours highlight
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[new Date().getDay()];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      <SeoMeta
        title="Home"
        description="Karishma Valley Restaurant in Banashankari 6th Stage, Bengaluru. Experience garden dining, private thatched huts, and rich North Indian & Tandoori cuisines."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center bg-forest-950 overflow-hidden">
        {/* Background visual with subtle gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
            alt="Karishma Valley Garden Restaurant Ambience"
            className="w-full h-full object-cover object-center opacity-25 scale-105 transform animate-subtleZoom"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            {/* Real Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 rounded-full px-4 py-1.5 backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-bold text-sm">{RESTAURANT.rating}</span>
                <span className="text-amber-200/70 text-xs">/ {RESTAURANT.maxRating}</span>
              </div>
              <span className="text-stone-400 text-xs">•</span>
              <span className="text-stone-200 text-xs font-medium">
                {RESTAURANT.reviewCount}+ Verified Google Ratings
              </span>
            </div>

            {/* Restaurant Title & Tagline */}
            <div className="space-y-3">
              <span className="text-amber-400 font-medium text-sm sm:text-base tracking-widest uppercase block">
                Banashankari 6th Stage • Bengaluru
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight sm:leading-none">
                Karishma Valley <br />
                <span className="text-amber-300 font-normal italic">Restaurant</span>
              </h1>
            </div>

            <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {RESTAURANT.tagline}. Savor authentic Tandoori kebabs, slow-cooked Mutton Ghee Roast, and rich curries in cozy private thatched huts surrounded by nature.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-stone-300 font-medium">
              <span className="bg-forest-900/80 border border-forest-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Private Thatched Cabins
              </span>
              <span className="bg-forest-900/80 border border-forest-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Free On-Site Parking
              </span>
              <span className="bg-forest-900/80 border border-forest-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> BYOL Allowed
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/menu"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all text-sm flex items-center gap-2 group"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/menu"
                className="bg-forest-800/90 hover:bg-forest-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-forest-600/60 transition-all text-sm flex items-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>Order Online</span>
              </Link>

              <a
                href="#book-table"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all text-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book a Table</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (Built on Real Verified Facts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-forest-800 bg-forest-100/80 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Authentic Atmosphere</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 leading-tight">
              A Peaceful Valley Escape for Families, Friends & Foodies
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Located on 80 Feet Road in Banashankari 6th Stage (Lingadheeranahalli), <strong>Karishma Valley Restaurant</strong> provides a rare open-air dining sanctuary away from the bustle of central Bangalore.
            </p>

            <p className="text-stone-600 text-base leading-relaxed">
              Guests love our cluster of rustic thatched huts and private family cabins nestled within green grounds, where ducks and rabbits wander freely. Whether you are craving sizzling clay-tandoor kebabs, authentic Coastal Mutton Ghee Roast, or comforting dal and naan with friends, our garden setup is designed for leisurely celebrations.
            </p>

            {/* Real Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {RESTAURANT.amenities.slice(0, 4).map((amenity, idx) => (
                <div key={idx} className="bg-stone-50 border border-stone-200/80 p-4 rounded-xl">
                  <h4 className="font-semibold text-stone-900 text-sm">{amenity.label}</h4>
                  <p className="text-stone-500 text-xs mt-1">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1200&q=80"
                  alt="Karishma Valley Garden Thatched Huts"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-amber-400 flex items-center justify-center font-bold text-lg font-serif">
                    4.0★
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 text-sm">Loved by Patrons</h5>
                    <p className="text-stone-500 text-xs">Over 1,200 local reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR DISHES SECTION */}
      <section className="bg-stone-100/70 py-16 sm:py-24 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider block mb-1">
                From Our Clay Tandoor & Kitchen
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                Patron Favourites
              </h2>
              <p className="text-stone-600 text-sm mt-1.5 max-w-xl">
                Verified signature dishes praised in local reviews. Prepared fresh to order with authentic spices.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-forest-900 hover:text-amber-700 font-semibold text-sm transition-colors group"
            >
              <span>Explore All {MENU_ITEMS.length} Menu Items</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {popularDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span>View Full Menu & Order Online</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SPECIAL OFFERS (Explicitly Labeled Sample Offers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Promotions & Specials
          </span>
          <h2 className="font-serif text-3xl font-bold text-forest-950">
            Featured Specials
          </h2>
          <p className="text-stone-500 text-xs mt-1 italic">
            * Note: These are sample promotional offers for demonstration. Items and discounts can be configured by the restaurant owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border-2 border-dashed border-amber-300 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rotate-12 shadow-2xs">
                {offer.tag}
              </div>

              <div>
                <span className="text-xs font-bold text-forest-800 bg-forest-50 px-2.5 py-1 rounded-md">
                  {offer.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-forest-950 mt-3 mb-2">
                  {offer.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">
                  {offer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-semibold block">Demo Coupon</span>
                  <code className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {offer.code}
                  </code>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">
                  {offer.validity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PHOTO GALLERY WITH LIGHTBOX */}
      <section className="bg-forest-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Visual Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
              Atmosphere & Garden Dining
            </h2>
            <p className="text-stone-300 text-sm mt-2">
              Browse snapshots of our rustic thatched huts, sizzling clay-tandoor items, and serene open grounds. Click any photo to view full size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-forest-900 border border-white/10 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-full h-full bg-forest-900 flex flex-col items-center justify-center p-4 text-center"
                >
                  <UtensilsCrossed className="w-8 h-8 text-amber-400 mb-2" />
                  <span className="text-white text-sm font-semibold">{item.title}</span>
                  <span className="text-stone-400 text-xs mt-1">{item.fallbackText}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <LightboxModal
            items={GALLERY_ITEMS}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(newIndex) => setLightboxIndex(newIndex)}
          />
        </div>
      </section>

      {/* 6. TABLE BOOKING SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingForm />
      </section>

      {/* 7. OPENING HOURS (7 Days, Today Highlighted) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
                Operating Schedule
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                Opening Hours
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-emerald-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open Today ({todayName}): 12:30 PM - 11:00 PM</span>
            </div>
          </div>

          <div className="mt-6 divide-y divide-stone-100">
            {RESTAURANT.hours.map((schedule) => {
              const isToday = schedule.day.toLowerCase() === todayName.toLowerCase();
              return (
                <div
                  key={schedule.day}
                  className={`py-3.5 px-4 rounded-xl flex items-center justify-between text-sm transition-colors ${
                    isToday
                      ? 'bg-amber-50 font-semibold text-amber-950 border border-amber-200'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-24 sm:w-32">{schedule.day}</span>
                    {isToday && (
                      <span className="bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-md">
                        Today
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs sm:text-sm">
                    <span className="text-stone-600">
                      {schedule.open} – {schedule.close}
                    </span>
                    <span className="text-emerald-700 font-medium">Open</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS (Real Verified Reviews) */}
      <section className="bg-stone-100/70 py-16 sm:py-24 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
              Real Patron Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mt-1">
              Customer Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3 text-stone-600 text-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="font-bold text-stone-900">{REVIEWS_DATA.overallRating} out of 5</span>
              <span>•</span>
              <span>Based on {REVIEWS_DATA.totalReviews}+ online reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest-900 text-amber-400 font-bold flex items-center justify-center text-sm font-serif">
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">{review.author}</h4>
                        <span className="text-stone-400 text-xs">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic mb-4">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="text-emerald-700 font-medium">✓ Verified Reviewer</span>
                  <span className="text-stone-400">{review.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={REVIEWS_DATA.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-forest-900 border border-stone-300 px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition-colors"
            >
              <span>Read more reviews on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-amber-600" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM POSTS (Placeholder Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider block mb-1">
              Social Community
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest-950">
              Follow Us on Instagram
            </h2>
            <p className="text-stone-500 text-xs mt-1">
              Sample post preview tiles. Handle placeholder: {INSTAGRAM_DATA.handle} ({INSTAGRAM_DATA.placeholderNotice})
            </p>
          </div>

          <a
            href={INSTAGRAM_DATA.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Follow {INSTAGRAM_DATA.handle}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_DATA.posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-stone-200 border border-stone-200 shadow-2xs"
            >
              <img
                src={post.image}
                alt="Karishma Valley Instagram snapshot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white text-xs p-2 text-center">
                <Heart className="w-4 h-4 fill-red-500 text-red-500 mb-1" />
                <span className="font-semibold">{post.likes} likes</span>
                <span className="text-[10px] text-stone-300 mt-1 line-clamp-2 px-1">
                  {post.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="bg-stone-50 py-16 sm:py-24 border-y border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest-950 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Everything you need to know about dining, cabins, timings, and policies at Karishma Valley.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* 11. FINAL CALL-TO-ACTION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-forest-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Experience Countryside Garden Dining
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ready for Sizzling Kebabs & Peaceful Garden Vibes?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Order your favorite dishes online for doorstep delivery or takeaway, or reserve a private thatched hut for your next dinner gathering.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Link
                to="/menu"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Order Online Now</span>
              </Link>

              <a
                href="#book-table"
                className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-xs transition-all text-sm flex items-center gap-2 border border-white/20"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book a Table</span>
              </a>

              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="bg-transparent hover:bg-white/10 text-stone-200 font-semibold px-5 py-3 rounded-xl transition-all text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {RESTAURANT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

