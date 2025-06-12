// This is a mock implementation. Replace with actual OpenAI API integration
export const sendChatMessage = async (message) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock responses based on keywords
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('whatsapp')) {
    return "To use WhatsApp:\n1. Download WhatsApp from Play Store/App Store\n2. Open the app and enter your phone number\n3. Verify with OTP\n4. Add contacts and start chatting!\n\nWould you like to know about specific WhatsApp features?";
  }

  if (lowerMessage.includes('upi') || lowerMessage.includes('payment')) {
    return "UPI payments are safe and easy:\n1. Download any UPI app (Paytm, PhonePe, Google Pay)\n2. Link your bank account\n3. Create a UPI PIN\n4. You can now send/receive money using phone numbers!\n\nAlways verify the recipient before sending money.";
  }

  if (lowerMessage.includes('video call')) {
    return "For video calling:\n1. WhatsApp: Open chat > tap video icon\n2. Zoom: Create/join meeting with meeting ID\n3. Google Meet: Use meeting link or code\n\nMake sure your camera and microphone are working!";
  }

  if (lowerMessage.includes('email')) {
    return "To create an email:\n1. Go to gmail.com\n2. Click 'Create account'\n3. Fill your details\n4. Choose a unique email address\n5. Set a strong password\n\nRemember to keep your password safe!";
  }

  if (lowerMessage.includes('safe') || lowerMessage.includes('security')) {
    return "Online safety tips:\n1. Never share OTP or passwords\n2. Check for 'https://' in website URLs\n3. Don't click unknown links\n4. Use strong passwords\n5. Keep apps updated\n\nStay alert and stay safe online!";
  }

  // Default response
  return "I'd be happy to help! I can assist you with:\n• WhatsApp and messaging apps\n• Making digital payments\n• Video calling\n• Email and internet browsing\n• Online safety\n\nWhat would you like to learn about?";
};

// For production, use actual OpenAI API:
/*
import axios from 'axios';

export const sendChatMessage = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are DigiBuddy, a helpful assistant for elderly users learning digital skills. Provide simple, step-by-step instructions in a friendly manner.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};
*/