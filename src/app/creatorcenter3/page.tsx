"use client"
import React, { useState } from 'react';
import { ChevronDown, Bell, User, Moon } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-indigo-900 text-white p-4 h-screen">
    <div className="flex items-center mb-8">
      <div className="text-2xl font-bold">Skynet</div>
    </div>
    <nav>
      {[
        { icon: "🛒", label: "Store" },
        { icon: "📚", label: "Library" },
        { icon: "💬", label: "Comms" },
        { icon: "📄", label: "Pages", hasSubmenu: true },
        { icon: "💰", label: "Pricing", indent: true },
        { icon: "👥", label: "Users Account" },
        { icon: "🔒", label: "Roles & Permissions" },
        { icon: "📊", label: "Datatables" },
        { icon: "📈", label: "Dashboard" },
        { icon: "🛍️", label: "Shop", hasSubmenu: true },
        { icon: "📄", label: "Invoices" },
        { icon: "📊", label: "Analytics", hasSubmenu: true },
        { icon: "🔐", label: "Sky Security", hasSubmenu: true },
        { icon: "👨‍💻", label: "Developers", hasSubmenu: true },
        { icon: "❓", label: "Support" },
        { icon: "📖", label: "Documentation" },
      ].map((item, index) => (
        <div key={index} className={`flex items-center mb-2 ${item.indent ? 'ml-4' : ''}`}>
          <span className="mr-2">{item.icon}</span>
          <span>{item.label}</span>
          {item.hasSubmenu && <ChevronDown className="ml-auto" size={16} />}
        </div>
      ))}
    </nav>
  </div>
);

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-900">
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search..."
        className="w-96 px-4 py-2 rounded-full bg-gray-800 text-white"
      />
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <img src="/api/placeholder/20/20" alt="Flag" className="mr-1" />
        <span className="text-white">Eng</span>
        <ChevronDown className="text-white" size={16} />
      </div>
      <Moon className="text-white" />
      <Bell className="text-white" />
      <User className="text-white" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">JOIN NOW</button>
    </div>
  </header>
);

const BusinessSetupForm = () => {
  const [businessType, setBusinessType] = useState('individual');

  return (
    <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Create your own business</h2>
      <p className="text-gray-400 mb-6">Provide data with this form to setup your business.</p>
      
      <div className="flex mb-6">
        <button
          className={`mr-2 px-4 py-2 rounded ${businessType === 'individual' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setBusinessType('individual')}
        >
          INDIVIDUAL
        </button>
        <button
          className={`px-4 py-2 rounded ${businessType === 'company' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setBusinessType('company')}
        >
          COMPANY
        </button>
      </div>
      
      <div className="space-y-4">
        <input className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Username" defaultValue="3467 9830 3453 2340" />
        <input className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Country" defaultValue="France" />
        <div className="flex space-x-4">
          <input className="w-1/2 bg-gray-700 text-white p-2 rounded" placeholder="Name" defaultValue="France" />
          <input className="w-1/2 bg-gray-700 text-white p-2 rounded" placeholder="Username" defaultValue="France" />
        </div>
        <div className="flex space-x-4">
          <input className="w-1/2 bg-gray-700 text-white p-2 rounded" placeholder="City" defaultValue="France" />
          <input className="w-1/2 bg-gray-700 text-white p-2 rounded" placeholder="State / Province / County" defaultValue="France" />
        </div>
        <input className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Zip / Postal code" defaultValue="Zip / Postal code" />
        <input className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Address, House / Building number" defaultValue="Address, House / Building number" />
        <input className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Additional Address, House / Building number (Optional)" defaultValue="Address, House / Building number" />
        <input className="w-full bg-gray-700 text-white p-2 rounded" placeholder="Phone Number (Optional)" defaultValue="+77641 5484 654484" />
        <textarea className="w-full bg-gray-700 text-white p-2 rounded h-24" placeholder="Business Details (Optional)" defaultValue="Business Details" />
        <textarea className="w-full bg-gray-700 text-white p-2 rounded h-24" placeholder="Terms of Service" defaultValue="Terms of Service" />
      </div>
      
      <div className="flex justify-between mt-8">
        <button className="bg-gray-700 text-white px-6 py-2 rounded">Previous</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

const ProgressIndicator = () => (
  <div className="flex flex-col items-center ml-8">
    <div className="bg-blue-500 w-4 h-4 rounded-full mb-2"></div>
    <div className="bg-blue-500 w-0.5 h-16 mb-2"></div>
    <div className="bg-blue-500 w-4 h-4 rounded-full mb-2"></div>
    <div className="bg-gray-600 w-0.5 h-16 mb-2"></div>
    <div className="bg-gray-600 w-4 h-4 rounded-full"></div>
    <div className="text-blue-500 mt-2">Step 3</div>
  </div>
);

const Footer = () => (
  <footer className="text-center p-4 text-gray-500 text-sm">
    <p>© 2021-2023, All rights Skynet</p>
    <div className="mt-2">
      <a href="#" className="mr-4">License</a>
      <a href="#" className="mr-4">Documentation</a>
      <a href="#">Support</a>
    </div>
  </footer>
);

const BusinessSetupPage = () => (
  <div className="flex bg-gray-900 min-h-screen text-white">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <div className="flex p-8">
        <div className="flex-1">
          <BusinessSetupForm />
        </div>
        <ProgressIndicator />
      </div>
      <Footer />
    </div>
  </div>
);

export default BusinessSetupPage;