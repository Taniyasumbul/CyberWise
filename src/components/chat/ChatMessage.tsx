
import React from 'react';
import { Shield, User } from "lucide-react";
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: {
    id: string;
    role: 'user' | 'bot';
    content: string;
    timestamp: Date;
    image?: string;
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div 
      className={cn(
        "flex",
        message.role === "user" ? "justify-end" : "justify-start"
      )}
    >
      <div 
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-3",
          message.role === "user" 
            ? "bg-cyber-accent/20 border border-cyber-accent/30"
            : "bg-cyber-primary/20 border border-cyber-primary/30"
        )}
      >
        <div className="flex items-center space-x-2 mb-1">
          {message.role === "bot" ? (
            <>
              <Shield size={16} className="text-cyber-accent" />
              <span className="text-xs font-medium">CyberWise</span>
            </>
          ) : (
            <>
              <User size={16} className="text-muted-foreground" />
              <span className="text-xs font-medium">You</span>
            </>
          )}
          <span className="text-xs text-muted-foreground ml-auto">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        {message.image && (
          <div className="mb-2">
            <img
              src={message.image}
              alt="Uploaded"
              className="max-w-full h-auto rounded"
            />
          </div>
        )}
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
