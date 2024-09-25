"use client"
import React from 'react';
import { ChevronDown, Bell, User, Moon, Search, Plus, ChevronUp, Edit, Trash, MoreVertical } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-indigo-900 text-white p-4 h-screen">
    <div className="flex items-center mb-8">
      <div className="text-2xl font-bold">Skynet</div>
    </div>
    <nav>
      {[
        { icon: "🛒", label: "Store", active: true },
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
        <div key={index} className={`flex items-center mb-2 ${item.indent ? 'ml-4' : ''} ${item.active ? 'bg-blue-600' : ''}`}>
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

const ProductTable = () => (
  <div className="bg-indigo-900 p-6 rounded-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-white">Product</h2>
      <p className="text-gray-400">In this section you can find all of your products</p>
    </div>
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <select className="bg-gray-700 text-white p-2 rounded mr-2">
          <option>10</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <Plus size={16} className="mr-2" /> Create Product
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Product"
          className="bg-gray-700 text-white p-2 rounded mr-2"
        />
        <select className="bg-gray-700 text-white p-2 rounded">
          <option>Select Status</option>
        </select>
      </div>
    </div>
    <table className="w-full text-left text-white">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="py-2">PRODUCT <ChevronUp size={16} className="inline" /></th>
          <th>ID <ChevronDown size={16} className="inline" /></th>
          <th>EDITOR <ChevronDown size={16} className="inline" /></th>
          <th>STATUS <ChevronDown size={16} className="inline" /></th>
          <th>STOCK <ChevronDown size={16} className="inline" /></th>
          <th>PRICE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: 'Skyhost', date: '10 Nov 2023', id: '#5089', editor: 'Username', status: 'Online', stock: '09 May 2022', price: 'Paid' },
          { name: 'Skytest', date: '10 Nov 2023', id: '#5089', editor: 'Username', status: 'Not verified', stock: '09 May 2022', price: 'Paid' },
          { name: 'Skytest2', date: '10 Nov 2023', id: '#5089', editor: 'Username', status: 'Banned', stock: '09 May 2022', price: 'Paid' },
        ].map((product, index) => (
          <tr key={index} className="border-b border-gray-700">
            <td className="py-2">
              <div className="flex items-center">
                <span className="mr-2">📄</span>
                <div>
                  <div>{product.name}</div>
                  <div className="text-gray-500 text-sm">{product.date}</div>
                </div>
              </div>
            </td>
            <td className="text-blue-400">{product.id}</td>
            <td>
              <div className="flex items-center">
                <span className="mr-2">👤</span>
                {product.editor}
              </div>
            </td>
            <td>
              <span className={`px-2 py-1 rounded ${
                product.status === 'Online' ? 'bg-green-500' :
                product.status === 'Not verified' ? 'bg-red-500' :
                'bg-yellow-500'
              }`}>
                {product.status}
              </span>
            </td>
            <td>{product.stock}</td>
            <td>
              <span className="bg-green-500 px-2 py-1 rounded">{product.price}</span>
            </td>
            <td>
              <div className="flex items-center">
                <Edit size={16} className="mr-2 cursor-pointer" />
                <Trash size={16} className="mr-2 cursor-pointer" />
                <MoreVertical size={16} className="cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-between items-center mt-4">
      <div className="text-gray-400">Showing 1 to 7 of 100 entries</div>
      <div className="flex">
        <button className="bg-gray-700 text-white px-3 py-1 rounded mr-1">Previous</button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded mr-1">1</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded mr-1">2</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded mr-1">3</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded mr-1">4</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded mr-1">5</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded">Next</button>
      </div>
    </div>
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

const ProductManagementPage = () => (
  <div className="flex bg-gray-900 min-h-screen text-white">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <div className="p-8">
        <ProductTable />
      </div>
      <Footer />
    </div>
  </div>
);

export default ProductManagementPage;