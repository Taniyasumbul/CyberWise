
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X, LayoutDashboard } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Create a version of Header that doesn't use router hooks for places where Router isn't available
export const HeaderWithoutRouter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent"
            >
              Home
            </Link>
            {/* <Link 
              to="#chatbot" 
              className="cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent"
            >
              Chatbot
            </Link> */}
            <Link 
              to="#interactive-tools" 
              className="cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent"
            >
              Resources
            </Link>
            <Link 
              to="/security" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent"
            >
              Security Tools
            </Link>
            <Link 
              to="/dashboard" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent flex items-center gap-1"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
            <Button asChild className="bg-cyber-accent hover:bg-cyber-accent/90">
            <Link to="/#chatbot">Chatbot</Link>
            </Button>
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
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium py-2" >Home</Link>
              {/* <Link to="/#chatbot" className="text-sm font-medium py-2" onClick={toggleMenu}>Chatbot</Link> */}
              <Link to="/#interactive-tools" className="text-sm font-medium py-2" onClick={toggleMenu}>Resources</Link>
              <Link to="/security" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium py-2" >Security Tools</Link>
              <Link 
                to="/dashboard" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm font-medium py-2 flex items-center gap-2"
                
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
              <Button asChild className="bg-cyber-accent hover:bg-cyber-accent/90 w-full">
                <Link to="/#chatbot">Chatbot</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

// The main Header component that uses router hooks - only use this inside Router context
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate=useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="cyber-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="flex items-center space-x-2 group">
            <div className="bg-cyber-accent/10 p-2 rounded-md group-hover:bg-cyber-accent/20 transition-colors">
              <ShieldCheck className="h-6 w-6 text-cyber-accent" />
            </div>
            <span className="font-bold text-xl">CyberWise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                // isActive("/") && "text-cyber-accent"
              )}
            >
              Home
            </Link>
            {/* <Link 
              to="/#chatbot" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/#chatbot") && "text-cyber-accent"
              )}
            >
              Chatbot
            </Link> */}
            <Link 
              to="/#interactive-tools" 
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/#interactive-tools") && "text-cyber-accent"
              )}
            >
              Resources
            </Link>
            <Link 
              to="/security" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent",
                isActive("/security") && "text-cyber-accent"
              )}
            >
              Security Tools
            </Link>
            <Link 
              to="/dashboard" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "cyber-highlight text-sm font-medium transition-colors hover:text-cyber-accent flex items-center gap-1",
                isActive("/dashboard") && "text-cyber-accent"
              )}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
            <Button asChild className="bg-cyber-accent hover:bg-cyber-accent/90">
            <Link to="/#chatbot">Chatbot</Link>
            </Button>
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
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium py-2" >Home</Link>
              {/* <Link to="/#chatbot" className="text-sm font-medium py-2" onClick={toggleMenu}>Chatbot</Link> */}
              <Link to="/#interactive-tools" className="text-sm font-medium py-2" onClick={toggleMenu}>Resources</Link>
              <Link to="/security" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium py-2" >Security Tools</Link>
              <Link 
                to="/dashboard" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm font-medium py-2 flex items-center gap-2"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
              <Button asChild className="bg-cyber-accent hover:bg-cyber-accent/90 w-full">
                <Link to="/#chatbot">Chatbot</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
