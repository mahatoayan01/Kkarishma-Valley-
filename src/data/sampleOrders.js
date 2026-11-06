/**
 * Karishma Valley Restaurant - Sample Orders & Transaction History
 * 
 * Used for demo purposes in the Owner Dashboard.
 * Persisted and combined with user demo checkout orders in localStorage.
 */

export const SAMPLE_ORDERS = [
  {
    id: "KV-1021",
    customer: {
      name: "Rajesh Sharma",
      phone: "+91 98450 12345",
      address: "B-204, Prestige South Ridge, Banashankari 6th Stage",
    },
    items: [
      { name: "Chicken Tikka", quantity: 2, price: 299 },
      { name: "Butter Naan", quantity: 4, price: 50 },
      { name: "Chicken Tikka Masala", quantity: 1, price: 329 }
    ],
    orderType: "Delivery",
    amount: 1127,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-06T13:45:00",
    date: "2026-11-06",
    notes: "Please deliver at security gate"
  },
  {
    id: "KV-1020",
    customer: {
      name: "Sneha Patil",
      phone: "+91 99001 56789",
      address: "Table 4 (Garden Thatched Hut)",
    },
    items: [
      { name: "Afghani Paneer Tikka", quantity: 1, price: 289 },
      { name: "Mushroom Tikka", quantity: 1, price: 239 },
      { name: "Fresh Lime Soda", quantity: 2, price: 70 }
    ],
    orderType: "Dine-in",
    amount: 668,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Preparing",
    createdAt: "2026-11-06T14:15:00",
    date: "2026-11-06",
    notes: "Extra mint chutney requested"
  },
  {
    id: "KV-1019",
    customer: {
      name: "Vikram Hegde",
      phone: "+91 98860 88211",
      address: "Self-Pickup Counter",
    },
    items: [
      { name: "Mutton Ghee Roast", quantity: 2, price: 379 },
      { name: "Ghee Rice", quantity: 2, price: 180 }
    ],
    orderType: "Takeaway",
    amount: 1118,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "New",
    createdAt: "2026-11-06T15:20:00",
    date: "2026-11-06",
    notes: "Pack gravy separately in tight containers"
  },
  {
    id: "KV-1018",
    customer: {
      name: "Kavitha R.",
      phone: "+91 97422 34112",
      address: "Plot 45, Lingadheeranahalli, 80ft Road",
    },
    items: [
      { name: "Kalmi Kabab", quantity: 1, price: 229 },
      { name: "Chilli Chicken", quantity: 1, price: 279 },
      { name: "Mushroom Schezwan Fried Rice", quantity: 1, price: 210 }
    ],
    orderType: "Delivery",
    amount: 718,
    paymentMethod: "COD",
    paymentStatus: "Pending",
    status: "Out for delivery",
    createdAt: "2026-11-06T14:50:00",
    date: "2026-11-06",
    notes: "Keep changes for ₹1000 ready"
  },
  {
    id: "KV-1017",
    customer: {
      name: "Anand Murthy",
      phone: "+91 98452 77190",
      address: "Cabin 7 (Family Cabin)",
    },
    items: [
      { name: "Mutton Rogan Josh", quantity: 1, price: 409 },
      { name: "Dal Tadka", quantity: 1, price: 179 },
      { name: "Tandoori Roti", quantity: 6, price: 30 },
      { name: "Gulab Jamun (2 Pcs)", quantity: 2, price: 90 }
    ],
    orderType: "Dine-in",
    amount: 948,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-05T20:10:00",
    date: "2026-11-05",
    notes: "Medium spice on gravies"
  },
  {
    id: "KV-1016",
    customer: {
      name: "Pradeep Rao",
      phone: "+91 99801 44231",
      address: "Sobha Suncrest, Kanakapura Road",
    },
    items: [
      { name: "Chicken Tikka Masala", quantity: 2, price: 329 },
      { name: "Butter Naan", quantity: 6, price: 50 },
      { name: "Ghee Rice", quantity: 1, price: 180 }
    ],
    orderType: "Delivery",
    amount: 1138,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-05T19:30:00",
    date: "2026-11-05",
    notes: "Leave with resident guard"
  },
  {
    id: "KV-1015",
    customer: {
      name: "Deepa Menon",
      phone: "+91 98440 33812",
      address: "Takeaway Counter",
    },
    items: [
      { name: "Malai Kofta", quantity: 1, price: 249 },
      { name: "Dal Khichidi", quantity: 1, price: 200 }
    ],
    orderType: "Takeaway",
    amount: 449,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-05T18:45:00",
    date: "2026-11-05",
    notes: "No onion/garlic salad on the side please"
  },
  {
    id: "KV-1014",
    customer: {
      name: "Rohit Jain",
      phone: "+91 98800 66120",
      address: "Table 11 (Garden Lawn)",
    },
    items: [
      { name: "Badami Seekh Kabab", quantity: 2, price: 220 },
      { name: "Afghani Paneer Tikka", quantity: 1, price: 289 },
      { name: "Fresh Lime Soda", quantity: 3, price: 70 }
    ],
    orderType: "Dine-in",
    amount: 939,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-05T13:20:00",
    date: "2026-11-05",
    notes: "Anniversary table setup"
  },
  {
    id: "KV-1013",
    customer: {
      name: "Suresh Gowda",
      phone: "+91 94480 55192",
      address: "Near Lingadheeranahalli Circle",
    },
    items: [
      { name: "Mutton Pepper Fry", quantity: 1, price: 369 },
      { name: "Chicken Tikka", quantity: 1, price: 299 },
      { name: "Tandoori Roti", quantity: 5, price: 30 }
    ],
    orderType: "Delivery",
    amount: 818,
    paymentMethod: "COD",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-04T21:10:00",
    date: "2026-11-04",
    notes: "Call when reaching circle"
  },
  {
    id: "KV-1012",
    customer: {
      name: "Harish Kumar",
      phone: "+91 97311 00921",
      address: "Table 2",
    },
    items: [
      { name: "Chicken Tikka", quantity: 1, price: 299 },
      { name: "Butter Naan", quantity: 2, price: 50 }
    ],
    orderType: "Dine-in",
    amount: 399,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-04T19:40:00",
    date: "2026-11-04",
    notes: ""
  },
  {
    id: "KV-1011",
    customer: {
      name: "Meenakshi Sundaram",
      phone: "+91 98455 22091",
      address: "A-12, Royal Palms, BDA Layout",
    },
    items: [
      { name: "Aloo Gobi Masala", quantity: 1, price: 209 },
      { name: "Dal Tadka", quantity: 1, price: 179 },
      { name: "Ghee Rice", quantity: 1, price: 180 },
      { name: "Tandoori Roti", quantity: 4, price: 30 }
    ],
    orderType: "Delivery",
    amount: 688,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-04T13:00:00",
    date: "2026-11-04",
    notes: "Contactless delivery"
  },
  {
    id: "KV-1010",
    customer: {
      name: "Arjun Reddy",
      phone: "+91 96112 33455",
      address: "Takeaway Counter",
    },
    items: [
      { name: "Lasooni Chicken Tikka", quantity: 2, price: 299 },
      { name: "Chilli Chicken", quantity: 1, price: 279 }
    ],
    orderType: "Takeaway",
    amount: 877,
    paymentMethod: "UPI",
    paymentStatus: "Cancelled",
    status: "Cancelled",
    createdAt: "2026-11-03T20:30:00",
    date: "2026-11-03",
    notes: "Customer cancelled due to emergency travel"
  },
  {
    id: "KV-1009",
    customer: {
      name: "Bhavana Kulkarni",
      phone: "+91 98450 99881",
      address: "Cabin 9 (Private Hut)",
    },
    items: [
      { name: "Afghani Paneer Tikka", quantity: 1, price: 289 },
      { name: "Malai Kofta", quantity: 1, price: 249 },
      { name: "Butter Naan", quantity: 4, price: 50 },
      { name: "Gulab Jamun (2 Pcs)", quantity: 1, price: 90 }
    ],
    orderType: "Dine-in",
    amount: 828,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-03T19:15:00",
    date: "2026-11-03",
    notes: "Special family birthday dinner"
  },
  {
    id: "KV-1008",
    customer: {
      name: "Girish N.",
      phone: "+91 99011 77283",
      address: "Tech Zone Road, Lingadheeranahalli",
    },
    items: [
      { name: "Chicken Tikka Masala", quantity: 1, price: 329 },
      { name: "Ghee Rice", quantity: 1, price: 180 }
    ],
    orderType: "Delivery",
    amount: 509,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-02T20:45:00",
    date: "2026-11-02",
    notes: ""
  },
  {
    id: "KV-1007",
    customer: {
      name: "Pooja Varma",
      phone: "+91 98860 11299",
      address: "Table 6",
    },
    items: [
      { name: "Mushroom Tikka", quantity: 1, price: 239 },
      { name: "Dal Khichidi", quantity: 1, price: 200 }
    ],
    orderType: "Dine-in",
    amount: 439,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-02T13:30:00",
    date: "2026-11-02",
    notes: "Light oil preparation requested"
  },
  {
    id: "KV-1006",
    customer: {
      name: "Vinay Prasad",
      phone: "+91 97412 88471",
      address: "Banashankari 6th Stage 2nd Block",
    },
    items: [
      { name: "Mutton Ghee Roast", quantity: 1, price: 379 },
      { name: "Kalmi Kabab", quantity: 1, price: 229 },
      { name: "Tandoori Roti", quantity: 6, price: 30 }
    ],
    orderType: "Delivery",
    amount: 788,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    createdAt: "2026-11-01T20:00:00",
    date: "2026-11-01",
    notes: ""
  }
];

export const SAMPLE_PAYMENTS = [
  { transactionId: "TXN-9021", date: "2026-11-06", orderId: "KV-1021", method: "UPI (Google Pay)", amount: 1127, status: "Paid" },
  { transactionId: "TXN-9020", date: "2026-11-06", orderId: "KV-1020", method: "Credit Card (Visa)", amount: 668, status: "Paid" },
  { transactionId: "TXN-9019", date: "2026-11-06", orderId: "KV-1019", method: "UPI (PhonePe)", amount: 1118, status: "Paid" },
  { transactionId: "TXN-9018", date: "2026-11-06", orderId: "KV-1018", method: "Cash on Delivery", amount: 718, status: "Pending" },
  { transactionId: "TXN-9017", date: "2026-11-05", orderId: "KV-1017", method: "UPI (Paytm)", amount: 948, status: "Paid" },
  { transactionId: "TXN-9016", date: "2026-11-05", orderId: "KV-1016", method: "UPI (Google Pay)", amount: 1138, status: "Paid" },
  { transactionId: "TXN-9015", date: "2026-11-05", orderId: "KV-1015", method: "Debit Card (Mastercard)", amount: 449, status: "Paid" },
  { transactionId: "TXN-9014", date: "2026-11-05", orderId: "KV-1014", method: "UPI (BHIM)", amount: 939, status: "Paid" },
  { transactionId: "TXN-9013", date: "2026-11-04", orderId: "KV-1013", method: "Cash on Delivery", amount: 818, status: "Paid" },
  { transactionId: "TXN-9012", date: "2026-11-04", orderId: "KV-1012", method: "Credit Card", amount: 399, status: "Paid" },
  { transactionId: "TXN-9011", date: "2026-11-04", orderId: "KV-1011", method: "UPI (Google Pay)", amount: 688, status: "Paid" },
  { transactionId: "TXN-9010", date: "2026-11-03", orderId: "KV-1010", method: "UPI (PhonePe)", amount: 877, status: "Refunded" },
  { transactionId: "TXN-9009", date: "2026-11-03", orderId: "KV-1009", method: "UPI (Google Pay)", amount: 828, status: "Paid" },
  { transactionId: "TXN-9008", date: "2026-11-02", orderId: "KV-1008", method: "Debit Card", amount: 509, status: "Paid" },
  { transactionId: "TXN-9007", date: "2026-11-02", orderId: "KV-1007", method: "UPI (Paytm)", amount: 439, status: "Paid" },
  { transactionId: "TXN-9006", date: "2026-11-01", orderId: "KV-1006", method: "UPI (Google Pay)", amount: 788, status: "Paid" }
];

