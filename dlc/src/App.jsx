import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Tutorials from './components/pages/Tutorials';
import AIChat from './components/pages/AIChat';
import Feedback from './components/pages/Feedback';
import { AccessibilityProvider } from './components/contexts/AccessibilityContext';
import ChatBot from './components/chatbot/Chatbot';

function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col">
        {/* <AccessibilityMenu /> */}
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </AccessibilityProvider>
  );
}

export default App;