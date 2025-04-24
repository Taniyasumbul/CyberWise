
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Lock, Eye, Shield, Wifi, RefreshCw, Smartphone, Cloud } from "lucide-react";

const securityTips = [
  {
    id: 1,
    title: 'Use Strong, Unique Passwords',
    description: 'Create complex passwords with 12+ characters including letters, numbers, and symbols. Use a different password for each account and consider a password manager.',
    icon: <Lock className="h-5 w-5" />,
  },
  {
    id: 2,
    title: 'Enable Two-Factor Authentication',
    description: 'Add an extra layer of security by enabling 2FA on all your accounts, especially email, banking, and social media.',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    id: 3,
    title: 'Be Wary of Phishing Attempts',
    description: 'Scrutinize unexpected emails or messages. Don\'t click suspicious links or download attachments from unknown sources.',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    id: 4,
    title: 'Keep Software Updated',
    description: 'Regularly update your operating system, applications, and antivirus software to protect against security vulnerabilities.',
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    id: 5,
    title: 'Secure Your Wi-Fi Network',
    description: 'Use WPA3 encryption, a strong router password, and hide your network SSID. Regularly update your router\'s firmware.',
    icon: <Wifi className="h-5 w-5" />,
  },
  {
    id: 6,
    title: 'Practice Safe Browsing',
    description: 'Look for HTTPS in the URL, be cautious with downloads, and consider using privacy-focused browsers and extensions.',
    icon: <Eye className="h-5 w-5" />,
  },
  {
    id: 7,
    title: 'Secure Mobile Devices',
    description: 'Use screen locks, disable Bluetooth when not in use, and only install apps from official stores after checking permissions.',
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    id: 8,
    title: 'Backup Important Data',
    description: 'Follow the 3-2-1 backup rule: 3 copies, 2 different media types, 1 copy stored off-site or in the cloud.',
    icon: <Cloud className="h-5 w-5" />,
  },
];

const SecurityTips = () => {
  return (
    <section id="tips" className="py-16 bg-[url('/cs8.jpg')] bg-cover ">
      <div className=''>
      <div className="cyber-container ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Essential Security Tips</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Follow these cybersecurity best practices to protect yourself online and reduce your risk of becoming a victim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityTips.map((tip) => (
            <Card key={tip.id} className="border border-border hover:border-cyber-accent/30 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-md bg-cyber-accent/20 text-cyber-accent">
                    {tip.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SecurityTips;
