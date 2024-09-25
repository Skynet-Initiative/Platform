import React from 'react';
import { Lock, ArrowLeft } from 'lucide-react';

const ForgotPasswordPage = () => {
  return (
    <div className="flex h-screen bg-gray-900">

      <div className="w-1/2 flex flex-col justify-center items-start p-12">
        <div className="mb-12">
          <div className="w-8 h-8 bg-white rounded-sm"></div>
        </div>
        <div className="mb-8">

          <div className="w-48 h-48 bg-blue-500 opacity-75 rounded-lg"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the Future of<br />Digital <span className="text-blue-500">Entrepreneurship</span>
        </h1>
        <p className="text-gray-400">Your Key To Digital Success</p>
      </div>

      <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        <div className="bg-gray-800 p-12 rounded-lg w-[450px]">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
            Forgot Password? <Lock className="ml-2 h-6 w-6" />
          </h2>
          <p className="text-gray-400 mb-8">
            Enter your email, and we'll send you instructions to reset your password
          </p>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="mail@skynet-initiative.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
            >
              Send Reset Link
            </button>
          </form>
          <a href="#" className="flex items-center text-blue-500 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;