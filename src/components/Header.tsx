
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X, LayoutDashboard } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="cyber-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-cyber-accent/10 p-2 rounded-md group-hover:bg-cyber-accent/20 transition-colors">
              <ShieldCheck className="h-6 w-6 text-cyber-accent" />
            </div>
            <span className="font-bold text-xl">CyberWise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/#features" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/#features") && "text-cyber-accent"
              )}
            >
              Features
            </Link>
            <Link 
              to="/#chatbot" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/#chatbot") && "text-cyber-accent"
              )}
            >
              Chatbot
            </Link>
            <Link 
              to="/#resources" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/#resources") && "text-cyber-accent"
              )}
            >
              Resources
            </Link>
            <Link 
              to="/#tips" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/#tips") && "text-cyber-accent"
              )}
            >
              Security Tips
            </Link>
            <Link 
              to="/dashboard" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent flex items-center gap-1",
                isActive("/dashboard") && "text-cyber-accent"
              )}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
            <Button className="bg-cyber-accent hover:bg-cyber-accent/90">Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-x-0 top-16 bg-background border-b border-border md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}>
          <div className="cyber-container py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/#features" className="text-sm font-medium py-2" onClick={toggleMenu}>Features</Link>
              <Link to="/#chatbot" className="text-sm font-medium py-2" onClick={toggleMenu}>Chatbot</Link>
              <Link to="/#resources" className="text-sm font-medium py-2" onClick={toggleMenu}>Resources</Link>
              <Link to="/#tips" className="text-sm font-medium py-2" onClick={toggleMenu}>Security Tips</Link>
              <Link 
                to="/dashboard" 
                className="text-sm font-medium py-2 flex items-center gap-2"
                onClick={toggleMenu}
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
              <Button className="bg-cyber-accent hover:bg-cyber-accent/90 w-full">Get Started</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
