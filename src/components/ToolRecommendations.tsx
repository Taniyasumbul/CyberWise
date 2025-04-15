
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Download, ExternalLink, ShieldCheck, Lock, Eye, Scan, Server, Laptop } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tools = [
  {
    id: 1,
    name: "BitDefender Total Security",
    description: "Comprehensive protection against malware, viruses, and online threats with minimal impact on system performance.",
    category: "Antivirus",
    rating: 5,
    icon: <ShieldCheck className="h-8 w-8 text-cyber-accent" />,
    free: false,
    link: "https://www.bitdefender.com/"
  },
  {
    id: 2,
    name: "Bitwarden",
    description: "Open-source password manager that securely stores and generates strong passwords across all your devices.",
    category: "Password Manager",
    rating: 4,
    icon: <Lock className="h-8 w-8 text-cyber-accent" />,
    free: true,
    link: "https://bitwarden.com/"
  },
  {
    id: 3,
    name: "ProtonVPN",
    description: "Secure VPN service that protects your privacy online and lets you access blocked content safely.",
    category: "VPN",
    rating: 4,
    icon: <Eye className="h-8 w-8 text-cyber-accent" />,
    free: true,
    link: "https://protonvpn.com/"
  },
  {
    id: 4,
    name: "Malwarebytes",
    description: "Powerful anti-malware tool that detects and removes malware, ransomware, and other advanced threats.",
    category: "Anti-Malware",
    rating: 5,
    icon: <Scan className="h-8 w-8 text-cyber-accent" />,
    free: false,
    link: "https://www.malwarebytes.com/"
  },
  {
    id: 5,
    name: "Wireshark",
    description: "Network protocol analyzer that lets you examine data from a live network or from a capture file.",
    category: "Network Security",
    rating: 5,
    icon: <Server className="h-8 w-8 text-cyber-accent" />,
    free: true,
    link: "https://www.wireshark.org/"
  },
  {
    id: 6,
    name: "Veracrypt",
    description: "Disk encryption software that creates encrypted virtual disks within files or encrypts entire partitions.",
    category: "Encryption",
    rating: 4,
    icon: <Laptop className="h-8 w-8 text-cyber-accent" />,
    free: true,
    link: "https://www.veracrypt.fr/"
  }
];

const ToolRecommendations = () => {
  return (
    <section className="py-16" id="tools">
      <div className="cyber-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Recommended Security Tools</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Protect your digital life with these trusted cybersecurity tools recommended by our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card key={tool.id} className="bg-cyber-secondary/30 border border-cyber-accent/30 hover:border-cyber-accent/50 transition-all overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  {tool.icon}
                  <Badge variant={tool.free ? "outline" : "secondary"} className="text-xs">
                    {tool.free ? "Free" : "Premium"}
                  </Badge>
                </div>
                <CardTitle>{tool.name}</CardTitle>
                <div className="flex items-center">
                  <Badge variant="outline" className="text-xs bg-cyber-accent/10 text-cyber-accent border-cyber-accent/30">
                    {tool.category}
                  </Badge>
                  <div className="ml-auto flex items-center">
                    {Array(tool.rating).fill(0).map((_, i) => (
                      <Star key={i} size={12} className="text-cyber-accent fill-cyber-accent" />
                    ))}
                    {Array(5 - tool.rating).fill(0).map((_, i) => (
                      <Star key={i} size={12} className="text-muted-foreground" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-cyber-accent/30 hover:bg-cyber-accent/10"
                >
                  <Download size={14} className="mr-1" /> Download
                </Button>
                <Button 
                  variant="link" 
                  size="sm" 
                  asChild
                >
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-cyber-accent">
                    Learn More <ExternalLink size={14} className="ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolRecommendations;
