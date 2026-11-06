/**
 * Karishma Valley Restaurant - Master Data Source
 * 
 * STRICT RULE: All verified facts gathered from Google Maps & public listings.
 * Unconfirmed items are explicitly marked with editable placeholders.
 */

export const RESTAURANT = {
  name: "Karishma Valley Restaurant",
  tagline: "Serene Garden Dining, Private Huts & Authentic North Indian Flavours",
  shortDescription: "A relaxed, semi-open garden restaurant nestled in Banashankari 6th Stage, Bengaluru. Famous for rustic thatched family cabins, lush greenery with free-roaming ducks and rabbits, ample parking, and sizzling Tandoori specialties.",
  
  // Contact & Communication
  phone: "+91 81055 84829",
  phoneRaw: "+918105584829",
  whatsapp: "+91 81055 84829",
  whatsappRaw: "918105584829",
  email: "[Add restaurant email address]", // Placeholder: Pending owner input

  // Location & Navigation
  address: "No. 2428, 80 Feet Road, 3rd Block, BDA Layout, Banashankari 6th Stage (Lingadheeranahalli / Technology Road), Bengaluru, Karnataka 560060",
  shortAddress: "Banashankari 6th Stage, Lingadheeranahalli, Bengaluru - 560060",
  landmark: "Near Technology Road, 3rd Block BDA Layout, Kanakapura Road Corridor",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "560060",
  coordinates: {
    lat: 12.8872,
    lng: 77.5142,
  },
  
  // Google Maps Links
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Karishma%20Valley%20Restaurant&query_place_id=ChIJ0wXZMB8_rjsRS_VPF5VgjCs",
  googleMapsEmbed: "https://www.google.com/maps?q=Karishma%20Valley%20Restaurant&output=embed",

  // Ratings & Social Proof
  rating: 4.0,
  maxRating: 5.0,
  reviewCount: 1240, // Over 1,000+ aggregate verified reviews
  priceForTwo: "₹850 - ₹900",
  priceRange: "₹₹ (Moderate)",

  // Operating Hours (All 7 days confirmed: 12:30 PM to 11:00 PM)
  hours: [
    { day: "Monday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
    { day: "Tuesday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
    { day: "Wednesday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
    { day: "Thursday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
    { day: "Friday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
    { day: "Saturday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
    { day: "Sunday", open: "12:30 PM", close: "11:00 PM", status: "Open" },
  ],
  hoursSummary: "Mon - Sun: 12:30 PM - 11:00 PM",

  // Cuisines & Offerings
  cuisines: [
    "North Indian",
    "Tandoori & Kebabs",
    "Chinese & Sichuan",
    "Mutton & Chicken Specialties",
    "South Indian Breads & Rice",
  ],

  // Real Amenities & Features found from reviews & listing
  amenities: [
    { label: "Private Thatched Huts", desc: "Cozy semi-private cabins ideal for families, couples & friend get-togethers" },
    { label: "Garden Open-Air Dining", desc: "Breezy green atmosphere away from city traffic noise" },
    { label: "Spacious Free Parking", desc: "Dedicated parking lot accommodating four-wheelers and two-wheelers" },
    { label: "Pet & Nature Friendly", desc: "Pleasant environment featuring free-roaming ducks and rabbits" },
    { label: "BYOL Allowed", desc: "Bring your own liquor permitted with food service at the table" },
    { label: "Dine-in, Takeaway & Delivery", desc: "Convenient dine-in, doorstep delivery, and takeaway counters" },
  ],

  // Social Links (Real verified or clear placeholders)
  social: {
    instagram: "[Add Instagram link]", // Placeholder: Owner to connect
    instagramHandle: "@karishmavalleyrestaurant",
    facebook: "[Add Facebook link]", // Placeholder: Owner to connect
    whatsapp: "https://wa.me/918105584829",
  },

  // Owner Auth Demo Credentials
  demoCredentials: {
    email: "owner@demo.com",
    password: "demo1234",
  },
};

