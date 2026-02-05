import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, MessageSquare, X, Loader2, Sparkles } from 'lucide-react';
import { Chat } from "@google/genai";
import { ChatMessage } from '../types';
import { createChatSession, sendMessageStream } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hello. I am the digital assistant for Bigfoot and the Eagle. How can I help you navigate our research methodology?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const modelMessageId = (Date.now() + 1).toString();

    setMessages(prev => [...prev, {
      id: modelMessageId,
      role: 'model',
      text: '',
      isStreaming: true
    }]);

    try {
      const stream = sendMessageStream(chatSessionRef.current, userMessage.text);
      let fullText = '';

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg =>
          msg.id === modelMessageId
            ? { ...msg, text: fullText }
            : msg
        ));
      }
    } catch (error) {
      console.error("Stream error", error);
    } finally {
      setIsTyping(false);
      setMessages(prev => prev.map(msg =>
        msg.id === modelMessageId
          ? { ...msg, isStreaming: false }
          : msg
      ));
    }
  }, [input]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[100] bg-brand-dark text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-3`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-widest pr-2">Assistant</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-8 sm:right-8 z-[100] flex flex-col justify-end pointer-events-none">
          <div className="pointer-events-auto bg-white w-full sm:w-[380px] h-[100vh] sm:h-[600px] shadow-2xl rounded-none sm:rounded-2xl overflow-hidden border border-gray-100 flex flex-col animate-fade-up">

            {/* Header */}
            <div className="bg-white border-b border-gray-100 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center text-white">
                  <Sparkles size={14} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-brand-dark">Research Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-brand-dark transition-colors p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-brand-dark text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white border border-gray-100 text-brand-dark rounded-2xl rounded-tl-sm shadow-sm'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && messages[messages.length - 1].role === 'user' && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin text-gray-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message..."
                  className="w-full bg-gray-50 text-brand-dark placeholder-gray-400 rounded-xl py-3.5 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-brand-dark/10 transition-all text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-dark disabled:opacity-30 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;