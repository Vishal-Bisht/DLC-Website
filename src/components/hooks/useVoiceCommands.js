import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useVoiceCommands = (enabled = true) => {
  const navigate = useNavigate();

  const commands = {
    'home': () => navigate('/'),
    'tutorials': () => navigate('/tutorials'),
    'chat': () => navigate('/ai-chat'),
    'feedback': () => navigate('/feedback'),
    'help': () => {
      const utterance = new SpeechSynthesisUtterance('You can say: home, tutorials, chat, or feedback to navigate');
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleVoiceCommand = useCallback((transcript) => {
    const lowerTranscript = transcript.toLowerCase();
    
    Object.keys(commands).forEach(command => {
      if (lowerTranscript.includes(command)) {
        commands[command]();
      }
    });
  }, []);

  useEffect(() => {
    if (!enabled || !('webkitSpeechRecognition' in window)) return;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      handleVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    try {
      recognition.start();
    } catch (error) {
      console.error('Failed to start speech recognition:', error);
    }

    return () => {
      recognition.stop();
    };
  }, [enabled, handleVoiceCommand]);
};

export default useVoiceCommands;