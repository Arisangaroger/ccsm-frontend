import React, { useState, useEffect } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

// Define a type for the chart data structure
interface ChartData {
  labels: string[];
  datasets: Array<any>; // Use a more specific type if possible, but 'any' is okay for quick fix
}

const AdminChartsSection = () => {
  const [categoryData, setCategoryData] = useState<ChartData | null>(null);
  const [provinceData, setProvinceData] = useState<ChartData | null>(null);
  const [trendData, setTrendData] = useState<ChartData | null>(null);

  // Mock "alternative backend" data
  const mockBackendData = {
    categories: [
      { label: 'Water', value: 300 },
      { label: 'Electricity', value: 250 },
      { label: 'Roads', value: 200 },
      { label: 'Healthcare', value: 150 },
      { label: 'Education', value: 100 },
      { label: 'Other', value: 50 },
    ],
    provinces: [
      { label: 'Kigali', value: 800 },
      { label: 'Northern', value: 600 },
      { label: 'Southern', value: 700 },
      { label: 'Eastern', value: 500 },
      { label: 'Western', value: 400 },
    ],
    trend: [
      { week: 'Week 1', value: 120 },
      { week: 'Week 2', value: 140 },
      { week: 'Week 3', value: 160 },
      { week: 'Week 4', value: 150 },
    ]
  };

  // Simulate fetching data from an "alternative backend"
  useEffect(() => {
    // In a real app, this would be an API call (e.g., fetch('/api/complaints'))
    const fetchData = () => {
      // Category Chart Data (Pie Chart)
      setCategoryData({
        labels: mockBackendData.categories.map(item => item.label),
        datasets: [{
          data: mockBackendData.categories.map(item => item.value),
          backgroundColor: [
            '#3b82f6', // Water
            '#60a5fa', // Electricity
            '#93c5fd', // Roads
            '#bfdbfe', // Healthcare
            '#dbeafe', // Education
            '#f3f4f6', // Other
          ],
          borderWidth: 1,
        }]
      });

      // Province Chart Data (Bar Chart)
      setProvinceData({
        labels: mockBackendData.provinces.map(item => item.label),
        datasets: [{
          label: 'Complaints',
          data: mockBackendData.provinces.map(item => item.value),
          backgroundColor: '#3b82f6',
          borderWidth: 1,
        }]
      });

      // Trend Chart Data (Line Chart)
      setTrendData({
        labels: mockBackendData.trend.map(item => item.week),
        datasets: [{
          label: 'Complaints',
          data: mockBackendData.trend.map(item => item.value),
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.3,
        }]
      });
    };

    fetchData();
  }, []);

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
          display: false,
          text: 'Chart Title'
      }
    },
    responsive: true,
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 900,
      },
      x: {
          // Add x-axis options if needed
      }
    },
  };

  const lineOptions = {
    ...chartOptions,
     scales: {
      y: {
        beginAtZero: true,
        max: 200,
      },
      x: {
          // Add x-axis options if needed
      }
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Complaints by Category */} 
      <div className="bg-white p-4 shadow rounded-lg h-80">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaints by Category</h3>
        {categoryData ? (
          <div className="h-56">
            <Pie data={categoryData} options={chartOptions} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-56 text-gray-500">Loading...</div>
        )}
      </div>

      {/* Complaints by Province */} 
      <div className="bg-white p-4 shadow rounded-lg h-80">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaints by Province</h3>
        {provinceData ? (
          <div className="h-56">
            <Bar data={provinceData} options={barOptions} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-56 text-gray-500">Loading...</div>
        )}
      </div>

      {/* Complaints Trend */} 
      <div className="bg-white p-4 shadow rounded-lg h-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Complaints Trend</h3>
          <select className="border rounded-md p, text-sm text-gray-700 p-1">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        {trendData ? (
          <div className="h-56">
            <Line data={trendData} options={lineOptions} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-56 text-gray-500">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default AdminChartsSection;
