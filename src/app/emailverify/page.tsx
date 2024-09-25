import React from 'react';
import { Mail } from 'lucide-react';

const EmailVerificationPage = () => {
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
            Verify your email <Mail className="ml-2 h-6 w-6" />
          </h2>
          <p className="text-gray-400 mb-8">
            Account activation link sent to your email address: hello@example.com Please follow the link inside to continue.
          </p>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
          >
            Skip for now
          </button>
          <p className="text-center text-sm text-gray-400">
            Didn't get the mail? <a href="#" className="text-blue-500 hover:underline">Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;