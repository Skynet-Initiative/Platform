"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Lock } from 'lucide-react';

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900">
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
          Welcome to the Future of<br />Digital <span className="text-blue-500">Entrepreneurship</span>
        </h1>
        <p className="text-gray-400">Your Key To Digital Success</p>
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        <div className="bg-gray-800 p-12 rounded-lg w-[450px]">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
            Reset Password <Lock className="ml-2 h-6 w-6" />
          </h2>
          <p className="text-gray-400 mb-8">for john.doe@email.com</p>
          <form>
            <div className="mb-4">
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-400 mb-1">
                New Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="new-password"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                Check here to indicate that you have read and agree to our{' '}
                <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
            >
              Send Reset Link
            </button>
          </form>
          <a href="#" className="flex items-center text-blue-500 hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to log in
          </a>
          <p className="text-center text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;