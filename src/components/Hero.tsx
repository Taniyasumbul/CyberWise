
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldAlert, Lock, ArrowRight } from "lucide-react";


const Hero = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default jump
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero_bg.png"
          alt="Cybersecurity Monitor" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 " />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      <div className="cyber-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-cyber-accent/10 text-cyber-accent px-4 py-2 rounded-full">
              <ShieldAlert size={18} />
              <span className="text-sm font-medium">Cybersecurity Made Simple</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stay Safe in the Digital World with <span className="text-cyber-accent">CyberWise</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Learn cybersecurity essentials, get personalized advice from our AI assistant, and protect yourself online with practical tips and resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cyber-accent hover:bg-cyber-accent/90">
                <a href="#chatbot"
                 className="flex items-center gap-2 scroll-smooth">
                  Chat with CyberWise 
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#interactive-tools">Explore Resources</a>
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">Used by individuals and organizations worldwide</p>
              <div className="flex items-center gap-6 mt-4">
                <div className="h-8 w-20 bg-muted rounded animate-pulse-slow"></div>
                <div className="h-8 w-24 bg-muted rounded animate-pulse-slow"></div>
                <div className="h-8 w-20 bg-muted rounded animate-pulse-slow"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-cyber-gradient rounded-lg p-1 shadow-xl animate-glow">
              <div className="bg-cyber-secondary rounded-lg p-6 border border-cyber-accent/30 shadow-inner">
                <div className="flex items-center gap-3 mb-4 text-cyber-accent">
                  <Lock size={24} />
                  <h3 className="font-medium">Cybersecurity Status</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-cyber-primary/50 p-4 rounded flex items-center justify-between">
                    <span className="text-sm">Password Strength</span>
                    <div className="w-1/2 h-2 bg-cyber-primary rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-success w-4/5"></div>
                    </div>
                  </div>
                  <div className="bg-cyber-primary/50 p-4 rounded flex items-center justify-between">
                    <span className="text-sm">2FA Protection</span>
                    <div className="w-1/2 h-2 bg-cyber-primary rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-warning w-1/2"></div>
                    </div>
                  </div>
                  <div className="bg-cyber-primary/50 p-4 rounded flex items-center justify-between">
                    <span className="text-sm">Data Encryption</span>
                    <div className="w-1/2 h-2 bg-cyber-primary rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-accent w-3/4"></div>
                    </div>
                  </div>
                  <div className="bg-cyber-primary/50 p-4 rounded flex items-center justify-between">
                    <span className="text-sm">Device Security</span>
                    <div className="w-1/2 h-2 bg-cyber-primary rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-danger w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
