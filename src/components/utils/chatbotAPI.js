import axios from 'axios';

export const sendChatMessage = async (message) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const systemPrompt =
    'You are DigiBuddy, an AI assistant for the Digital Literacy Campaign (DLC). Only answer questions related to digital skills, tutorials, accessibility, or the DLC platform. If the question is not related to DLC, politely say you can only answer DLC-related questions.';
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 200,
        temperature: 0.5
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
    const answer = response.data.choices?.[0]?.message?.content?.trim();
    return answer || "Sorry, I couldn't get a response.";
  } catch (error) {
    return "Sorry, I'm having trouble connecting. Please try again later.";
  }
};