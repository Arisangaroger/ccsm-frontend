import React from 'react';
import { FaFileAlt, FaUsers, FaHourglassHalf, FaChartLine } from 'react-icons/fa'; // Icons

const metrics = [
  { title: 'Total Complaints', value: '2,847', change: '+12%', trend: 'up', icon: FaFileAlt },
  { title: 'Registered Users', value: '12,583', change: '+8%', trend: 'up', icon: FaUsers },
  { title: 'Overdue Complaints', value: '187', change: '+5%', trend: 'up', icon: FaHourglassHalf },
  { title: 'Avg. Compliance Score', value: '76%', change: '+3%', trend: 'up', icon: FaChartLine },
];

const AdminMetricsSection = () => {
  return (
    <div className="grid grid-cols-1 my-5 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{metric.title}</p>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <p className={`text-xs mt-1 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}> 
              {metric.trend === 'up' ? '▲' : '▼'} {metric.change} vs last month
            </p>
          </div>
          <div className="text-blue-500">
            <metric.icon size={24} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminMetricsSection; 