"use client"
import React from 'react';
import { Bell, ChevronDown, Eye, EyeOff, Lock, Moon, Search, Shield, Smartphone, User } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-indigo-950 text-white p-4 h-screen">
    <div className="flex items-center mb-8">
      <div className="text-2xl font-bold">Skynet</div>
    </div>
    {['Store', 'library', 'Comms', 'Pages', 'Admin', 'Creator', 'Docs & Help'].map((item, index) => (
      <div key={index} className={`py-2 px-4 ${item === 'Store' ? 'bg-indigo-900' : ''} rounded mb-1`}>
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

const SecuritySettingsPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Account Settings / <span className="text-blue-500">Security</span></h1>
          </div>
          <div className="flex space-x-4 mb-6">
            {['Account', 'Security', 'Billing & Plans', 'Notifications'].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded ${tab === 'Security' ? 'bg-blue-500' : 'bg-gray-800'}`}
              >
                {tab === 'Security' && <Shield className="inline mr-2" size={16} />}
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current password</label>
                <input type="password" value="••••••••" className="w-full bg-gray-700 rounded px-3 py-2" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" value="john.doe@gmail.com" className="w-full bg-gray-700 rounded px-3 py-2" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">New password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-700 rounded px-3 py-2 pr-10"
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-700 rounded px-3 py-2 pr-10"
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Password Requirements:</h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>Minimum 8 characters long - the more, the better</li>
                <li>At least one lowercase character</li>
                <li>At least one number, symbol, or whitespace character</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save changes</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Two-steps verification</h2>
            <p className="text-red-500 mb-2">Two-factor authentication is not enabled yet.</p>
            <p className="text-gray-400 mb-4">Two-factor authentication adds an extra layer of security to your account by requiring more than just a password to log in. Learn more.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              <Lock className="mr-2" size={16} />
              Enable two-factor authentication
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Devices</h2>
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-left">
                  <th className="pb-2">BROWSER</th>
                  <th className="pb-2">DEVICE</th>
                  <th className="pb-2">LOCATION</th>
                  <th className="pb-2">RECENT ACTIVITIES</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { browser: 'Chrome on Windows', device: 'HP Specter 360', location: 'Switzerland', date: '10, July 2021 20:07' },
                  { browser: 'Chrome on iPhone', device: 'iPhone 12x', location: 'Australia', date: '13, July 2021 10:10' },
                  { browser: 'Chrome on Android', device: 'OnePlus 9 Pro', location: 'Dubai', date: '14, July 2021 15:15' },
                  { browser: 'Chrome on macOS', device: 'Apple iMac', location: 'India', date: '16, July 2021 16:17' },
                  { browser: 'Chrome on Windows', device: 'HP Specter 360', location: 'Switzerland', date: '10, July 2021 20:07' },
                  { browser: 'Chrome on Android', device: 'OnePlus 9 Pro', location: 'Dubai', date: '14, July 2021 15:15' },
                ].map((item, index) => (
                  <tr key={index} className="text-gray-300">
                    <td className="py-2 flex items-center">
                      <Smartphone className="mr-2 text-blue-400" size={16} />
                      {item.browser}
                    </td>
                    <td className="py-2">{item.device}</td>
                    <td className="py-2">{item.location}</td>
                    <td className="py-2">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4 text-center text-sm text-gray-500">
          © 2021-2023, All rights Skynet
          <div className="mt-2">
            <a href="#" className="text-blue-500 hover:underline mr-4">License</a>
            <a href="#" className="text-blue-500 hover:underline mr-4">Documentation</a>
            <a href="#" className="text-blue-500 hover:underline">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettingsPage;