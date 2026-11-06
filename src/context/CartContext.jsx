import React, { createContext, useContext, useState, useEffect } from 'react';
import { SAMPLE_ORDERS, SAMPLE_PAYMENTS } from '../data/sampleOrders';

const CartContext = createContext();

const CART_STORAGE_KEY = 'karishma_valley_cart';
const ORDERS_STORAGE_KEY = 'karishma_valley_orders';
const PAYMENTS_STORAGE_KEY = 'karishma_valley_payments';

export function CartProvider({ children }) {
  // Safe localStorage loader for cart
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("Unable to read cart from localStorage:", e);
      return [];
    }
  });

  // Orders state initialized with sample orders + stored orders
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
      return SAMPLE_ORDERS;
    } catch (e) {
      console.warn("Unable to read orders from localStorage:", e);
      return SAMPLE_ORDERS;
    }
  });

  // Payments state
  const [payments, setPayments] = useState(() => {
    try {
      const saved = localStorage.getItem(PAYMENTS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
      return SAMPLE_PAYMENTS;
    } catch (e) {
      console.warn("Unable to read payments from localStorage:", e);
      return SAMPLE_PAYMENTS;
    }
  });

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn("Unable to save cart to localStorage:", e);
    }
  }, [cartItems]);

  // Sync orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.warn("Unable to save orders to localStorage:", e);
    }
  }, [orders]);

  // Sync payments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(PAYMENTS_STORAGE_KEY, JSON.stringify(payments));
    } catch (e) {
      console.warn("Unable to save payments to localStorage:", e);
    }
  }, [payments]);

  // Add item to cart
  const addToCart = (item, quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(i => i.id === item.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(i => (i.id === itemId ? { ...i, quantity: newQuantity } : i))
    );
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Demo tax (5% GST for demo display)
  const demoTax = Math.round(subtotal * 0.05);

  // Delivery fee (0 for takeaway / dine-in, standard 40 for delivery)
  const getDeliveryFee = (orderType) => (orderType === 'Delivery' && subtotal > 0 ? 40 : 0);

  // Total count of individual items
  const totalItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Place demo order
  const placeDemoOrder = (checkoutDetails) => {
    const generatedId = `KV-${Math.floor(1000 + Math.random() * 9000)}`;
    const fee = getDeliveryFee(checkoutDetails.orderType);
    const grandTotal = subtotal + demoTax + fee;
    const nowIso = new Date().toISOString();
    const todayDate = nowIso.split('T')[0];

    const newOrder = {
      id: generatedId,
      customer: {
        name: checkoutDetails.name,
        phone: checkoutDetails.phone,
        address: checkoutDetails.address || (checkoutDetails.orderType === 'Dine-in' ? 'Table Order' : 'Self Takeaway'),
      },
      items: [...cartItems],
      orderType: checkoutDetails.orderType,
      amount: grandTotal,
      paymentMethod: checkoutDetails.paymentMethod,
      paymentStatus: checkoutDetails.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      status: 'New',
      createdAt: nowIso,
      date: todayDate,
      notes: checkoutDetails.notes || ''
    };

    const newPayment = {
      transactionId: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      date: todayDate,
      orderId: generatedId,
      method: checkoutDetails.paymentMethod,
      amount: grandTotal,
      status: checkoutDetails.paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid'
    };

    setOrders(prev => [newOrder, ...prev]);
    setPayments(prev => [newPayment, ...prev]);
    clearCart();

    return newOrder;
  };

  // Update order status from Owner Dashboard
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(ord => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        demoTax,
        getDeliveryFee,
        totalItemCount,
        placeDemoOrder,
        orders,
        payments,
        updateOrderStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

