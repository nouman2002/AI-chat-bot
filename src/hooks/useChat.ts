import { useState } from 'react';
import { Message } from '../types';
import { getAIResponse } from '../utils/groq';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const addMessage = async (content: string, language: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      language,
    };
    setMessages(prev => [...prev, userMessage]);

    // Get AI response
    const aiResponse = await getAIResponse(content, language);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      sender: 'bot',
      timestamp: new Date(),
      language,
    };
    setMessages(prev => [...prev, botMessage]);
  };

  return { messages, addMessage };
}