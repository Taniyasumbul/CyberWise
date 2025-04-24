
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type ResourceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  backgroundImage?: string;
};

const ResourceCard = ({
  title,
  description,
  icon,
  link,
  className,
  backgroundImage,
}: ResourceCardProps) => {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg border border-cyber-accent/20 bg-cyber-primary/60 backdrop-blur-sm",
      "hover:border-cyber-accent/50 hover:translate-y-[-5px] relative overflow-hidden",
      className
    )}>
      {/* Background image with overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-primary/80 to-cyber-primary/95" />
        </div>
      )}
      
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Security lock indicator */}
      <div className="absolute top-3 right-3 z-10">
        <HoverCard>
          <HoverCardTrigger asChild>
            {/* <div className="p-1 rounded-full bg-cyber-accent/20 text-cyber-accent hover:bg-cyber-accent/30 cursor-help">
              <Lock size={14} />
            </div> */}
          </HoverCardTrigger>
          <HoverCardContent className="bg-cyber-secondary text-cyber-light border-cyber-accent/30 w-64">
            <p className="text-xs">This resource follows security best practices</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-cyber-accent/20 text-cyber-accent animate-pulse-slow">
            {icon}
          </div>
          <CardTitle className="text-cyber-light">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-sm leading-relaxed text-cyber-light/80">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="relative z-10">
        <Button 
          variant="outline" 
          className="w-full group hover:border-cyber-accent hover:bg-cyber-accent/10 border-cyber-accent/30 text-cyber-light" 
          asChild
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Secure Access
            <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
