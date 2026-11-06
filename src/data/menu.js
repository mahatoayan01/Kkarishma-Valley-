/**
 * Karishma Valley Restaurant - Menu Data
 * 
 * NOTE: Dishes and prices sourced from verified delivery and dineout platforms (Swiggy, Magicpin, Dineout).
 * Visible disclaimer included in UI: "Sample menu for demo – items and prices to be updated by the owner."
 */

export const MENU_DISCLAIMER = "Sample menu for demo – items and prices to be updated by the owner.";

export const CATEGORIES = [
  { id: "all", name: "All Dishes" },
  { id: "tandoori-starters", name: "Tandoori & Starters" },
  { id: "mutton-chicken", name: "Chicken & Mutton Mains" },
  { id: "veg-gravies", name: "Vegetarian Gravies" },
  { id: "rice-breads", name: "Rice & Tandoori Breads" },
  { id: "chinese", name: "Chinese & Sichuan" },
  { id: "beverages", name: "Beverages & Desserts" },
];

export const MENU_ITEMS = [
  // --- Tandoori & Starters ---
  {
    id: "dish-1",
    name: "Chicken Tikka",
    category: "tandoori-starters",
    price: 299,
    isVeg: false,
    isPopular: true,
    rating: 4.8,
    description: "Tender boneless chicken morsels marinated in spiced curd, ginger, garlic, and slow-roasted in the clay tandoor.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    tags: ["Chef Special", "Tandoor"]
  },
  {
    id: "dish-2",
    name: "Afghani Paneer Tikka",
    category: "tandoori-starters",
    price: 289,
    isVeg: true,
    isPopular: true,
    rating: 4.7,
    description: "Cubes of fresh cottage cheese marinated in a rich, creamy cashew-cream blend with subtle aromatic spices.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    tags: ["Creamy", "Mild Spice"]
  },
  {
    id: "dish-3",
    name: "Kalmi Kabab",
    category: "tandoori-starters",
    price: 229,
    isVeg: false,
    isPopular: true,
    rating: 4.9,
    description: "Succulent chicken drumsticks steeped in a mughlai marinade of roasted spices, broiled over charcoal.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    tags: ["Patron Favourite", "Crisp & Juicy"]
  },
  {
    id: "dish-4",
    name: "Mushroom Tikka",
    category: "tandoori-starters",
    price: 239,
    isVeg: true,
    isPopular: false,
    rating: 4.6,
    description: "Plump button mushrooms skewered with onions and bell peppers, tossed in spicy tikka marinade and charred.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegetarian", "Smoky"]
  },
  {
    id: "dish-5",
    name: "Badami Seekh Kabab",
    category: "tandoori-starters",
    price: 220,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Delicately spiced vegetable mince infused with crushed almonds and herbs, roasted to golden perfection on skewers.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    tags: ["Nutty", "Gourmet"]
  },
  {
    id: "dish-6",
    name: "Lasooni Chicken Tikka",
    category: "tandoori-starters",
    price: 299,
    isVeg: false,
    isPopular: false,
    rating: 4.7,
    description: "Chicken chunks infused with robust roasted garlic, green chili paste, and freshly ground garam masala.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    tags: ["Garlic Aroma", "Medium Spice"]
  },

  // --- Chicken & Mutton Mains ---
  {
    id: "dish-7",
    name: "Mutton Ghee Roast",
    category: "mutton-chicken",
    price: 379,
    isVeg: false,
    isPopular: true,
    rating: 4.9,
    description: "Signature coastal delicacy. Prime bone-in mutton slow-cooked in pure aromatic desi ghee with a fiery red chili paste.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    tags: ["Best Seller", "Coastal Specialty"]
  },
  {
    id: "dish-8",
    name: "Chicken Tikka Masala",
    category: "mutton-chicken",
    price: 329,
    isVeg: false,
    isPopular: true,
    rating: 4.8,
    description: "Smoky tandoori chicken tikka pieces simmered in a luscious tomato, onion, and butter gravy with kasuri methi.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    tags: ["Crowd Favourite", "Rich Gravy"]
  },
  {
    id: "dish-9",
    name: "Mutton Rogan Josh",
    category: "mutton-chicken",
    price: 409,
    isVeg: false,
    isPopular: false,
    rating: 4.7,
    description: "Kashmiri style aromatic tender mutton braised in browned onions, yogurt, fennel seeds, and whole spices.",
    image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?auto=format&fit=crop&w=600&q=80",
    tags: ["Traditional", "Hearty"]
  },
  {
    id: "dish-10",
    name: "Mutton Pepper Fry",
    category: "mutton-chicken",
    price: 369,
    isVeg: false,
    isPopular: false,
    rating: 4.7,
    description: "South Indian country-style mutton pan-fried with freshly crushed black peppercorns, curry leaves, and green chillies.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=600&q=80",
    tags: ["Spicy Pepper", "Semi-Dry"]
  },

  // --- Vegetarian Gravies ---
  {
    id: "dish-11",
    name: "Malai Kofta",
    category: "veg-gravies",
    price: 249,
    isVeg: true,
    isPopular: true,
    rating: 4.8,
    description: "Melt-in-mouth cottage cheese and potato dumplings bathed in a velvety golden cashew and melon seed cream gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    tags: ["Rich & Creamy", "Classic"]
  },
  {
    id: "dish-12",
    name: "Dal Tadka",
    category: "veg-gravies",
    price: 179,
    isVeg: true,
    isPopular: false,
    rating: 4.6,
    description: "Yellow lentils tempered with cumin, whole dried Kashmiri red chillies, minced garlic, and aromatic clarified butter.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    tags: ["Comfort Food", "Garlic Tadka"]
  },
  {
    id: "dish-13",
    name: "Aloo Gobi Masala",
    category: "veg-gravies",
    price: 209,
    isVeg: true,
    isPopular: false,
    rating: 4.4,
    description: "Homestyle stir-fried potatoes and fresh cauliflower florets braised in ginger, turmeric, and spiced tomato onion masala.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    tags: ["Homestyle", "Medium Spice"]
  },

  // --- Rice & Breads ---
  {
    id: "dish-14",
    name: "Ghee Rice",
    category: "rice-breads",
    price: 180,
    isVeg: true,
    isPopular: true,
    rating: 4.8,
    description: "Fragrant long-grain basmati rice cooked in pure desi cow ghee with whole spices, topped with golden fried cashews and shallots.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    tags: ["Aromatic", "South Specialty"]
  },
  {
    id: "dish-15",
    name: "Dal Khichidi",
    category: "rice-breads",
    price: 200,
    isVeg: true,
    isPopular: false,
    rating: 4.7,
    description: "Comforting pot-cooked rice and split moong lentils tempered with cumin, garlic, and hing, served with roasted papad.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    tags: ["Comforting", "Mild"]
  },
  {
    id: "dish-16",
    name: "Butter Naan",
    category: "rice-breads",
    price: 50,
    isVeg: true,
    isPopular: false,
    rating: 4.7,
    description: "Fluffy leavened flatbread baked in the clay tandoor and brushed generously with fresh salted butter.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    tags: ["Tandoor Baked"]
  },
  {
    id: "dish-17",
    name: "Tandoori Roti",
    category: "rice-breads",
    price: 30,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Traditional whole wheat flour flatbread cooked over charcoal heat in our open tandoor oven.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    tags: ["Whole Wheat"]
  },

  // --- Chinese & Sichuan ---
  {
    id: "dish-18",
    name: "Mushroom Schezwan Fried Rice",
    category: "chinese",
    price: 210,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Wok-tossed rice with fresh button mushrooms, bell peppers, spring onions, and spicy house-made Sichuan paste.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    tags: ["Wok Fried", "Spicy"]
  },
  {
    id: "dish-19",
    name: "Chilli Chicken",
    category: "chinese",
    price: 279,
    isVeg: false,
    isPopular: true,
    rating: 4.8,
    description: "Crispy battered chicken nuggets tossed with crunchy green capsicum, onion chunks, and dark soya chilli reduction.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
    tags: ["Indo-Chinese", "Party Starter"]
  },

  // --- Beverages & Desserts ---
  {
    id: "dish-20",
    name: "Fresh Lime Soda",
    category: "beverages",
    price: 70,
    isVeg: true,
    isPopular: false,
    rating: 4.6,
    description: "Chilled sparkling soda with freshly squeezed lime juice, available sweet, salted, or mixed.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    tags: ["Refreshing", "Chilled"]
  },
  {
    id: "dish-21",
    name: "Gulab Jamun (2 Pcs)",
    category: "beverages",
    price: 90,
    isVeg: true,
    isPopular: true,
    rating: 4.8,
    description: "Warm, soft fried khoya dumplings steeped in aromatic cardamom, rose water, and saffron sugar syrup.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=600&q=80",
    tags: ["Sweet Ending", "Hot"]
  }
];

