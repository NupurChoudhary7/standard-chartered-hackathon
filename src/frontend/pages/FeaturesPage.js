import React from 'react';
import { FaChartLine, FaUserShield, FaComments, FaListAlt, FaBullseye, FaChartPie } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine className="text-[#E85A9C] text-5xl" />, 
    title: "Smart Investment Insights",
    description: "Leverage AI-driven analytics to receive tailored investment recommendations based on real-time market trends."
  },
  {
    icon: <FaUserShield className="text-[#E85A9C] text-5xl" />, 
    title: "Personalized Risk Assessment",
    description: "Vesta AI evaluates your risk tolerance to provide strategies that align with your financial comfort level."
  },
  {
    icon: <FaComments className="text-[#E85A9C] text-5xl" />, 
    title: "AI-Powered Chatbot",
    description: "Instantly access expert-backed investment insights and financial guidance through our intelligent chatbot."
  },
  {
    icon: <FaListAlt className="text-[#E85A9C] text-5xl" />, 
    title: "Goal-Based Planning",
    description: "Set financial goals like retirement, home purchase, or education, and track your progress seamlessly."
  },
  {
    icon: <FaBullseye className="text-[#E85A9C] text-5xl" />, 
    title: "Market Trend Analysis",
    description: "Stay ahead with live market trends, expert insights, and historical data visualizations."
  },
  {
    icon: <FaChartPie className="text-[#E85A9C] text-5xl" />, 
    title: "User-Friendly Dashboard",
    description: "A sleek, intuitive interface that presents all your investment data in an easy-to-digest format."
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-poppins p-8">
      <h1 className="text-4xl font-semibold text-[#4A4A4A] text-center mb-10">Powerful Features to Elevate Your Investments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            {feature.icon}
            <h3 className="text-xl font-semibold text-[#4A4A4A] mt-4">{feature.title}</h3>
            <p className="text-md text-[#4A4A4A] mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
