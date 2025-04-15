
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

type ReportFormValues = {
  incidentType: string;
  description: string;
  email: string;
};

const ReportCrimeButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const form = useForm<ReportFormValues>({
    defaultValues: {
      incidentType: "",
      description: "",
      email: "",
    },
  });
  
  const onSubmit = (data: ReportFormValues) => {
    // In a real app, this would send the data to a backend
    console.log("Report data:", data);
    toast({
      title: "Report submitted",
      description: "Your cybersecurity incident report has been submitted successfully.",
    });
    setIsDialogOpen(false);
    form.reset();
  };
  
  return (
    <section className="py-8 bg-cyber-primary/40">
      <div className="cyber-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-cyber-secondary/30 rounded-lg border border-cyber-accent/30">
          <div className="flex items-center gap-4">
            <div className="bg-cyber-accent/10 p-3 rounded-full">
              <AlertTriangle size={24} className="text-cyber-accent" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Report a Cybersecurity Incident</h3>
              <p className="text-muted-foreground">
                Help protect others by reporting phishing, malware, or other cyber threats.
              </p>
            </div>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-cyber-accent hover:bg-cyber-accent/90 w-full md:w-auto">
                <ShieldAlert className="mr-2 h-4 w-4" /> Report Incident
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-cyber-primary border-cyber-accent/30">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-cyber-accent" />
                  Report a Cybersecurity Incident
                </DialogTitle>
                <DialogDescription>
                  Provide details about the cybersecurity incident you've encountered.
                </DialogDescription>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="incidentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Incident Type</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Phishing, Malware, Scam" 
                            {...field}
                            className="cyber-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the incident in detail..." 
                            className="min-h-[100px] cyber-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your-email@example.com" 
                            {...field}
                            className="cyber-input"
                          />
                        </FormControl>
                        <FormDescription>
                          We'll only use this to follow up on your report.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <DialogFooter className="mt-6">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsDialogOpen(false)}
                      className="border-cyber-accent/30"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-cyber-accent hover:bg-cyber-accent/90"
                    >
                      Submit Report
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ReportCrimeButton;
