import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const DashboardPage = () => {
  // State for interactivity
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [marketData, setMarketData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Market Trends',
        data: [3000, 3100, 3200, 3300, 3400],
        borderColor: '#E85A9C',
        backgroundColor: '#FDCEDF',
      },
    ],
  });

  // Mock data
  const investments = [
    { id: 1, name: 'S&P 500 Index Fund', return: '+7.5%', risk: 'Medium' },
    { id: 2, name: 'Tech Growth Fund', return: '+10.2%', risk: 'High' },
    { id: 3, name: 'Energy Sector ETF', return: '+5.5%', risk: 'Medium' },
  ];

  const goals = [
    { id: 1, name: 'Retirement', progress: 70, target: 100000, timeframe: 20 },
    { id: 2, name: 'House Down Payment', progress: 50, target: 50000, timeframe: 5 },
  ];

  const topPicks = [
    { id: 1, name: 'Apple', price: 150, change: '+2.5%' },
    { id: 2, name: 'Tesla', price: 700, change: '+5.1%' },
    { id: 3, name: 'Microsoft', price: 300, change: '+1.8%' },
  ];

  // Handle goal click
  const handleGoalClick = (goal) => {
    alert(`Goal: ${goal.name}\nProgress: ${goal.progress}%\nTarget: $${goal.target}`);
  };

  // Handle chart click
  const handleChartClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      alert(`You clicked on ${marketData.labels[index]} with value ${marketData.datasets[0].data[index]}`);
    }
  };

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = marketData.datasets[0].data.map((value) => value + Math.random() * 100 - 50);
      setMarketData({
        ...marketData,
        datasets: [{ ...marketData.datasets[0], data: newData }],
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [marketData]);

  // Sort investments
  const sortedInvestments = [...investments].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'return') return parseFloat(b.return) - parseFloat(a.return);
    return 0;
  });

  // Filter investments by search query
  const filteredInvestments = sortedInvestments.filter((investment) =>
    investment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen p-6">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search investments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Sort By Dropdown */}
      <div className="mb-4">
        <label className="mr-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="name">Name</option>
          <option value="return">Return</option>
        </select>
      </div>

      {/* Investment Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">Investment Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredInvestments.map((investment) => (
            <motion.div
              key={investment.id}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-tooltip-id="investment-tooltip"
              data-tooltip-content={`Learn more about ${investment.name}`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{investment.name}</h3>
              <p className="text-gray-600 mb-1">Return: {investment.return}</p>
              <p className="text-gray-600 mb-4">Risk Level: {investment.risk}</p>
              <button className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
        <Tooltip id="investment-tooltip" />
      </div>

      {/* Progress Toward Goals */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">Progress Toward Goals</h2>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm cursor-pointer"
              onClick={() => handleGoalClick(goal)}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{goal.name}</h3>
              <div className="w-full bg-pink-100 rounded-full h-2.5">
                <div
                  className="bg-pink-600 h-2.5 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">
                Target: ${goal.target} in {goal.timeframe} years
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Trends */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">Market Trends</h2>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm h-96"> {/* Fixed height */}
          <Line
            data={marketData}
            options={{
              onClick: handleChartClick,
              responsive: true,
              maintainAspectRatio: false, // Disable aspect ratio
              plugins: {
                tooltip: {
                  enabled: true,
                  mode: 'index',
                  intersect: false,
                },
                legend: {
                  display: true,
                  position: 'top',
                },
              },
              hover: {
                mode: 'nearest',
                intersect: true,
              },
              scales: {
                x: {
                  grid: {
                    display: false, // Hide x-axis grid lines
                  },
                },
                y: {
                  grid: {
                    color: '#E2E8F0', // Light gray grid lines
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Top Picks */}
      <div>
        <h2 className="text-xl font-semibold text-pink-600 mb-4">Top Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPicks.map((pick) => (
            <motion.div
              key={pick.id}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{pick.name}</h3>
              <p className="text-gray-600 mb-1">Price: ${pick.price}</p>
              <p className="text-gray-600">Change: {pick.change}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;