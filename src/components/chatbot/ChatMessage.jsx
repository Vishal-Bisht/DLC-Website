const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] ${isBot ? 'order-2' : 'order-1'}`}>
        <div className={`px-4 py-2 rounded-2xl ${
          isBot 
            ? 'bg-gray-100 text-gray-800 rounded-bl-none' 
            : 'bg-blue-600 text-white rounded-br-none'
        }`}>
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
      {isBot && (
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 order-1">
          <span className="text-sm">🤖</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;