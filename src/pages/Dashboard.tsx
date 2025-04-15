
import React from 'react';
import { 
  BarChart, 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Users,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="cyber-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Security Dashboard</h1>
            <p className="text-muted-foreground">Monitor your cybersecurity status and learn how to improve it.</p>
          </div>
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-cyber-accent/30 hover:border-cyber-accent/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-cyber-accent h-5 w-5" />
                  <CardTitle className="text-lg">Security Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold">76%</span>
                  <div className="bg-gray-200 rounded-full h-2.5 w-1/2">
                    <div className="bg-cyber-accent h-2.5 rounded-full" style={{ width: "76%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Good protection, but room for improvement</p>
              </CardContent>
            </Card>
            
            <Card className="border-cyber-accent/30 hover:border-cyber-accent/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Activity className="text-cyber-accent h-5 w-5" />
                  <CardTitle className="text-lg">Threat Activity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold">4</span>
                  <span className="text-sm bg-amber-100 text-amber-800 rounded-full px-3 py-1">Medium</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Threats detected this month</p>
              </CardContent>
            </Card>
            
            <Card className="border-cyber-accent/30 hover:border-cyber-accent/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Users className="text-cyber-accent h-5 w-5" />
                  <CardTitle className="text-lg">Account Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold">2/3</span>
                  <span className="text-sm bg-green-100 text-green-800 rounded-full px-3 py-1">Good</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Security measures enabled</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Security Status Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-cyber-accent/30 hover:border-cyber-accent/50 transition-all">
              <CardHeader>
                <CardTitle>Security Recommendations</CardTitle>
                <CardDescription>Steps to improve your security posture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-red-100">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Enable two-factor authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your accounts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-green-100">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Password strength: Strong</p>
                      <p className="text-sm text-muted-foreground">Your password meets security requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-amber-100">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Update software regularly</p>
                      <p className="text-sm text-muted-foreground">Keep your systems patched against vulnerabilities</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Recommendations</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-cyber-accent/30 hover:border-cyber-accent/50 transition-all">
              <CardHeader>
                <CardTitle>Security Activity</CardTitle>
                <CardDescription>Recent security events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="p-1.5 rounded-full bg-cyber-accent/20">
                      <Lock className="h-4 w-4 text-cyber-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Password changed</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="p-1.5 rounded-full bg-cyber-accent/20">
                      <AlertTriangle className="h-4 w-4 text-cyber-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Suspicious login attempt blocked</p>
                      <p className="text-sm text-muted-foreground">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-cyber-accent/20">
                      <ShieldCheck className="h-4 w-4 text-cyber-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Security scan completed</p>
                      <p className="text-sm text-muted-foreground">1 week ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Activity</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mb-8">
            <Card className="border-cyber-accent/30 hover:border-cyber-accent/50 transition-all">
              <CardHeader>
                <CardTitle>Security Learning Progress</CardTitle>
                <CardDescription>Track your cybersecurity knowledge journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Password Security</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyber-accent h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Phishing Awareness</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyber-accent h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Data Protection</span>
                      <span className="text-sm text-muted-foreground">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyber-accent h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Network Security</span>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyber-accent h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-muted-foreground">Overall completion: <span className="font-medium">63%</span></p>
                <Button size="sm">Continue Learning</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
