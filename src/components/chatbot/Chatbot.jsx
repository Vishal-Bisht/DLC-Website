import { useState, useRef, useEffect } from 'react';
import { ChatBubbleBottomCenterTextIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import ChatMessage from './ChatMessage';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm DigiBuddy 👋 How can I help you learn digital skills today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      // Use hardcoded responses for now
      const lowerMessage = inputText.toLowerCase();
      let botReply = "I'd be happy to help! I can assist you with:\n• WhatsApp and messaging apps\n• Making digital payments\n• Video calling\n• Email and internet browsing\n• Online safety\n\nWhat would you like to learn about?";
      if (lowerMessage.includes('whatsapp')) {
        botReply = "To use WhatsApp:\n1. Download WhatsApp from Play Store/App Store\n2. Open the app and enter your phone number\n3. Verify with OTP\n4. Add contacts and start chatting!\n\nWould you like to know about specific WhatsApp features?";
      } else if (lowerMessage.includes('upi') || lowerMessage.includes('payment')) {
        botReply = "UPI payments are safe and easy:\n1. Download any UPI app (Paytm, PhonePe, Google Pay)\n2. Link your bank account\n3. Create a UPI PIN\n4. You can now send/receive money using phone numbers!\n\nAlways verify the recipient before sending money.";
      } else if (lowerMessage.includes('video call')) {
        botReply = "For video calling:\n1. WhatsApp: Open chat > tap video icon\n2. Zoom: Create/join meeting with meeting ID\n3. Google Meet: Use meeting link or code\n\nMake sure your camera and microphone are working!";
      } else if (lowerMessage.includes('email')) {
        botReply = "To create an email:\n1. Go to gmail.com\n2. Click 'Create account'\n3. Fill your details\n4. Choose a unique email address\n5. Set a strong password\n\nRemember to keep your password safe!";
      } else if (lowerMessage.includes('safe') || lowerMessage.includes('security')) {
        botReply = "Online safety tips:\n1. Never share OTP or passwords\n2. Check for 'https://' in website URLs\n3. Don't click unknown links\n4. Use strong passwords\n5. Keep apps updated\n\nStay alert and stay safe online!";
      } else if (["hi", "hlo", "hello", "hey"].some(greet => lowerMessage.includes(greet))) {
        botReply = "Hello! I'm DigiBuddy 👋 How can I help you learn digital skills today?";
      }
      setMessages(prev => [...prev, { id: messages.length + 2, text: botReply, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
      >
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all transform ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <SparklesIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">DigiBuddy</h3>
              <p className="text-xs opacity-90">Your Digital Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded"
              aria-label="Close chat"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;