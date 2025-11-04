// src/hooks/useChat.ts
import { useState, useCallback, useEffect } from 'react';
import { sendChatMessage, getOrCreateSessionId } from '@/lib/n8n';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => getOrCreateSessionId());
  const [error, setError] = useState<string | null>(null);

  // Load messages from session storage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('chat_messages');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })));
      } catch (e) {
        console.error('Error loading messages:', e);
      }
    }
  }, []);

  // Save messages to session storage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Send to n8n
      const response = await sendChatMessage(content, sessionId);

      // Add assistant response
      const assistantMessage: Message = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: response.output || 'Sorry, I didn\'t understand that. Can you try again?',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
      
      // Add error message
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting right now. Please try again or contact us via WhatsApp.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    sessionStorage.removeItem('chat_messages');
  }, []);

  return {
    messages,
    sendMessage,
    clearMessages,
    isLoading,
    error,
    sessionId,
  };
}
