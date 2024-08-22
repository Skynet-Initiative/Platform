import React from 'react';
import { Bell, ChevronDown, Moon, Search, User } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-indigo-950 text-white p-4 h-screen">
    <div className="flex items-center mb-8">
      <div className="text-2xl font-bold">Skynet</div>
    </div>
    {['Store', 'library', 'Comms', 'Pages', 'Admin', 'Creator', 'Docs & Help'].map((item, index) => (
      <div key={index} className={`py-2 px-4 ${item === 'Pages' ? 'bg-indigo-900' : ''} rounded mb-1`}>
        {item}
        {item === 'Pages' && <ChevronDown className="inline ml-2" size={16} />}
      </div>
    ))}
  </div>
);

const Header = () => (
  <div className="flex justify-between items-center p-4 bg-gray-900">
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full w-64"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <img src="/api/placeholder/24/24" alt="Flag" className="w-6 h-6 rounded-full" />
        <span className="text-white">Eng</span>
        <ChevronDown className="text-white" size={16} />
      </div>
      <Moon className="text-white" size={20} />
      <Bell className="text-white" size={20} />
      <User className="text-white" size={20} />
    </div>
  </div>
);

const AccountSettingsPage = () => (
  <div className="flex bg-gray-900 text-white min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Account Settings / <span className="text-blue-500">Account</span></h1>
        </div>
        <div className="flex space-x-4 mb-6">
          {['Account', 'Security', 'Billing & Plans', 'Notifications'].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${tab === 'Account' ? 'bg-blue-500' : 'bg-gray-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
          <div className="flex items-center mb-4">
            <img src="/api/placeholder/64/64" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Upload new photo</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">Reset</button>
          </div>
          <p className="text-sm text-gray-400 mb-4">Allowed JPG, GIF or PNG. Max size of 800K</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input type="text" value="3457 9830 3453 2349" className="w-full bg-gray-700 rounded px-3 py-2" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" value="john.doe@gmail.com" className="w-full bg-gray-700 rounded px-3 py-2" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select className="w-full bg-gray-700 rounded px-3 py-2">
                <option>Default</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <input type="text" value="English" className="w-full bg-gray-700 rounded px-3 py-2" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Timezone</label>
              <select className="w-full bg-gray-700 rounded px-3 py-2">
                <option>Select Timezone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select className="w-full bg-gray-700 rounded px-3 py-2">
                <option>Select Currency</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save changes</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
          <div className="bg-yellow-900 text-yellow-300 p-4 rounded mb-4">
            <p>Are you sure you want to delete your account?</p>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="confirm" className="mr-2" />
            <label htmlFor="confirm">I confirm my account deactivation</label>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Deactivate Account</button>
        </div>
      </div>
      <div className="p-4 text-center text-sm text-gray-500">
        Â© 2021-2023, All rights Skynet
        <div className="mt-2">
          <a href="#" className="text-blue-500 hover:underline mr-4">License</a>
          <a href="#" className="text-blue-500 hover:underline mr-4">Documentation</a>
          <a href="#" className="text-blue-500 hover:underline">Support</a>
        </div>
      </div>
    </div>
  </div>
);

export default AccountSettingsPage;