import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-poppins text-[#4A4A4A] px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-semibold text-[#E85A9C] mb-6">About Vesta AI</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Empowering women to take control of their financial future with AI-driven investment insights.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#E85A9C]">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Vesta AI, we believe that financial independence is essential. Our AI-powered investment platform is designed
            specifically for women, providing personalized strategies and expert advice to make informed, confident investment decisions.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#E85A9C]">Why Choose Us?</h2>
          <ul className="text-lg leading-relaxed list-disc list-inside">
            <li>AI-driven personalized investment strategies</li>
            <li>Tailored financial planning for women</li>
            <li>Simple and beginner-friendly investment insights</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-center text-[#E85A9C] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">What is Vesta AI?</h3>
            <p className="text-lg leading-relaxed">Vesta AI is an AI-powered investment platform designed for women, offering smart insights and personalized strategies.</p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">How does the AI work?</h3>
            <p className="text-lg leading-relaxed">Our AI analyzes market trends, user preferences, and risk tolerance to create customized investment strategies.</p>
          </div>
          <div className="bg-white shadow-md p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Is the platform suitable for beginners?</h3>
            <p className="text-lg leading-relaxed">Yes! Vesta AI is designed for both beginners and experienced investors, offering easy-to-understand recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
