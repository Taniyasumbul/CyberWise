
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { cn } from '@/lib/utils';

interface VoiceControlsProps {
  isListening: boolean;
  isMuted: boolean;
  onToggleVoice: () => void;
  onToggleMute: () => void;
}

const VoiceControls = ({ isListening, isMuted, onToggleVoice, onToggleMute }: VoiceControlsProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onToggleMute}
        className={cn(
          "transition-colors",
          isMuted ? "text-muted-foreground" : "text-cyber-accent"
        )}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onToggleVoice}
        className={cn(
          "transition-colors",
          isListening ? "text-cyber-accent border-cyber-accent" : ""
        )}
      >
        {isListening ? (
          <Mic className="h-4 w-4 animate-pulse" />
        ) : (
          <MicOff className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default VoiceControls;
