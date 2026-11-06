import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  CreditCard,
  QrCode,
  Banknote,
  UtensilsCrossed,
  Clock,
  MapPin,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT } from '../data/restaurant';
import SeoMeta from '../components/SeoMeta';

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    demoTax,
    getDeliveryFee,
    placeDemoOrder,
  } = useCart();

  const navigate = useNavigate();

  // Checkout form state
  const [orderType, setOrderType] = useState('Delivery'); // 'Delivery' | 'Takeaway' | 'Dine-in'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 4 (Garden Hut)');
  const [orderNotes, setOrderNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI' | 'Card' | 'Cash on Delivery'

  // Fake demo payment inputs
  const [demoUpiId, setDemoUpiId] = useState('user@oksbi');
  const [demoCardNumber, setDemoCardNumber] = useState('•••• •••• •••• 4242');
  const [demoCardExpiry, setDemoCardExpiry] = useState('12/28');
  const [demoCardCvv, setDemoCardCvv] = useState('•••');

  const [formErrors, setFormErrors] = useState({});
  const [placedOrder, setPlacedOrder] = useState(null);

  const deliveryFee = getDeliveryFee(orderType);
  const grandTotal = subtotal + demoTax + deliveryFee;

  const validateCheckout = () => {
    const errors = {};
    if (!customerName.trim()) errors.name = 'Please enter your name';
    if (!customerPhone.trim() || customerPhone.trim().length < 10)
      errors.phone = 'Please enter a valid 10-digit phone number';
    if (orderType === 'Delivery' && !deliveryAddress.trim())
      errors.address = 'Please enter the delivery address';
    return errors;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const errors = validateCheckout();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const orderDetails = {
      name: customerName,
      phone: customerPhone,
      address:
        orderType === 'Delivery'
          ? deliveryAddress
          : orderType === 'Dine-in'
          ? tableNumber
          : 'Self Takeaway Counter',
      orderType,
      notes: orderNotes,
      paymentMethod,
    };

    const newOrder = placeDemoOrder(orderDetails);
    setPlacedOrder(newOrder);
  };

  // SUCCESS SCREEN
  if (placedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 animate-fadeIn">
        <SeoMeta title="Order Confirmed (Demo)" />
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-10 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div>
            <span className="inline-block bg-forest-900 text-amber-300 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
              Order ID: #{placedOrder.id}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mt-3">
              Order Placed Successfully!
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-lg mx-auto">
              Thank you, <strong>{placedOrder.customer.name}</strong>. Your order has been placed in demo mode and saved directly to the Owner Dashboard.
            </p>
          </div>

          {/* Order Snapshot Box */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-3 max-w-md mx-auto">
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-stone-500">Order Type:</span>
              <span className="font-bold text-forest-950">{placedOrder.orderType}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-stone-500">Payment:</span>
              <span className="font-bold text-forest-950">
                {placedOrder.paymentMethod} ({placedOrder.paymentStatus})
              </span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-stone-500">Items Count:</span>
              <span className="font-bold text-forest-950">{placedOrder.items.length} items</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-1 text-forest-950">
              <span>Total Paid:</span>
              <span className="text-amber-700">₹{placedOrder.amount}</span>
            </div>
          </div>

          {/* Owner Dashboard Notice */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto flex items-start gap-2.5 text-left">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Demo notice:</strong> You can log into the <strong>Owner Dashboard</strong> using <code>owner@demo.com</code> / <code>demo1234</code> to inspect this live order and update its status.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-6 py-3 bg-forest-900 hover:bg-forest-800 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Order More Dishes
            </Link>
            <Link
              to="/owner-login"
              className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-sm font-semibold transition-colors"
            >
              View in Owner Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // EMPTY CART STATE
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-fadeIn">
        <SeoMeta title="Your Cart is Empty" />
        <div className="w-20 h-20 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-forest-950 mb-2">
          Your Cart is Empty
        </h1>
        <p className="text-stone-600 text-sm max-w-md mx-auto mb-8">
          You haven't added any dishes to your order yet. Explore our clay tandoor starters and signature gravies.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-xl text-sm shadow-md transition-all"
        >
          <UtensilsCrossed className="w-4 h-4" />
          <span>Browse the Menu</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-8">
      <SeoMeta title="Cart & Demo Checkout" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-amber-700 transition-colors mb-2"
          >
            ← Back to Food Menu
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            Shopping Cart & Demo Checkout
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Review your dishes and complete your order with simulated demo payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List (col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
                <span className="font-serif font-bold text-lg text-forest-950">
                  Selected Dishes ({cartItems.length})
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="divide-y divide-stone-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`w-3.5 h-3.5 rounded-xs border shrink-0 flex items-center justify-center ${
                          item.isVeg ? 'border-emerald-600' : 'border-red-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                          }`}
                        />
                      </span>
                      <div className="truncate">
                        <h4 className="font-serif font-bold text-sm sm:text-base text-forest-950 truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs text-stone-500">₹{item.price} each</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-stone-100 border border-stone-200 rounded-xl px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-md bg-white text-stone-700 hover:bg-stone-200 flex items-center justify-center transition-colors shadow-2xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-xs text-stone-900 min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-md bg-forest-900 text-white hover:bg-forest-800 flex items-center justify-center transition-colors shadow-2xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total for Item */}
                      <span className="font-bold text-sm text-forest-950 min-w-16 text-right">
                        ₹{item.price * item.quantity}
                      </span>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Cooking or Delivery Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please make chicken starter extra crispy, separate mint chutney..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
              ></textarea>
            </div>
          </div>

          {/* Checkout & Demo Payment Form (col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <form onSubmit={handlePlaceOrder} className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-md space-y-6">
              <h2 className="font-serif text-xl font-bold text-forest-950 border-b border-stone-100 pb-3">
                Checkout Details
              </h2>

              {/* Order Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Order Type *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Delivery', 'Takeaway', 'Dine-in'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        orderType === type
                          ? 'bg-forest-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Aditi Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className={`w-full px-4 py-2 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                      formErrors.name
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 98450 12345"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className={`w-full px-4 py-2 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                      formErrors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>

                {orderType === 'Delivery' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Flat 302, Green View Apts, Lingadheeranahalli"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className={`w-full px-4 py-2 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                        formErrors.address
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-stone-300 focus:border-forest-600 focus:ring-forest-200'
                      }`}
                    ></textarea>
                    {formErrors.address && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
                    )}
                  </div>
                )}

                {orderType === 'Dine-in' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Table / Cabin Selection
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-forest-600 bg-white"
                    >
                      <option value="Hut 1 (Private Thatched Hut)">Hut 1 (Private Thatched Hut)</option>
                      <option value="Hut 2 (Private Thatched Hut)">Hut 2 (Private Thatched Hut)</option>
                      <option value="Table 4 (Garden Thatched Hut)">Table 4 (Garden Thatched Hut)</option>
                      <option value="Cabin 7 (Family Cabin)">Cabin 7 (Family Cabin)</option>
                      <option value="Lawn Table 12">Lawn Table 12 (Outdoor)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* DEMO PAYMENT SECTION (STRICT RULE) */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 flex items-start gap-2 text-xs text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wide block">
                      DEMO PAYMENT – NO REAL MONEY CHARGED
                    </span>
                    <span>
                      This form is for presentation only. Never input real financial details.
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Payment Method (Demo)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('UPI')}
                      className={`p-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                        paymentMethod === 'UPI'
                          ? 'border-forest-800 bg-forest-50 text-forest-900'
                          : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-amber-600" />
                      <span>UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Card')}
                      className={`p-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                        paymentMethod === 'Card'
                          ? 'border-forest-800 bg-forest-50 text-forest-900'
                          : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-amber-600" />
                      <span>Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Cash on Delivery')}
                      className={`p-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                        paymentMethod === 'Cash on Delivery'
                          ? 'border-forest-800 bg-forest-50 text-forest-900'
                          : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <Banknote className="w-4 h-4 text-emerald-600" />
                      <span>COD</span>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'UPI' && (
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5">
                    <label className="text-[11px] font-semibold text-stone-600 block">
                      Demo UPI VPA ID
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={demoUpiId}
                      className="w-full bg-white px-3 py-1.5 rounded-lg border border-stone-200 font-mono text-stone-700"
                    />
                  </div>
                )}

                {paymentMethod === 'Card' && (
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block">
                        Demo Card Number
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={demoCardNumber}
                        className="w-full bg-white px-3 py-1.5 rounded-lg border border-stone-200 font-mono text-stone-700"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-semibold text-stone-500 block">Expiry</label>
                        <input
                          type="text"
                          readOnly
                          value={demoCardExpiry}
                          className="w-full bg-white px-3 py-1 rounded border border-stone-200 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-stone-500 block">CVV</label>
                        <input
                          type="text"
                          readOnly
                          value={demoCardCvv}
                          className="w-full bg-white px-3 py-1 rounded border border-stone-200 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="pt-4 border-t border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Item Subtotal:</span>
                  <span className="font-semibold text-stone-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>GST (5% Demo Tax):</span>
                  <span className="font-semibold text-stone-900">₹{demoTax}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Delivery Charges:</span>
                  <span className="font-semibold text-stone-900">
                    {deliveryFee > 0 ? `₹${deliveryFee}` : 'Free'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-forest-950 pt-2 border-t border-stone-100">
                  <span>Total Amount:</span>
                  <span className="text-amber-700">₹{grandTotal}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-forest-900 hover:bg-forest-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Place Demo Order (₹{grandTotal})</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

