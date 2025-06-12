import React, { useState } from 'react';
import { ChatBubbleBottomCenterTextIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ChatMessage from '../chatbot/ChatMessage';
import { sendChatMessage } from '../utils/chatbotAPI';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm DigiBuddy, your digital learning assistant. Ask me anything about using smartphones, computers, or the internet!", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "How do I send a WhatsApp message?",
    "How to make UPI payment?",
    "How to video call my family?",
    "Is online shopping safe?",
    "How to create an email account?"
  ];

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(inputText);
      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting. Please try again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputText(question);
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Chat with DigiBuddy
            </h1>
            <p className="text-xl text-gray-600">
              Your friendly AI assistant for all digital learning questions
            </p>
          </div>

          {/* Quick Questions */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
              <SparklesIcon className="h-4 w-4 mr-1" />
              Quick Questions
            </p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 text-gray-500">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-6 border-t bg-gray-50">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputText.trim()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;