"use client"

import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="flex h-screen bg-[#0A0E1A]">
      {/* Left side */}
      <div className="w-1/2 flex flex-col justify-center items-start p-12">
        <div className="mb-12">
          {/* Logo placeholder */}
          <div className="w-8 h-8 bg-white rounded-sm"></div>
        </div>
        <div className="mb-8">
          {/* 3D cube image placeholder */}
          <div className="w-48 h-48 bg-blue-500 opacity-75 rounded-lg"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the Future of<br />Digital <span className="text-[#3B82F6]">Entrepreneurship</span>
        </h1>
        <p className="text-gray-400">Your Key To Digital Success</p>
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-[#141B32] flex justify-center items-center">
        <div className="bg-[#1C2644] p-12 rounded-lg w-[450px]">
          <h2 className="text-3xl font-bold text-white mb-2">Register now</h2>
          <p className="text-gray-400 mb-8">Welcome to Skynet! Please enter your details.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-[#141B32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                placeholder="mail@skynet-initiative.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="shop" className="block text-sm font-medium text-gray-400 mb-1">
                Shop Name
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="shop"
                  className="w-1/2 px-3 py-2 bg-[#141B32] text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  placeholder="shop"
                />
                <span className="w-1/2 px-3 py-2 bg-[#141B32] text-gray-400 rounded-r-md">.myskynet.store</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-3 py-2 bg-[#141B32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
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
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400 mb-1">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  className="w-full px-3 py-2 bg-[#141B32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-[#3B82F6] focus:ring-[#3B82F6] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                Check here to indicate that you have read and agree to our{' '}
                <a href="#" className="text-[#3B82F6] hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-[#3B82F6] hover:underline">Privacy Policy</a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3B82F6] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 mb-4"
            >
              Sign in
            </button>
          </form>
          <button className="w-full bg-[#141B32] text-white py-2 px-4 rounded-md hover:bg-[#1C2644] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 flex items-center justify-center mb-4">
            <img src="/api/placeholder/20/20" alt="Google logo" className="mr-2" />
            Sign in with Google
          </button>
          <p className="text-center text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-[#3B82F6] hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;