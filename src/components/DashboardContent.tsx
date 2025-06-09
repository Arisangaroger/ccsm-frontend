import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import {
  FaFileExport,
  FaUsers,
  FaChartPie as FaChartPieRegular, // Renamed to avoid conflict with faChartPie from fontawesome
  FaChartBar,
  FaTable,
  FaMapMarkedAlt,
  FaClipboardList,
  FaCog,
  FaBell,
  FaShieldAlt,
  FaQuestion,
  FaEnvelope, FaHourglassHalf, FaSpinner, FaCheckCircle,
  FaTimesCircle, FaClock, FaBuilding, FaSearch, FaExclamationCircle
} from "react-icons/fa";
import {
  FiUser,
  FiHome,
  FiBarChart2,
  FiClipboard,
  FiSettings,
  FiRefreshCcw,
  FiAlertCircle,
  FiBell as FiBellOutline,
  FiLock,
} from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faChartPie, faTable, faBolt, faUserPlus, faCalendarAlt, faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Import ArcElement for Doughnut charts
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Placeholder components for admin dashboard sections (from user provided code)
const AdminOverviewMetrics = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">Total Complaints</p>
        <p className="text-2xl font-bold text-gray-900">2,847</p>
        <p className="text-xs text-green-500 mt-1">↑ 12% vs last month</p>
      </div>
      <div className="text-blue-500">
        <FaEnvelope size={24} />
      </div>
    </div>
     <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">Registered Users</p>
        <p className="text-2xl font-bold text-gray-900">12,583</p>
        <p className="text-xs text-green-500 mt-1">↑ 8% vs last month</p>
      </div>
      <div className="text-blue-500">
        <FaUsers size={24} />
      </div>
    </div>
     <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">Overdue Complaints</p>
        <p className="text-2xl font-bold text-gray-900">187</p>
        <p className="text-xs text-red-500 mt-1">↑ 5% vs last month</p>
      </div>
      <div className="text-red-500">
        <FaTimesCircle size={24} />
      </div>
    </div>
     <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">Avg. Compliance Score</p>
        <p className="text-2xl font-bold text-gray-900">76%</p>
        <p className="text-xs text-green-500 mt-1">↑ 3% vs last month</p>
      </div>
      <div className="text-blue-500">
        <FaChartBar size={24} />
      </div>
    </div>
  </div>
);

const ComplaintsByStatus = () => (
  <div className="bg-white p-4 border-1 border-gray-300  shadow rounded-lg">
    <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold text-gray-900">Complaints by Status</h3>
        {/* Placeholder for menu icon */}
        <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg></button>
    </div>

    {/* Placeholder for status cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div className="p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-gray-600">Pending</p>
        <p className="text-xl font-bold text-blue-700">658</p>
         <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
          <div className="bg-blue-600 h-1.5 rounded-full w-[23%]"></div>
        </div>
         <p className="text-xs text-gray-600 mt-1">23%</p>
      </div>
      <div className="p-3 bg-yellow-50 rounded-md">
        <p className="text-sm text-gray-600">In Review</p>
        <p className="text-xl font-bold text-yellow-700">512</p>
         <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
          <div className="bg-yellow-600 h-1.5 rounded-full w-[18%]"></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">18%</p>
      </div>
      <div className="p-3 bg-purple-50 rounded-md">
        <p className="text-sm text-gray-600">In Progress</p>
        <p className="text-xl font-bold text-purple-700">911</p>
         <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
          <div className="bg-purple-600 h-1.5 rounded-full w-[32%]"></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">32%</p>
      </div>
      <div className="p-3 bg-green-50 rounded-md">
        <p className="text-sm text-gray-600">Resolved</p>
        <p className="text-xl font-bold text-green-700">766</p>
         <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
          <div className="bg-green-600 h-1.5 rounded-full w-[27%]"></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">27%</p>
      </div>
    </div>
  </div>
);

const ComplaintsByCategory = () => (
   <div className="bg-white p-4 border-1 border-gray-300 shadow rounded-lg flex flex-col">
    <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold text-gray-900">Complaints by Category</h3>
       {/* Placeholder for menu icon */}
       <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg></button>
    </div>
    {/* Placeholder for Chart */}
    <div className="flex-grow bg-gray-200 flex items-center justify-center text-gray-500">
      Complaints by Category Chart Placeholder
    </div>
  </div>
);

const ComplaintsByProvince = () => (
   <div className="bg-white p-4 shadow border-1 border-gray-300 rounded-lg flex flex-col">
    <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold text-gray-900">Complaints by Province</h3>
        {/* Placeholder for menu icon */}
       <button className="text-gray-400 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg></button>
    </div>
    {/* Placeholder for Chart */}
    <div className="flex-grow bg-gray-200 flex items-center justify-center text-gray-500">
      Complaints by Province Chart Placeholder
    </div>
  </div>
);

const ComplaintsTrend = () => (
  <div className="bg-white p-4 shadow border-1 border-gray-300 rounded-lg flex flex-col">
     <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-semibold text-gray-900">Complaints Trend</h3>
       <select className="border rounded-md text-sm p-1"><option>Weekly</option></select>
    </div>
    {/* Placeholder for Chart */}
    <div className="flex-grow bg-gray-200 flex items-center justify-center text-gray-500">
      Complaints Trend Chart Placeholder
    </div>
  </div>
);

// Placeholder components for Admin sections that were imported (if they existed as separate files)
// const AdminMetricsSection = () => <div className="bg-white p-4 border-2 border-gray-500 shadow rounded-lg flex items-center justify-center">Admin Metrics Section Placeholder</div>;
// const ComplaintsStatusSection = () => <div className="bg-white p-4 border-1 border-gray-300  shadow rounded-lg flex items-center justify-center">Complaints Status Section Placeholder</div>;
// const AdminChartsSection = () => <div className="bg-white p-4 border-1 border-gray-300  shadow rounded-lg flex items-center justify-center">Admin Charts Section Placeholder</div>;

const DashboardContent: React.FC = () => {
  const { role } = useUser();
  // Assuming a state for notification count, replace with actual logic
  const [notificationCount] = useState(8); // Example count based on the image

  // Data for Complaints Performance Bar Chart (Officer Role) - based on the image
  const complaintsPerformanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Resolved',
        data: [65, 78, 92, 85], // Sample data based on approximate values in image
        backgroundColor: 'rgba(75, 192, 192, 0.8)', // Greenish color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'In Progress',
        data: [45, 58, 63, 70], // Sample data
        backgroundColor: 'rgba(54, 162, 235, 0.8)', // Blueish color
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pending',
        data: [32, 38, 28, 30], // Sample data
        backgroundColor: 'rgba(255, 206, 86, 0.8)', // Yellowish color
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Overdue',
        data: [18, 14, 10, 8], // Sample data
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Reddish color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const complaintsPerformanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false, // Title is already in the card header
      },
      legend: {
         position: 'top' as const,
         labels: {
            boxWidth: 12,
         }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Period',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Complaints',
        },
        beginAtZero: true,
        max: 100, // Adjust max based on your expected data range
      },
    },
  };

  // Data for Distribution by Category Donut Chart (Officer Role) - based on the image
   const distributionByCategoryData = {
    labels: ['Water Supply', 'Billing', 'Sanitation', 'Quality', 'Other'],
    datasets: [
      {
        data: [40, 20, 15, 15, 10], // Sample data based on approximate proportions in image
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)', // Blue
          'rgba(255, 159, 64, 0.8)', // Orange
          'rgba(153, 102, 255, 0.8)', // Purple
          'rgba(75, 192, 192, 0.8)', // Teal
          'rgba(128, 128, 128, 0.8)', // Gray
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(128, 128, 128, 1)',
        ],
        borderWidth: 1,
      },   ],
  };

  const distributionByCategoryOptions = {
    responsive: true,
    maintainAspectRatio: false,
     plugins: {
      title: {
        display: false, // Title is already in the card header
      },
       legend: {
         position: 'right' as const,
         labels: {
            boxWidth: 12,
         }
       }
    },
  };

  // Placeholder data for metrics (Officer Role) - based on the image
  const officerMetrics = [
    { label: "Total Complaints", value: "1,284", detail: "↑ 12% from last month", color: "text-blue-500", icon: <FaEnvelope /> },
    { label: "Pending", value: "128", detail: "↑ 8% from last week", color: "text-yellow-500", icon: <FaClock /> },
    { label: "In Progress", value: "342", detail: "↓ 5% from last week", color: "text-blue-500", icon: <FaSpinner /> },
    { label: "Resolved", value: "814", detail: "↑ 15% from last month", color: "text-green-500", icon: <FaCheckCircle /> },
    { label: "Overdue", value: "48", detail: "↑ 3% from yesterday", color: "text-red-500", icon: <FaExclamationCircle /> },
    { label: "Average Resolution Time", value: "4.2 days", detail: "↓ 0.5 days from last month", color: "text-purple-500", icon: <FaHourglassHalf /> },
    { label: "Active Districts", value: "12", detail: "Out of 15 total districts", color: "text-blue-500", icon: <FaBuilding /> },
  ];

  // Placeholder data for tables (Officer Role) - based on the image
  const officerUpcomingDeadlines = [
    { id: 'C-2023-0124', title: 'Water supply interrupted for 3 days', assigned: 'Gasabo', deadline: 'Jun 5, 2023 (2 days left)', status: 'In Progress', action: 'Send Reminder' },
    { id: 'C-2023-0132', title: 'Billing error on water meter reading', assigned: 'Kicukiro', deadline: 'Jun 7, 2023 (4 days left)', status: 'Pending', action: 'Follow Up' },
    { id: 'C-2023-0145', title: 'Water quality concerns in Kimironko area', assigned: 'Gasabo', deadline: 'Jun 12, 2023 (9 days left)', status: 'In Progress', action: 'Follow Up' },
  ];

  const officerRecentComplaints = [
    { time: 'Today, 10:42 AM', title: 'Water leak near Nyabugogo market', tags: ['Water'], status: 'New', action: 'Assign' },
    { time: 'Today, 09:15 AM', title: 'No water pressure in Kacyiru sector', tags: ['Water'], status: 'New', action: 'Assign' },
    { time: 'Yesterday, 16:30 PM', title: 'Overcharging on water bill', tags: ['Billing'], status: 'Assigned', action: 'To Kicukiro' },
    { time: 'Yesterday, 14:05 PM', title: 'Sewage overflow on main street', tags: ['Sanitation'], status: 'Assigned', action: 'View' },
  ];

  const officerDistrictPerformance = [
    { district: 'Gasabo', avgResolution: '3.2 days', resolvedPercent: 92, complaintsCount: 245, performance: 'Excellent' },
    { district: 'Kicukiro', avgResolution: '4.8 days', resolvedPercent: 78, complaintsCount: 187, performance: 'Good' },
    { district: 'Nyarugenge', avgResolution: '5.1 days', resolvedPercent: 65, complaintsCount: 203, performance: 'Average' },
    { district: 'Bugesera', avgResolution: '7.4 days', resolvedPercent: 42, complaintsCount: 124, performance: 'Poor' },
  ];

  const officerQuickActions = [
    { label: 'Assign New Complaint', icon: faUserPlus, link: '#' },
    { label: 'Reassign Complaint', icon: faBolt, link: '#' },
    { label: 'Set Deadlines', icon: faCalendarAlt, link: '#' },
    { label: 'Download Reports', icon: faDownload, link: '#' },
    { label: 'Send Notice', icon: faPaperPlane, link: '#' },
  ];


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Admin Dashboard Content - Based on provided image */}
      {role === "admin" && (
        <div className="">
          {/* Header with Title and Filters */}
          <div className="flex flex-col border-1 rounded-md p-2 bg-white mb-5 border-gray-300  sticky top-0 md:flex-row items-start md:items-center justify-between ">
            <div className="block">
              <h1 className="text-xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-500 text-sm">System monitoting and Analytics</p>
            </div>
            <div className="flex items-center space-x-4 p-4">
              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                {/* Bell icon with notification count */}
                <div className="relative">
                  <FaBell size={16} className="text-gray-400" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-3 w-3 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </div>

                {/* Question Mark */}
                <FaQuestion size={16} className="text-gray-400" />

                {/* Gear */}
                <FaCog size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 border border-gray-300 mb-4 rounded-md bg-white">
            {/* Filters and Export Button */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="block ">
                <p className="text-gray-500">Time Range</p>
                <select className="border border-gray-300  rounded-md p-2 text-sm">
               
                <option className="text-black">Last 30 Days</option>
              </select>
              </div>
              <div className="block">
                <p className="text-gray-500">Location </p>
                <select className="border border-gray-300 rounded-md p-2 text-sm">
              
                <option className="">All locations</option>
              </select>
              </div>
              <div className="block">
                <p className="text-gray-500">Category</p>
                <select className="border border-gray-300 rounded-md p-2 text-sm">
                
                <option>All categories</option>
              </select>
              </div>
              <div className="block">
                <p className="text-gray-500">Institution</p>
                <select className="border border-gray-300 rounded-md p-2 text-sm">
               
                <option>All institutions</option>
              </select>
              </div>
             
            </div>
           <div className="block">
           <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2">
              <FaFileExport /> <span>Export Report</span>
            </button>
           </div>
          </div>

          {/* Metrics Row */}
          <AdminOverviewMetrics />

          {/* Complaints by Status */}
          <ComplaintsByStatus />

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Complaints by Category Chart */}
            <ComplaintsByCategory />

            {/* Complaints by Province Chart */}
            <ComplaintsByProvince />

            {/* Complaints Trend Chart */}
            <ComplaintsTrend />
          </div>

          {/* Insights & Recommendations, Alerts & Notifications - Add these sections if needed */}
        </div>
      )}

      {/* Officer Dashboard Content - Based on provided image */}
      {role === "officer" && (
        <div className=" bg-gray-100 min-h-screen">
          {/* Header */}
          <div className="flex justify-between items-center rounded-md p-4 bg-white  mb-5 shadow-sm">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 flex items-center">
              <span className="w-5 h-5 mr-2 bg-gray-400 rounded flex items-center justify-center text-white text-xs">🏛️</span>
              Institution Dashboard
              </h1>
            <p className="text-sm text-gray-500">WASAC - Water & Sanitation</p>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Go to Complaint Inbox
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 flex items-center">
              <FontAwesomeIcon icon={faChartColumn} className="mr-2" /> View Stats
            </button>
            <button className="bg-white text-gray-600 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 flex items-center relative">
              <FaBell size={18} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">8</span>
            </button>
          </div>
        </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {officerMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.label}</p>
                <h3 className="text-xl font-bold text-gray-800">{metric.value}</h3>
                <p className={`text-xs ${metric.color}`}>{metric.detail}</p>
              </div>
              <div className={`text-2xl ${metric.color}`}>
                {metric.icon}
              </div>
            </div>
          ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Complaints Performance Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Complaints Performance</h3>
                <div className="flex space-x-2">
                  <select className="border border-gray-500 rounded-md text-sm p-1">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                  <select className="border rounded-md border-gray-500 text-sm p-1">
                    <option>All Categories</option>
                    <option>Water Supply</option>
                    <option>Billing</option>
                    <option>Sanitation</option>
                    <option>Quality</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              {/* Bar Chart */}
              <div className="h-64">
                <Bar data={complaintsPerformanceData} options={complaintsPerformanceOptions} />
              </div>
            </div>

            {/* Distribution by Category Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribution by Category</h3>
               {/* Donut Chart */}
              <div className="h-64">
                 <Doughnut data={distributionByCategoryData} options={distributionByCategoryOptions} />
              </div>
            </div>
          </div>
          {/* Tables Section */}
          <div className="grid grid-cols-1 gap-6 mb-8">
             {/* Upcoming Deadlines Table */}
             <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Deadlines</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complaint ID</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned District</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline Date</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {officerUpcomingDeadlines.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline cursor-pointer">{item.id}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{item.title}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{item.assigned}</td>
                      <td className={`px-4 py-2 whitespace-nowrap text-sm ${item.status === 'Pending' || item.deadline.includes('left') ? 'text-red-600' : 'text-gray-800'}`}>{item.deadline}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''
                         }`}>{item.status}</span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

             {/* District Performance Snapshot */}
             <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">District Performance Snapshot</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District Name</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Resolution Time</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resolved % On Time</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complaints Count</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  </tr>
                </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                  {officerDistrictPerformance.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800">{item.district}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{item.avgResolution}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                         <div className="flex items-center">
                           <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                             <div className={`h-2 rounded-full ${item.resolvedPercent > 75 ? 'bg-green-500' : item.resolvedPercent > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${item.resolvedPercent}%` }}></div>
                           </div>
                           <span className="text-xs text-gray-800">{item.resolvedPercent}%</span>
                         </div>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">{item.complaintsCount}</td>
                       <td className="px-4 py-2 whitespace-nowrap text-sm">
                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.performance === 'Excellent' ? 'bg-green-100 text-green-800' :
                            item.performance === 'Good' ? 'bg-blue-100 text-blue-800' :
                            item.performance === 'Average' ? 'bg-yellow-100 text-yellow-800' :
                            item.performance === 'Poor' ? 'bg-red-100 text-red-800' : ''
                         }`}>{item.performance}</span>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
             </div>

          {/* Recent Complaints Table */}
             <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-semibold text-gray-800">Recent Complaints</h3>
                 <span className="text-xs px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">Live Feed</span>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complaint</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {officerRecentComplaints.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                         {item.title}
                         <div className="mt-1">
                            {item.tags.map((tag, tagIndex) => (
                               <span key={tagIndex} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mr-2">{tag}</span>
                            ))}
                            {item.action === 'To Kicukiro' && <span className="text-xs text-gray-500">to Kicukiro</span>} { /* Assuming 'To Kicukiro' is a specific action/detail */}
                         </div>
                      </td>
                       <td className="px-4 py-2 whitespace-nowrap text-sm">
                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.status === 'New' ? 'bg-yellow-100 text-yellow-800' : item.status === 'Assigned' ? 'bg-blue-100 text-blue-800' : ''
                         }`}>{item.status}</span>
                       </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer">{item.action !== 'To Kicukiro' ? item.action : 'View'} { /* Changed action for 'To Kicukiro' case */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

            </div>

          {/* Quick Actions Section */}
          <div className="mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
               <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                 {officerQuickActions.map((action, index) => (
                   <button key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors">
                     <FontAwesomeIcon icon={action.icon} size="lg" className="mb-2" />
                     <span className="text-sm font-medium text-center">{action.label}</span>
                   </button>
                 ))}
               </div>
            </div>
          </div>

        </div>
      )}

      {/* Citizen Dashboard Content */}
      {role === "citizen" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Citizen Dashboard Content</h2>
          <p>Content specific to the Citizen role goes here.</p>
        </div>
      )}

      {/* Default Content (if role is not recognized or set) */}
      {!["admin", "officer", "citizen"].includes(role) && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>Select a role or log in to see specific content.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
