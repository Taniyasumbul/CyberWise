
import React from 'react';
import { ShieldCheck, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-primary text-white pt-12 pb-6">
      <div className="cyber-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-cyber-accent" />
              <span className="font-bold text-lg">CyberWise</span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering you with knowledge to stay safe in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyber-accent">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Password Safety</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Phishing Prevention</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Safe Browsing</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Data Protection</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Press</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyber-accent transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 CyberWise. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for cybersecurity awareness</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
