"use client"
import React, { useState, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const TwoStepVerificationPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && code[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

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
{/* Right side */}
      <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        <div className="bg-gray-800 p-12 rounded-lg w-[450px]">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
            Two-Step Verification <MessageSquare className="ml-2 h-6 w-6" />
          </h2>
          <p className="text-gray-400 mb-8">
            Go check your Google Authenticator to enter the necessary code in the field just below.
          </p>
          <p className="text-gray-400 mb-4">Type your 6 digit security code</p>
          <div className="flex justify-between mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
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

export default TwoStepVerificationPage;