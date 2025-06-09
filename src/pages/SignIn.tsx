import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaQuestionCircle, FaEnvelope, FaLock } from 'react-icons/fa'; // Import FaQuestionCircle, FaEnvelope, FaLock from 'fa'
import type { ChangeEvent, FormEvent } from 'react';

// Placeholder for InputWithIcon - define if needed again, or use direct input

const SignIn = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add login logic here
  };

  return (
    <div className="flex h-screen">
      {/* Left image/illustration section */} 
      <div
        className="w-1/2 hidden md:flex items-center justify-center bg-cover bg-center p-6"
        style={{
          backgroundImage:
            "url('https://cdni.iconscout.com/illustration/premium/thumb/government-building-5312031-4442574.png')", // Using a different placeholder image
          backgroundColor: '#3b82f6', // Blue background as in the image
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="text-white text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Your Voice. Your Rights. Our Response.</h1>
          <p className="text-lg">Report issues. Track resolutions. Be heard.</p>
        </div>
      </div>

      {/* Right Login Form Section */} 
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 relative">
        {/* absolute positioning for help button */} 
        <div className="w-full max-w-sm text-sm">
          {/* Icon */} 
          <div className="flex justify-center mb-6">
            <div className="text-3xl bg-blue-100 text-blue-600 p-2 rounded-full">🏛️</div>
          </div>

          {/* Title */} 
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Login to Continue</h2>
          </div>

          {/* Form */} 
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone Number</label>
              <div className="relative">
                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500"><FaEnvelope /></span>
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email or phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500"><FaLock /></span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
                {/* Eye icon for password visibility - add functionality if needed */} 
                 <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">👁️</span>
              </div>
              <div className="text-right mt-1">
                <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">Forgot Password?</Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 font-medium"
            >
              <span>Login</span> <FaArrowRightLong />
            </button>
          </form>

          {/* Footer Links */} 
          <div className="text-center mt-6 text-gray-600 text-sm">
            <p>Don't have an account? Contact your institution or admin.</p>
          </div>
          <div className="text-center mt-2 text-gray-600 text-xs">
            <p>Need help? Contact support at <a href="mailto:support@example.gov" className="text-blue-600 hover:underline">support@example.gov</a></p>
          </div>

          {/* Help button in bottom right corner */} 
           <div className="absolute bottom-6 right-6">
            <button className="bg-purple-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center text-sm">
              <FaQuestionCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 