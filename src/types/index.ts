export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
}

export interface SupportTicket {
  id: string;
  status: 'pending' | 'escalated' | 'resolved';
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}