import React from 'react';
import { Search, Bell, User, ChevronDown, Edit, Trash2 } from 'lucide-react';

const CategoriesPage = () => {
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

        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <p className="text-gray-400 mb-4">In this section you can find the list of all categories</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <select className="bg-gray-700 rounded p-2">
              <option>10</option>
            </select>
            <button className="bg-blue-500 rounded px-4 py-2">+ New Categorie</button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-gray-700 rounded py-2 px-4"
            />
            <select className="bg-gray-700 rounded p-2">
              <option>Select Status</option>
            </select>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-700">
              <th className="pb-2">NAME</th>
              <th className="pb-2">EDITOR</th>
              <th className="pb-2">PRODUCT</th>
              <th className="pb-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {['SERVICES', 'SOFTWARES', 'TOOLS'].map((category, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-4 flex items-center">
                  <div className="mr-2">📄</div>
                  <div>
                    <div>{category}</div>
                    <div className="text-sm text-gray-400">10 Nov 2023</div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                      PP
                    </div>
                    Username
                  </div>
                </td>
                <td className="py-4">{index + 1}</td>
                <td className="py-4">
                  <button className="mr-2"><Edit size={18} /></button>
                  <button><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-400">Showing 1 to 7 of 100 entries</div>
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
      </main>
    </div>
  );
};

export default CategoriesPage;