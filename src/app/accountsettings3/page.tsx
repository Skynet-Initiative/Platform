"use client"
import React from 'react';
import { Bell, ChevronDown, Moon, Search, User, MapPin, Calendar, CheckCircle, Briefcase, Globe, Mail, Box, Users } from 'lucide-react';

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

const UserProfilePage = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <div className="relative mb-8">
            <img src="/api/placeholder/1200/200" alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="absolute bottom-0 left-8 transform translate-y-1/2 flex items-end">
              <img src="/api/placeholder/128/128" alt="Profile" className="w-32 h-32 rounded-full border-4 border-gray-900" />
              <div className="ml-4 mb-4">
                <h1 className="text-2xl font-bold">1nonly</h1>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>New York</span>
                  <Calendar size={16} className="ml-4 mr-2" />
                  <span>Joined April 2023</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-16">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">INFORMATIONS</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="flex items-center"><User size={16} className="mr-2" /> Full Name :</span>
                  <span>1nonly</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center"><CheckCircle size={16} className="mr-2" /> Status:</span>
                  <span className="flex items-center text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center"><Briefcase size={16} className="mr-2" /> Role :</span>
                  <span>Admin</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center"><Globe size={16} className="mr-2" /> Country :</span>
                  <span>USA</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center"><Globe size={16} className="mr-2" /> Languages :</span>
                  <span>English</span>
                </div>
              </div>
              <h2 className="text-lg font-semibold mt-6 mb-4">CONTACTS</h2>
              <div className="flex justify-between">
                <span className="flex items-center"><Mail size={16} className="mr-2" /> Email:</span>
                <span>1nonly@skynet.me</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">ABOUT</h2>
              <p className="text-gray-400">
                A Next.js developer is a software developer who uses the Next.js framework alongside ReactJS to build web applications.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">OVERVIEW</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <Box size={24} className="text-blue-400 mr-4" />
                <div>
                  <div className="text-2xl font-bold">12.8k</div>
                  <div className="text-sm text-gray-400">Product Sold</div>
                </div>
              </div>
              <div className="flex items-center">
                <Box size={24} className="text-green-400 mr-4" />
                <div>
                  <div className="text-2xl font-bold">145</div>
                  <div className="text-sm text-gray-400">Active Shop</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users size={24} className="text-purple-400 mr-4" />
                <div>
                  <div className="text-2xl font-bold">879</div>
                  <div className="text-sm text-gray-400">Customers</div>
                </div>
              </div>
            </div>
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
};

export default UserProfilePage;