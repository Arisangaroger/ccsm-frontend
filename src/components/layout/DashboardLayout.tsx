import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */} 
      <Sidebar />
      {/* Main Content Area */} 
      <main className="flex-1 overflow-y-auto scrollbar-hide bg-gray-100">
        <Outlet /> {/* This is where the specific role content will render */} 
      </main>
    </div>
  );
} 