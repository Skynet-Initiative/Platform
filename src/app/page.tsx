"use client"
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex h-screen bg-[#0E1224]">
      {/* Left side */}
      <div className="w-1/2 flex flex-col justify-center items-start p-12">
        <div className="mb-12">
          {/* Placeholder for logo */}
          <div className="w-8 h-8 bg-white rounded-sm"></div>
        </div>
        <div className="mb-8">
          {/* Placeholder for 3D cube image */}
          <div className="w-48 h-48 bg-blue-500 opacity-75 rounded-lg"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the Future of<br />Digital <span className="text-[#3B82F6]">Entrepreneurship</span>
        </h1>
        <p className="text-gray-400">Your Key To Digital Success</p>
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-[#141A31] flex justify-center items-center">
        <div className="bg-[#1C2237] p-12 rounded-lg w-96">
          <h2 className="text-2xl font-bold text-white mb-8">Log in to your account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-[#141A31] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-3 py-2 bg-[#141A31] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#3B82F6] focus:ring-[#3B82F6] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                  Remember for 30 days
                </label>
              </div>
              <a href="#" className="text-sm text-[#3B82F6] hover:underline">
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3B82F6] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6">
            <button className="w-full bg-[#141A31] text-white py-2 px-4 rounded-md hover:bg-[#1C2237] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 flex items-center justify-center">
              <img src="/api/placeholder/20/20" alt="Google logo" className="mr-2" />
              Sign in with Google
            </button>
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="text-[#3B82F6] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;