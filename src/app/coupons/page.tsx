"use client"
import React from 'react';
import { Search, Bell, User, ChevronDown, Edit, Trash2 } from 'lucide-react';

const CouponManagementPage = () => {
  const coupons = [
    { code: '#5089', discount: '50%', product: 4, status: 'ACTIVE', used: 46 },
    { code: '#5089', discount: '50%', product: 5, status: 'NON ACTIVE', used: 0 },
    { code: '#5089', discount: '50%', product: 1, status: 'NON ACTIVE', used: 0 },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Skynet</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            <li className="bg-blue-600 rounded p-2">Store</li>
            <li>Library</li>
            <li>Comms</li>
            <li className="flex justify-between items-center">
              <span>Pages</span>
              <ChevronDown size={16} />
            </li>
            <li className="pl-4">Pricing</li>
            {/* Add more menu items */}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 rounded-full py-2 px-4 pl-10 w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-700 rounded p-2">
              <option>Eng</option>
            </select>
            <button className="bg-gray-700 rounded-full p-2">
              <Bell size={18} />
            </button>
            <button className="bg-gray-700 rounded-full p-2">
              <User size={18} />
            </button>
            <button className="bg-blue-500 rounded px-4 py-2">JOIN NOW</button>
          </div>
        </header>

        <h2 className="text-2xl font-bold mb-4">Bulk Products Update</h2>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Coupon</h3>
          <p className="text-gray-400 mb-4">In this section you can find the list of all categories</p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6">+ New Coupons</button>

          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="pb-3">CODE</th>
                <th className="pb-3">DISCOUNT</th>
                <th className="pb-3">PRODUCT</th>
                <th className="pb-3">STATUS</th>
                <th className="pb-3">USED</th>
                <th className="pb-3">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-3 text-blue-400">{coupon.code}</td>
                  <td className="py-3">{coupon.discount}</td>
                  <td className="py-3">{coupon.product}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded ${coupon.status === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="py-3">{coupon.used}</td>
                  <td className="py-3">
                    <button className="mr-2"><Edit size={18} /></button>
                    <button><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-400">Showing 1 to 7 of 100 entries</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-700 rounded">Previous</button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${
                    page === 1 ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 bg-gray-700 rounded">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CouponManagementPage;