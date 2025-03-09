import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css"; // Import your chatbot's CSS
import ChatBotIcon from "./ChatBotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    console.log("API URL:", process.env.REACT_APP_API_URL);
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    // Convert history into the required format
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      console.log("Sending request to API...");
      // Fetching API data using environment variable for the API URL
      const response = await fetch(process.env.REACT_APP_API_URL, requestOptions);

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      // Parse the response to JSON
      const data = await response.json();
      console.log("API response data:", data);

      if (
        !data ||
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content ||
        !data.candidates[0].content.parts
      ) {
        throw new Error("Invalid API response format or missing parts");
      }

      // Extract text from the response, removing markdown formatting
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1") // Remove markdown bold
        .trim();

      // Update chat history with bot's response
      updateHistory(apiResponseText);
    } catch (error) {
      console.error("Error fetching API:", error.message);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatBot((prev) => !prev)}
        className="fixed bottom-6 right-6 bg-[#E85A9C] text-white p-4 rounded-full shadow-lg hover:bg-[#D14A8C] transition-all transform hover:scale-105"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <span className="text-lg font-semibold">💬</span> {/* Chat emoji */}
      </button>

      {/* Chatbot Popup */}
      {showChatBot && (
        <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
          <div className="chatbot-popup">
            <div className="chat-header">
              <div className="header-info">
                <ChatBotIcon />
                <h2 className="logo-text">Chatbot</h2>
              </div>
              <button onClick={() => setShowChatBot((prev) => !prev)} className="material-symbols-rounded">
                keyboard_arrow_down
              </button>
            </div>

            <div ref={chatBodyRef} className="chat-body">
              <div className="message bot-message">
                <ChatBotIcon />
                <p className="message-text">
                  Hey There! <br /> How can I help you today?
                </p>
              </div>

              {/* Display chat history */}
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            <div className="chat-footer">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
