
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Database, FileVideo, ShieldAlert, Info } from 'lucide-react';

const InteractiveMediaTool = () => {
  const [activeTab, setActiveTab] = useState('videos');
  
  return (
    <section className="py-16" id="interactive-tools">
      <div className="cyber-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Interactive Security Resources</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Learn through our interactive tools, videos, and simulations designed to enhance your cybersecurity awareness.
          </p>
        </div>
        
        <Card className="bg-cyber-secondary/30 border border-cyber-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play size={20} className="text-cyber-accent" />
              Interactive Media Center
            </CardTitle>
            <CardDescription>
              Explore cybersecurity concepts through various interactive formats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs 
              defaultValue="videos" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <FileVideo size={16} />
                  <span>Videos</span>
                </TabsTrigger>
                <TabsTrigger value="simulations" className="flex items-center gap-2">
                  <ShieldAlert size={16} />
                  <span>Simulations</span>
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center gap-2">
                  <Database size={16} />
                  <span>Resources</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="videos" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-cyber-primary/30 p-4 rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40 transition-all">
                    <div className="aspect-video bg-cyber-primary/50 rounded-md flex items-center justify-center mb-3">
                      <Play size={40} className="text-cyber-accent opacity-70" />
                    </div>
                    <h3 className="font-medium mb-1">Phishing Attack Prevention</h3>
                    <p className="text-sm text-muted-foreground">Learn how to identify and avoid falling victim to phishing attacks.</p>
                    <Button variant="outline" size="sm" className="mt-3">Watch Now</Button>
                  </div>
                  <div className="bg-cyber-primary/30 p-4 rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40 transition-all">
                    <div className="aspect-video bg-cyber-primary/50 rounded-md flex items-center justify-center mb-3">
                      <Play size={40} className="text-cyber-accent opacity-70" />
                    </div>
                    <h3 className="font-medium mb-1">Secure Password Creation</h3>
                    <p className="text-sm text-muted-foreground">Best practices for creating and managing secure passwords.</p>
                    <Button variant="outline" size="sm" className="mt-3">Watch Now</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="simulations" className="space-y-4">
                <div className="bg-cyber-primary/30 p-6 rounded-lg border border-cyber-accent/20">
                  <h3 className="font-medium text-lg mb-3">Phishing Simulation</h3>
                  <p className="mb-4">Test your ability to identify phishing attempts with our interactive simulation.</p>
                  <div className="cyber-terminal mb-4 p-4">
                    <p className="mb-2 text-sm">From: security@bankofamerica-secure.net</p>
                    <p className="mb-2 text-sm">Subject: <span className="text-cyber-accent">Urgent: Your account requires verification</span></p>
                    <p className="text-sm">Is this a legitimate email?</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">Legitimate</Button>
                    <Button className="bg-cyber-accent hover:bg-cyber-accent/90" size="sm">Phishing Attempt</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="bg-cyber-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">NIST Cybersecurity Framework</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Standards, guidelines, and best practices for managing cybersecurity risk.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-cyber-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Home Network Security Checklist</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Step-by-step guide to securing your home network and connected devices.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-cyber-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Data Breach Response Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Template for creating a comprehensive data breach response plan.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveMediaTool;
