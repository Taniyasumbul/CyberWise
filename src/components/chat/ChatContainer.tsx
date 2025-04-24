
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import VoiceControls from './VoiceControls';

interface ChatContainerProps {
  messages: Array<{
    id: string;
    role: 'user' | 'bot';
    content: string;
    timestamp: Date;
    image?: string;
  }>;
  input: string;
  isLoading: boolean;
  isListening: boolean;
  isMuted: boolean;
  selectedImage: string | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
  onToggleVoice: () => void;
  onToggleMute: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  input,
  isLoading,
  isListening,
  isMuted,
  selectedImage,
  onInputChange,
  onSubmit,
  onReset,
  onImageUpload,
  onImageRemove,
  onToggleVoice,
  onToggleMute,
}) => {
  return (
    <Card className="border border-border shadow-lg backdrop-blur-sm bg-background/80">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-cyber-accent" />
            </div>
            <CardTitle>CyberWise Assistant</CardTitle>
          </div>
          <VoiceControls
            isListening={isListening}
            isMuted={isMuted}
            onToggleVoice={onToggleVoice}
            onToggleMute={onToggleMute}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 h-[400px] overflow-y-auto flex flex-col space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-4 py-3 bg-cyber-primary/10 border border-cyber-primary/20">
              <div className="flex items-center space-x-2">
                <Bot size={16} className="text-cyber-accent" />
                <span className="text-xs font-medium">CyberWise</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-cyber-accent animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-cyber-accent animate-pulse delay-100"></div>
                <div className="h-2 w-2 rounded-full bg-cyber-accent animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t p-4">
        <ChatInput
          input={input}
          isLoading={isLoading}
          selectedImage={selectedImage}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onReset={onReset}
          onImageUpload={onImageUpload}
          onImageRemove={onImageRemove}
        />
      </CardFooter>
    </Card>
  );
};

export default ChatContainer;
