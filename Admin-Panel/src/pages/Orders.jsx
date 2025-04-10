import React, { useState ,useEffect} from 'react';
import { CalendarIcon, PackageIcon, TruckIcon, CheckCircleIcon, BanIcon, ChevronDownIcon, ChevronUpIcon, CreditCardIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import { BACKEND } from '../App';

const AdminOrdersPage = ({token }) => {
  // If no orders are provided, use sample data for demo
  const [orders, setOrders] = useState([
      ]);
  
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('All');


  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(`${BACKEND}/api/order/orderlist`,{},{headers: { token: localStorage.getItem('token') }});
      setOrders(response.data.orders);
      console.log(response.data)
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      
    }
  };

  const StatusHandler = async (event)=>{

  }

  const statusOptions = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'];

  // Format date helper
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Update order status
  const updateOrderStatus = async(orderId, newStatus) => {
    console.log(orderId,newStatus)
try {
  const response = await axios.post('http://localhost:5000/api/order/status',{orderId,newStatus},{headers: { token: localStorage.getItem('token') }})
 console.log(response)
} catch (error) {
  
}


    // Here you would typically make an API call to update the status on the server
    // Then update local state after successful response
    setOrders(orders.map(order => 
      order._id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  // Toggle payment status
  const togglePaymentStatus = (orderId) => {
    // Here you would typically make an API call to update the payment status on the server
    // Then update local state after successful response
    setOrders(orders.map(order => 
      order._id === orderId ? { ...order, Payment: !order.Payment } : order
    ));
  };

  // Filter orders
  const filteredOrders = currentFilter === 'All' 
    ? orders 
    : orders.filter(order => order.status === currentFilter);

  // Status styling
  const getStatusStyle = (status) => {
    switch(status) {
      case 'Order Placed': 
        return { 
          bg: 'bg-blue-100', 
          text: 'text-blue-800',
          icon: <PackageIcon className="w-4 h-4" />
        };
      case 'Processing': 
        return { 
          bg: 'bg-purple-100', 
          text: 'text-purple-800',
          icon: <PackageIcon className="w-4 h-4" />
        };
      case 'Shipped': 
        return { 
          bg: 'bg-yellow-100', 
          text: 'text-yellow-800',
          icon: <TruckIcon className="w-4 h-4" />
        };
      case 'Out for Delivery': 
        return { 
          bg: 'bg-indigo-100', 
          text: 'text-indigo-800',
          icon: <TruckIcon className="w-4 h-4" />
        };
      case 'Delivered': 
        return { 
          bg: 'bg-green-100', 
          text: 'text-green-800',
          icon: <CheckCircleIcon className="w-4 h-4" />
        };
      case 'Cancelled': 
        return { 
          bg: 'bg-red-100', 
          text: 'text-red-800',
          icon: <BanIcon className="w-4 h-4" />
        };
      default: 
        return { 
          bg: 'bg-gray-100', 
          text: 'text-gray-800',
          icon: <PackageIcon className="w-4 h-4" />
        };
    }
  };

  // Next status button action
  const getNextStatusAction = (currentStatus) => {
    switch(currentStatus) {
      case 'Order Placed': return { status: 'Processing', label: 'Process Order' };
      case 'Processing': return { status: 'Shipped', label: 'Mark Shipped' };
      case 'Shipped': return { status: 'Out for Delivery', label: 'Out for Delivery' };
      case 'Out for Delivery': return { status: 'Delivered', label: 'Mark Delivered' };
      default: return null;
    }
  };

  return (
    <>

   
  
     <div className='mt-10 ml-15 mr-15'>
    <Navigation/> 
    </div>
    <hr className='w-full'/>
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
   
      <div className="w-[90%] mx-auto">
   
      
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
          <p className="mt-2 text-gray-600">Manage and update customer orders</p>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button 
            onClick={() => setCurrentFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentFilter === 'All' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            All Orders
          </button>
          {statusOptions.map(status => {
            const style = getStatusStyle(status);
            return (
              <button 
                key={status}
                onClick={() => setCurrentFilter(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
                  currentFilter === status 
                    ? `${style.bg} ${style.text} border border-transparent` 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {style.icon}
                {status}
              </button>
            );
          })}
        </div>
        
        {/* Orders List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {filteredOrders.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No orders found matching the selected filter.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredOrders.map(({ _id, address, date, status, Payment, PaymentMethod, amount, items }) => {
                const statusStyle = getStatusStyle(status);
                const nextAction = getNextStatusAction(status);
                const isExpanded = expandedOrderId === _id;
                
                return (
                  <li key={_id} className="transition-colors">
                    {/* Order Row */}
                    <div className={`p-4 sm:px-6 ${isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3">
                            <span className={`${statusStyle.bg} ${statusStyle.text} p-2 rounded-full`}>
                              {statusStyle.icon}
                            </span>
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900">
                                {address.firstName} {address.lastName}
                              </h3>
                              <div className="mt-1 flex items-center text-xs text-gray-500 gap-2">
                                <span className="font-mono">#{_id.substring(_id.length - 8)}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <CalendarIcon className="w-3 h-3" />
                                  {formatDate(date)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 sm:gap-6">
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">₹{amount.toLocaleString()}</div>
                            <div className="flex items-center gap-1 mt-1 text-xs">
                              <span className={`px-2 py-1 rounded-full ${Payment ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {Payment ? 'Paid' : 'Pending'}
                              </span>
                              <span className="text-gray-500">{PaymentMethod}</span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => setExpandedOrderId(isExpanded ? null : _id)}
                            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                          >
                            {isExpanded ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-4 pb-6 pt-2 sm:px-6 bg-gray-50 border-t border-gray-100">
                        {/* Order Items */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">Order Items</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {items.map(item => (
                              <div key={item._id} className="flex bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                                  <img src="/api/placeholder/64/64" alt={item.name} className="object-cover" />
                                </div>
                                <div className="ml-3 flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                  <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs line-through text-gray-400">₹{item.old_price}</span>
                                    <span className="text-sm font-semibold text-gray-900">₹{item.new_price}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Customer and Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Customer Info */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Customer Information</h4>
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4">
                              <div>
                                <h5 className="text-xs font-medium text-gray-500 mb-2">Contact</h5>
                                <p className="text-sm text-gray-900">{address.firstName} {address.lastName}</p>
                                <p className="text-sm text-gray-900">{address.email}</p>
                                <p className="text-sm text-gray-900">{address.phone}</p>
                              </div>
                              
                              <div>
                                <h5 className="text-xs font-medium text-gray-500 mb-2">Shipping Address</h5>
                                <p className="text-sm text-gray-900">{address.street}</p>
                                <p className="text-sm text-gray-900">{address.city}, {address.state} {address.zipcode}</p>
                              </div>
                              
                              <div>
                                <h5 className="text-xs font-medium text-gray-500 mb-2">Payment Method</h5>
                                <div className="flex items-center gap-2">
                                  <CreditCardIcon className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm text-gray-900">{PaymentMethod}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Order Actions */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Update Order</h4>
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4">
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-2">
                                  Status
                                </label>
                                <select 
                                  value={status}
                                  onChange={(e) => updateOrderStatus(_id, e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                >
                                  {statusOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                              </div>
                              
                              <div className="flex items-center">
                                <label className="flex items-center text-sm text-gray-900 space-x-2">
                                  <input 
                                    type="checkbox" 
                                    checked={Payment} 
                                    onChange={() => togglePaymentStatus(_id)}
                                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                  />
                                  <span>Payment Received</span>
                                </label>
                              </div>
                              
                              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                                {status !== 'Cancelled' && status !== 'Delivered' && (
                                  <button 
                                    onClick={() => updateOrderStatus(_id, 'Cancelled')}
                                    className="px-4 py-2 text-sm rounded-lg border border-red-300 text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                                  >
                                    Cancel Order
                                  </button>
                                )}
                                
                                {nextAction && (
                                  <button 
                                    onClick={() => updateOrderStatus(_id, nextAction.status)}
                                    className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                  >
                                    {nextAction.label}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminOrdersPage;
