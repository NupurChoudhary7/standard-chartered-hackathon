import React from 'react';

const ChatbotButton = () => {
  const handleClick = () => {
    // Logic to open the chatbot interface goes here
    alert('Chatbot opened!'); // Placeholder for chatbot functionality
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#E85A9C] text-white p-4 rounded-full shadow-lg hover:bg-[#D14A8C] transition-all transform hover:scale-105"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span className="text-lg font-semibold">💬</span> {/* Chat emoji */}
    </button>
  );
};

export default ChatbotButton;