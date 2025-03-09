import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-poppins">
      {/* Hero Section */}
      <section className="relative bg-[#FDCEDF] py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff8586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8A8C8] to-[#FDCEDF] opacity-90"></div>
        </div>

        {/* Content */}
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
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#FDCEDF]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
                alt="Tailored Recommendations"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
                Tailored Just for You
              </h3>
              <p className="text-[#4A4A4A]">
                Get investment recommendations based on your financial goals, risk tolerance, and preferences.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#FDCEDF]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
                alt="Market Insights"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
                Stay Ahead of the Market
              </h3>
              <p className="text-[#4A4A4A]">
                Access real-time market trends and insights powered by advanced AI algorithms.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#FDCEDF]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
                alt="Financial Planning"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
                Plan for Your Future
              </h3>
              <p className="text-[#4A4A4A]">
                Set and track financial goals like retirement, buying a house, or starting a business.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#FDCEDF]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
                alt="Data Privacy"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
                Your Data, Your Privacy
              </h3>
              <p className="text-[#4A4A4A]">
                We use state-of-the-art encryption to keep your financial data safe and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#FDCEDF] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-12">
            What Our Users Say
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-[#4A4A4A] mb-4">
              "WealthHer helped me grow my savings by 20%! The personalized recommendations are a game-changer."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#4A4A4A]">Jane Doe</p>
                <p className="text-sm text-[#4A4A4A]">Financial Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] py-8">
        <div className="container mx-auto px-6 text-center text-white">
          <p>&copy; 2023 WealthHer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;