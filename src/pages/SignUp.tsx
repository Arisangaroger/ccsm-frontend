import React, { useState } from 'react';
import { FaIdCard, FaPhone, FaEnvelope, FaLock, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    nin: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="flex h-screen">
      {/* Left image */} 
      <div
        className="w-1/2 hidden md:block bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        }}
      ></div>

      {/* Right form */} 
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-sm px-6 text-sm">
          {/* Icon */} 
          <div className="flex justify-center mb-4">
            <div className="text-3xl bg-blue-100 text-blue-600 p-2 rounded-full">🏛️</div>
          </div>

          {/* Title */} 
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Create a Citizen Account</h2>
            <p className="text-xs text-gray-600">Join our community to make your voice heard</p>
          </div>

          {/* Form */} 
          <form onSubmit={handleSubmit} className="space-y-3">
            <InputWithIcon
              icon={<FaIdCard />}
              placeholder="Enter your NIN"
              name="nin"
              value={formData.nin}
              onChange={handleChange}
              required
            />
            <InputWithIcon
              icon={<FaPhone />}
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <InputWithIcon
              icon={<FaEnvelope />}
              placeholder="Enter your email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputWithIcon
              icon={<FaLock />}
              placeholder="Create a password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <p className="text-[10px] text-gray-500 -mt-1">
              Password must be at least 8 characters
            </p>

            <div className="flex items-center space-x-2 text-xs text-gray-700">
              <input type="checkbox" className="w-3.5 h-3.5" />
              <label>Verify via Email or SMS (optional)</label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
            >
              Register
            </button>
          </form>

          {/* Footer */} 
          <div className="text-center text-xs text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login Here
            </Link>
          </div>
          <p className="text-center text-[10px] text-gray-500 mt-1">
            By registering, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>

          {/* Help button */} 
           <div className="absolute bottom-4 right-4">
            <button className="bg-purple-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center text-sm">
              <FaQuestionCircle className="mr-1"/> Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface InputWithIconProps {
  icon: ReactNode;
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputWithIcon = ({
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: InputWithIconProps) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-sm">
      {icon}
    </span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
      required={required}
    />
  </div>
);

export default SignUp;
