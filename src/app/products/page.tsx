"use client"
import React, { useState } from 'react';
import { Search, Bell, User, ChevronDown, Upload } from 'lucide-react';

const BulkProductUpdate = () => {
  const [activeTab, setActiveTab] = useState('General');

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
      <main className="flex-1 p-8 overflow-y-auto">
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
        <p className="text-gray-400 mb-4">
          This page enables you to update selected products with one click instead of having to go through them one 
          by one.This data will not be stored, once you refresh the page the content will be emptied.
        </p>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex mb-6">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'General' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
              onClick={() => setActiveTab('General')}
            >
              General
            </button>
            <button
              className={`px-4 py-2 rounded-lg ml-2 ${
                activeTab === 'Payment Methods' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
              onClick={() => setActiveTab('Payment Methods')}
            >
              Payment Methods
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block mb-2">Select Products</label>
              <input
                type="text"
                placeholder="Select Products"
                className="w-full bg-gray-700 rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Delivery Text</label>
              <textarea
                placeholder="Delivery Text"
                className="w-full bg-gray-700 rounded p-2 h-24"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2">Images</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Upload className="mx-auto mb-4" size={48} />
                <p>Select a file or drag and drop here</p>
                <p className="text-sm text-gray-400">JPG, PNG or PDF, file size no more than 10MB</p>
                <button className="mt-4 bg-blue-500 rounded px-4 py-2">Select file</button>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-2">Price</label>
                <div className="flex">
                  <select className="bg-gray-700 rounded-l p-2">
                    <option>USD</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Price"
                    className="flex-1 bg-gray-700 rounded-r p-2"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block mb-2">Price Discount</label>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full bg-gray-700 rounded p-2"
                />
              </div>
            </div>

            <div className="flex space-x-2">
              {['File', 'Serials', 'Service', 'Dynamic', 'Subscription', 'Existing product'].map((item) => (
                <button
                  key={item}
                  className="px-3 py-1 bg-gray-700 rounded"
                >
                  {item}
                </button>
              ))}
            </div>

            <div>
              <label className="block mb-2">File</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Upload className="mx-auto mb-4" size={48} />
                <p>Select a file or drag and drop here</p>
                <p className="text-sm text-gray-400">JPG, PNG or PDF, file size no more than 10MB</p>
                <button className="mt-4 bg-blue-500 rounded px-4 py-2">Select file</button>
              </div>
            </div>

            <div>
              <label className="block mb-2">How many times this file can be sold</label>
              <input
                type="text"
                placeholder="-1 for unlimited times"
                className="w-full bg-gray-700 rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-2">Payment Methods</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block mb-2">Finance</label>
                  <select className="w-full bg-gray-700 rounded p-2">
                    <option>Paypal</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2">Crypto</label>
                  <select className="w-full bg-gray-700 rounded p-2">
                    <option>Bitcoin</option>
                  </select>
                </div>
              </div>
            </div>

            {['Private', 'Terms of Service', 'Redirect Link', 'Warranty'].map((item) => (
              <div key={item} className="bg-gray-700 rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>{item}</span>
                  <div className="w-10 h-6 bg-blue-500 rounded-full p-1 cursor-pointer">
                    <div className="bg-white w-4 h-4 rounded-full transform translate-x-4"></div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={item === 'Redirect Link' ? 'www.youtube.com' : `${item} details...`}
                  className="w-full bg-gray-600 rounded p-2"
                />
              </div>
            ))}

            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 bg-gray-700 rounded">Cancel</button>
              <button className="px-6 py-2 bg-blue-500 rounded">Save</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BulkProductUpdate;