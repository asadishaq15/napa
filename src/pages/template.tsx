// src/components/ChatWindow.tsx

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for our chat messages
type MessageType = {
  id: string;
  content: string | React.ReactNode; // replaced JSX.Element with React.ReactNode
  isUser: boolean;
  timestamp: Date;
};

// Suggested queries to display
const suggestedQueries = [
  "Show me Residential properties in Bangalore",
  "Show me Projects in North Bangalore",
  "Show me luxury properties in Whitefield",
  "Properties under 1 Crore in Bangalore"
];

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input on initial render
  useEffect(() => {
    if (messages.length === 0) {
      inputRef.current?.focus();
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | null, query: string = inputValue) => {
    if (e) e.preventDefault();
    
    if (!query.trim()) return;
    
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: query,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    
    try {
      // Make API call to get properties
      const response = await fetch('https://intellide-openai.onrender.com/api/values', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          urls: null,
          fileids: [null],
          query: query,
          context: null,
          query_context: null,
          host: "nripropertyshow.com"
        }),
      });
      
      const data = await response.json();
      
      // Format the response
      const formattedResponse = formatPropertyResponse(data);
      
      const botMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: formattedResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching properties:', error);
      
      const errorMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I couldn't fetch the property information. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle suggested query click
  const handleSuggestedQueryClick = (query: string) => {
    setInputValue(query);
    handleSubmit(null, query);
  };
  
  // Format the property data for display
  // note: prefixing the arg with _ avoids "declared but its value is never read" (TS6133)
  const formatPropertyResponse = (_data: any): React.ReactNode => {
    // This is a simplified example - you would parse the actual API response
    return (
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Here are some residential properties in Bangalore listed in the document:</h3>
        
        <div className="space-y-6">
          <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
            <h4 className="font-bold text-primary-600">1. Brigade Valencia</h4>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>- Price: Rs. 1.15 Cr onwards*</li>
              <li>- RERA Number: PRM/KA/RERA/1251/308/PR/040924/006986</li>
              <li>- Location: Near Electronic City, Hosur Road</li>
              <li>- Configuration: 2, 3 & 4 BHK</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
            <h4 className="font-bold text-primary-600">2. Brigade Insignia</h4>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>- Price: Rs. 2.99 Cr onwards*</li>
              <li>- RERA Number: PRM/KA/RERA/1251/309/PR/180524/006894</li>
              <li>- Location: Yelahanka, North Bangalore</li>
              <li>- Configuration: 3, 4 & 5 BHK Apartments</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
            <h4 className="font-bold text-primary-600">3. El Dorado Beryl</h4>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>- Price: Rs. 49 Lakhs onwards*</li>
              <li>- RERA Number: PRM/KA/RERA/1251/309/PR/160224/006634</li>
              <li>- Location: Aerospace Park, North Bangalore</li>
              <li>- Configuration: 1, 2 & 3 BHK Apartments</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
            <h4 className="font-bold text-primary-600">4. Fairmont at Brigade Orchards</h4>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>- Price: Rs. 1 Crore onwards*</li>
              <li>- Location: Devanahalli</li>
              <li>- Configuration: 2 & 3 BHK Apartments</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-3 px-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">AI Event Platform</h1>
          </div>
          <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
            <span className="text-xl font-medium">i</span>
          </button>
        </div>
      </header>

      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-4xl">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center max-w-lg px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  AI chat BOT
                </h2>
                <div className="mt-8 space-y-3">
                  {suggestedQueries.map((query, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleSuggestedQueryClick(query)}
                    >
                      <div className="bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition flex items-center gap-2">
                        <span className="text-primary-500">👉</span> 
                        {query}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 pb-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[70%] rounded-lg p-4 ${
                      message.isUser
                        ? 'bg-primary-600 text-white rounded-tr-none'
                        : 'bg-white border border-gray-200 rounded-tl-none'
                    }`}
                  >
                    {!message.isUser && (
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-xs">AI</span>
                        </div>
                        <div className="text-sm font-medium text-gray-600">AI Assistant</div>
                      </div>
                    )}
                    <div className={message.isUser ? 'text-white' : 'text-gray-800'}>
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-4 max-w-[85%] md:max-w-[70%]">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-xs">AI</span>
                        </div>
                        <div className="text-sm font-medium text-gray-600">AI Assistant</div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-2 w-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        <div className="h-2 w-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Write your query here..."
              className="input-field flex-1"
              disabled={loading}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn btn-primary h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600"
              disabled={loading || !inputValue.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
