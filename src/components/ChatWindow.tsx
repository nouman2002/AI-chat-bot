import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatWindowProps {
  messages: Message[];
}

export function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start gap-3 ${
            message.sender === 'user' ? 'flex-row-reverse' : ''
          }`}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              message.sender === 'user'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {message.sender === 'user' ? (
              <User className="w-5 h-5" />
            ) : (
              <Bot className="w-5 h-5" />
            )}
          </div>
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.sender === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
}