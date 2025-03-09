import React, { useState, useEffect } from 'react';
import { FaChartLine, FaUserShield, FaLightbulb } from 'react-icons/fa';

const LandingPage = () => {
  const testimonials = [
    { text: "WealthHer helped me grow my savings by 20%! The personalized recommendations are a game-changer.", author: "Jane Doe" },
    { text: "I finally feel confident about my financial future, thanks to WealthHer's smart insights.", author: "Sarah K." },
    { text: "The best financial tool I've ever used. It's intuitive, empowering, and truly effective.", author: "Emily R." }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-poppins">
      {/* Hero Section */}
      <section className="relative bg-[#FDCEDF] py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff8586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8A8C8] to-[#FDCEDF] opacity-90"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold text-[#4A4A4A] mb-6">
            Empowering Women to Invest Smarter
          </h1>
          <p className="text-xl text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
            Get personalized investment insights tailored for you. Start your journey towards financial independence today.
          </p>
          <div>
            <a
              href="#features"
              className="inline-block bg-[#E85A9C] text-white px-8 py-3 rounded-full hover:bg-[#D14A8C] transition-all transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-12">Our Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FDCEDF] rounded-lg shadow-md flex flex-col items-center">
              <FaChartLine className="text-4xl text-[#E85A9C] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4A4A]">Smart Investments</h3>
              <p className="text-[#4A4A4A]">Get AI-driven insights to grow your wealth effectively.</p>
            </div>
            <div className="p-6 bg-[#FDCEDF] rounded-lg shadow-md flex flex-col items-center">
              <FaUserShield className="text-4xl text-[#E85A9C] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4A4A]">Secure & Private</h3>
              <p className="text-[#4A4A4A]">Your data is safe with us, ensuring full confidentiality.</p>
            </div>
            <div className="p-6 bg-[#FDCEDF] rounded-lg shadow-md flex flex-col items-center">
              <FaLightbulb className="text-4xl text-[#E85A9C] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4A4A]">Expert Guidance</h3>
              <p className="text-[#4A4A4A]">Learn from financial experts with curated resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#FDCEDF] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-12">What Our Users Say</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md transition-opacity duration-1000 ease-in-out animate-fade-in-out">
            <p className="text-[#4A4A4A] mb-4">
              "{testimonials[index].text}"
            </p>
            <p className="font-semibold text-[#4A4A4A]">- {testimonials[index].author}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
