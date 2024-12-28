import React, { useState } from 'react';
import { ChatWindow } from './components/ChatWindow';
import { ChatInput } from './components/ChatInput';
import { LanguageSelector } from './components/LanguageSelector';
import { Bot, MessageSquare } from 'lucide-react';
import { useChat } from './hooks/useChat';

function App() {
  const [language, setLanguage] = useState('en');
  const { messages, addMessage } = useChat();

  const handleSendMessage = (content: string) => {
    addMessage(content, language);
  };

  const handleEscalate = () => {
    addMessage('I would like to speak with a human agent.', language);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">AI Support Assistant</h1>
                  <p className="text-sm text-blue-100">Always here to help</p>
                </div>
              </div>
              <LanguageSelector
                currentLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>
          </div>

          {/* Chat Interface */}
          <div className="h-[600px] flex flex-col">
            <ChatWindow messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Powered by Bolt.AI</span>
              </div>
              <button
                onClick={handleEscalate}
                className="text-blue-600 hover:text-blue-700"
              >
                Speak to a human
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;