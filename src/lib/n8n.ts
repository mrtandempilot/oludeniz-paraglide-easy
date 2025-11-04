// src/lib/n8n.ts

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || '';

export interface ChatMessage {
  chatInput: string;
  sessionId: string;
}

export interface ChatResponse {
  output: string;
}

// Send message to n8n AI chatbot
export async function sendChatMessage(message: string, sessionId: string): Promise<ChatResponse> {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatInput: message,
        sessionId: sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
}

// Generate or retrieve session ID
export function getOrCreateSessionId(): string {
  const STORAGE_KEY = 'chat_session_id';
  
  let sessionId = sessionStorage.getItem(STORAGE_KEY);
  
  if (!sessionId) {
    // Generate a new session ID
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(STORAGE_KEY, sessionId);
  }
  
  return sessionId;
}

// Clear session (for testing or logout)
export function clearSession(): void {
  sessionStorage.removeItem('chat_session_id');
}
