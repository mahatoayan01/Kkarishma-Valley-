import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  ShoppingBag,
  DollarSign,
  Clock,
  Search,
  Filter,
  LogOut,
  Calendar,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Eye,
  CreditCard,
  UserCheck,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { RESTAURANT } from '../data/restaurant';
import SeoMeta from '../components/SeoMeta';

export default function OwnerDashboardPage() {
  const { logout, user } = useAuth();
  const { orders, payments, updateOrderStatus } = useCart();

  // Search & filter state
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'payments' | 'analytics'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [orderTypeFilter, setOrderTypeFilter] = useState('all');
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);

  // Status badge style helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Preparing':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Out for delivery':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const getPaymentStatusBadge = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Refunded':
        return 'bg-stone-200 text-stone-700 border-stone-300';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  // Calculations for summary cards
  const totalOrders = orders.length;
  
  // Today's date in local ISO string YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];
  const todayOrders = orders.filter((o) => o.date === todayStr || o.createdAt?.startsWith(todayStr)).length;
  
  const totalRevenue = orders
    .filter((o) => o.status !== 'Cancelled')
    .reduce((sum, o) => sum + (o.amount || 0), 0);

  const pendingOrders = orders.filter(
    (o) => o.status === 'New' || o.status === 'Preparing' || o.status === 'Out for delivery'
  ).length;

  // Filtered orders
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchSearch =
        !searchQuery.trim() ||
        o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.customer?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.customer?.phone.includes(searchQuery);

      const matchStatus = statusFilter === 'all' || o.status === statusFilter;
      const matchType = orderTypeFilter === 'all' || o.orderType === orderTypeFilter;

      return matchSearch && matchStatus && matchType;
    });
  }, [orders, searchQuery, statusFilter, orderTypeFilter]);

  // Aggregate daily metrics for CSS/SVG charts (past 7 days)
  const chartData = useMemo(() => {
    // Generate map for past 7 days
    const daysMap = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const ds = d.toISOString().split('T')[0];
      const label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' });
      daysMap[ds] = { date: ds, label, count: 0, revenue: 0 };
    }

    orders.forEach((o) => {
      const d = o.date || o.createdAt?.split('T')[0];
      if (daysMap[d]) {
        daysMap[d].count += 1;
        if (o.status !== 'Cancelled') {
          daysMap[d].revenue += o.amount || 0;
        }
      }
    });

    return Object.values(daysMap);
  }, [orders]);

  const maxOrdersCount = Math.max(...chartData.map((d) => d.count), 5);
  const maxRevenue = Math.max(...chartData.map((d) => d.revenue), 1000);

  return (
    <div className="min-h-screen bg-stone-100/70 pb-20">
      <SeoMeta title="Owner Dashboard" />

      {/* Top Banner (Mandatory Demo Notice) */}
      <div className="bg-amber-600 text-white px-4 py-2.5 text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-xs">
        <AlertCircle className="w-4 h-4 shrink-0" />
        <span>Demo data – this dashboard shows sample data for presentation. Status changes update your browser's local state.</span>
      </div>

      {/* Dashboard Header Bar */}
      <div className="bg-forest-950 text-white border-b border-forest-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span>Management Portal</span>
              <span>•</span>
              <span className="text-emerald-400">Live Local Storage Connected</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
              Karishma Valley Owner Dashboard
            </h1>
            <p className="text-stone-300 text-xs mt-0.5">
              Logged in as: <strong>{user?.email || RESTAURANT.demoCredentials.email}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/20 transition-colors"
            >
              <LogOut className="w-4 h-4 text-amber-300" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Total Orders */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
                Total Orders
              </span>
              <h3 className="font-serif text-3xl font-bold text-forest-950 mt-1">
                {totalOrders}
              </h3>
              <span className="text-[11px] text-stone-400 mt-1 block">
                Sample + Live Checkout
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-900 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>

          {/* Today's Orders */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
                Today's Orders
              </span>
              <h3 className="font-serif text-3xl font-bold text-amber-700 mt-1">
                {todayOrders}
              </h3>
              <span className="text-[11px] text-emerald-600 mt-1 font-medium block">
                Live today active
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
                Total Revenue
              </span>
              <h3 className="font-serif text-3xl font-bold text-forest-950 mt-1">
                ₹{totalRevenue.toLocaleString()}
              </h3>
              <span className="text-[11px] text-stone-400 mt-1 block">
                Excluding cancelled
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          {/* Pending Orders */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
                Pending Action
              </span>
              <h3 className="font-serif text-3xl font-bold text-purple-700 mt-1">
                {pendingOrders}
              </h3>
              <span className="text-[11px] text-purple-600 font-medium mt-1 block">
                New & In Kitchen
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Pure CSS / SVG Visual Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders Volume Chart */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-serif font-bold text-lg text-forest-950">
                  Daily Orders Volume
                </h4>
                <p className="text-xs text-stone-500">Last 7 days order count</p>
              </div>
              <span className="text-xs bg-stone-100 text-stone-700 font-semibold px-2.5 py-1 rounded-lg">
                CSS / SVG Chart
              </span>
            </div>

            {/* Bar Chart Container */}
            <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-stone-200">
              {chartData.map((d, i) => {
                const heightPercent = Math.max(12, Math.round((d.count / maxOrdersCount) * 100));
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] font-bold text-forest-900 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.count}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[36px] bg-gradient-to-t from-forest-900 to-forest-700 group-hover:from-amber-600 group-hover:to-amber-500 rounded-t-lg transition-all shadow-xs"
                    ></div>
                    <span className="text-[10px] text-stone-500 truncate w-full text-center">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Revenue Trend Chart */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-serif font-bold text-lg text-forest-950">
                  Daily Revenue (₹)
                </h4>
                <p className="text-xs text-stone-500">Last 7 days revenue trends</p>
              </div>
              <span className="text-xs bg-stone-100 text-stone-700 font-semibold px-2.5 py-1 rounded-lg">
                Pure CSS Trend
              </span>
            </div>

            {/* Revenue Bars */}
            <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-stone-200">
              {chartData.map((d, i) => {
                const heightPercent = Math.max(12, Math.round((d.revenue / maxRevenue) * 100));
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] font-bold text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ₹{d.revenue}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[36px] bg-gradient-to-t from-amber-600 to-amber-400 group-hover:from-forest-900 group-hover:to-forest-700 rounded-t-lg transition-all shadow-xs"
                    ></div>
                    <span className="text-[10px] text-stone-500 truncate w-full text-center">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tabs: Orders Management & Payment History */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          {/* Tab Navigators */}
          <div className="flex border-b border-stone-200 px-6 pt-4 gap-6 bg-stone-50/70">
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'orders'
                  ? 'border-forest-900 text-forest-950'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Customer Orders ({filteredOrders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('payments')}
              className={`pb-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'payments'
                  ? 'border-forest-900 text-forest-950'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Payment History ({payments.length})</span>
            </button>
          </div>

          {activeTab === 'orders' ? (
            <div className="p-6 space-y-6">
              {/* Search & Filters */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by Order ID, Customer name or phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-forest-200"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-hidden"
                  >
                    <option value="all">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>

                  <select
                    value={orderTypeFilter}
                    onChange={(e) => setOrderTypeFilter(e.target.value)}
                    className="px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-hidden"
                  >
                    <option value="all">All Order Types</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Takeaway">Takeaway</option>
                    <option value="Dine-in">Dine-in</option>
                  </select>
                </div>
              </div>

              {/* Orders Table (Responsive with Horizontal Scroll & Cards on Mobile) */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[11px] tracking-wider">
                      <th className="py-3 px-4">Order ID & Date</th>
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">Items</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Payment</th>
                      <th className="py-3 px-4">Status & Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-stone-50/80 transition-colors">
                        {/* ID & Date */}
                        <td className="py-3 px-4">
                          <span className="font-mono font-bold text-forest-950 block">
                            #{order.id}
                          </span>
                          <span className="text-[11px] text-stone-400">
                            {order.date || order.createdAt?.split('T')[0]}
                          </span>
                        </td>

                        {/* Customer */}
                        <td className="py-3 px-4">
                          <span className="font-semibold text-stone-900 block">
                            {order.customer?.name}
                          </span>
                          <span className="text-[11px] text-stone-500 block">
                            {order.customer?.phone}
                          </span>
                          <span className="text-[11px] text-stone-400 truncate max-w-[150px] block">
                            {order.customer?.address}
                          </span>
                        </td>

                        {/* Items */}
                        <td className="py-3 px-4">
                          <div className="space-y-0.5">
                            {order.items?.map((item, idx) => (
                              <div key={idx} className="text-xs text-stone-700">
                                <strong>{item.quantity}x</strong> {item.name}
                              </div>
                            ))}
                          </div>
                        </td>

                        {/* Order Type */}
                        <td className="py-3 px-4">
                          <span className="bg-stone-100 text-stone-700 font-medium px-2 py-0.5 rounded text-[11px]">
                            {order.orderType}
                          </span>
                        </td>

                        {/* Amount */}
                        <td className="py-3 px-4 font-bold text-forest-950">
                          ₹{order.amount}
                        </td>

                        {/* Payment */}
                        <td className="py-3 px-4">
                          <span className="block text-stone-700 font-medium text-xs">
                            {order.paymentMethod}
                          </span>
                          <span
                            className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-0.5 ${getPaymentStatusBadge(
                              order.paymentStatus
                            )}`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>

                        {/* Status Change Dropdown */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                              className={`text-xs font-bold rounded-lg px-2.5 py-1 border focus:outline-hidden cursor-pointer ${getStatusBadge(
                                order.status
                              )}`}
                            >
                              <option value="New">New</option>
                              <option value="Preparing">Preparing</option>
                              <option value="Out for delivery">Out for delivery</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="p-6">
              {/* Payment History Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase text-[11px] tracking-wider">
                      <th className="py-3 px-4">Transaction ID</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Order Ref</th>
                      <th className="py-3 px-4">Payment Method</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {payments.map((p) => (
                      <tr key={p.transactionId} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-stone-900">
                          {p.transactionId}
                        </td>
                        <td className="py-3 px-4 text-stone-600">
                          {p.date}
                        </td>
                        <td className="py-3 px-4 font-mono text-forest-900 font-medium">
                          #{p.orderId}
                        </td>
                        <td className="py-3 px-4 text-stone-700">
                          {p.method}
                        </td>
                        <td className="py-3 px-4 font-bold text-forest-950">
                          ₹{p.amount}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getPaymentStatusBadge(
                              p.status
                            )}`}
                          >
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

