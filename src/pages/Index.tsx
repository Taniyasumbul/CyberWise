
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ChatbotWidget from '@/components/ChatbotWidget';
import ResourceCard from '@/components/ResourceCard';
import SecurityTips from '@/components/SecurityTips';
import InteractiveMediaTool from '@/components/InteractiveMediaTool';
import ReportCrimeButton from '@/components/ReportCrimeButton';
import ToolRecommendations from '@/components/ToolRecommendations';
import { Book, FileText, Bookmark, Lock, ShieldAlert, PenTool } from 'lucide-react';
import { securityCode, securityMonitor, circuitBoard, securityLock, dataProtection } from '@/assets/images';

const Index = () => {
  const resources = [
    {
      id: 1,
      title: 'Password Security Guide',
      description: 'Learn how to create strong, unique passwords and manage them securely to protect your online accounts from unauthorized access.',
      icon: <Lock size={24} />,
      link: 'https://www.cisa.gov/news-events/news/creating-and-managing-strong-passwords',
      backgroundImage: securityLock
    },
    {
      id: 2,
      title: 'Phishing Prevention',
      description: 'Identify and avoid phishing attempts that try to steal your sensitive information by posing as legitimate entities.',
      icon: <ShieldAlert size={24} />,
      link: 'https://www.ftc.gov/business-guidance/small-business/cybersecurity/phishing',
      backgroundImage: dataProtection
    },
    {
      id: 3,
      title: 'Cybersecurity Basics',
      description: 'A comprehensive guide to the fundamentals of cybersecurity for individuals and small businesses.',
      icon: <Book size={24} />,
      link: 'https://www.cisa.gov/news-events/news/cybersecurity-basics',
      backgroundImage: securityCode
    },
    {
      id: 4,
      title: 'Data Protection Guidelines',
      description: 'Best practices for safeguarding your personal and professional data from breaches and unauthorized access.',
      icon: <FileText size={24} />,
      link: 'https://www.ftc.gov/business-guidance/privacy-security/data-security',
      backgroundImage: circuitBoard
    },
    {
      id: 5,
      title: 'Online Safety Checklist',
      description: 'A practical checklist to help you assess and improve your digital security posture across all your devices.',
      icon: <Bookmark size={24} />,
      link: 'https://staysafeonline.org/resources/online-safety-basics/',
      backgroundImage: securityMonitor
    },
    {
      id: 6,
      title: 'Security Awareness Training',
      description: 'Free resources to help you build cybersecurity awareness and develop good security habits.',
      icon: <PenTool size={24} />,
      link: 'https://www.sans.org/security-awareness-training/resources/',
      backgroundImage: securityCode
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        
        <Hero />
       
        <ChatbotWidget />
        
        <InteractiveMediaTool />
        
        {/* <ToolRecommendations /> */}
        
        <ReportCrimeButton />
        
        <section id="resources" className="py-16">
          <div className="cyber-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Cybersecurity Resources</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Explore these trusted resources to enhance your cybersecurity knowledge and protect yourself online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                  backgroundImage={resource.backgroundImage}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* <SecurityTips /> */}
        
        <section id="features" className="py-16 bg-cyber-gradient text-white">
          <div className="cyber-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Choose CyberWise?</h2>
              <p className="mt-3 text-cyber-light/80 max-w-2xl mx-auto">
                Our platform makes cybersecurity accessible and practical for everyone, regardless of technical expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-cyber-secondary/30 p-6 rounded-lg border border-cyber-accent/30">
                <div className="w-12 h-12 rounded-full bg-cyber-accent/20 flex items-center justify-center mb-4">
                  <Bot size={24} className="text-cyber-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">AI-Powered Assistance</h3>
                <p className="text-cyber-light/70">
                  Get instant, personalized cybersecurity advice from our intelligent chatbot assistant.
                </p>
              </div>
              
              <div className="bg-cyber-secondary/30 p-6 rounded-lg border border-cyber-accent/30">
                <div className="w-12 h-12 rounded-full bg-cyber-accent/20 flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-cyber-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">Educational Resources</h3>
                <p className="text-cyber-light/70">
                  Access a comprehensive library of guides, tutorials, and best practices for online safety.
                </p>
              </div>
              
              <div className="bg-cyber-secondary/30 p-6 rounded-lg border border-cyber-accent/30">
                <div className="w-12 h-12 rounded-full bg-cyber-accent/20 flex items-center justify-center mb-4">
                  <BarChart size={24} className="text-cyber-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">Security Assessment</h3>
                <p className="text-cyber-light/70">
                  Evaluate your current digital security posture and get actionable recommendations for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="cyber-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Start Your Cybersecurity Journey Today</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Learn how to protect yourself online with our interactive resources and AI-powered assistant.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-cyber-accent hover:bg-cyber-accent/90">
                <a href="#chatbot" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

import { Bot, BookOpen, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default Index;
