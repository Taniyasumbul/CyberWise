
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw, Send } from "lucide-react";
import ImageUpload from './ImageUpload';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  selectedImage: string | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
}

const ChatInput = ({
  input,
  isLoading,
  selectedImage,
  onInputChange,
  onSubmit,
  onReset,
  onImageUpload,
  onImageRemove
}: ChatInputProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex items-center space-x-2">
      <Button 
        type="button" 
        size="icon" 
        variant="outline" 
        onClick={onReset}
        title="Reset conversation"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>
      
      <ImageUpload 
        onImageUpload={onImageUpload}
        onImageRemove={onImageRemove}
        selectedImage={selectedImage}
      />
      
      <Input 
        value={input}
        onChange={onInputChange}
        placeholder={selectedImage ? "Ask questions about the uploaded image..." : "Ask about passwords, phishing, malware..."}
        className="flex-1 cyber-input"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        size="icon"
        className="bg-cyber-accent hover:bg-cyber-accent/90"
        disabled={isLoading || !input.trim()}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;
