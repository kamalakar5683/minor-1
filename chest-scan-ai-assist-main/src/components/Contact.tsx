import { useState } from 'react';
import { Mail, MessageSquare, Send, Users, Stethoscope, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const collaborationTypes = [
    {
      icon: Stethoscope,
      title: "Medical Researchers",
      description: "Collaborate on advancing diagnostic AI research and clinical validation studies"
    },
    {
      icon: Code,
      title: "AI Engineers",
      description: "Work together on improving model architecture and developing new features"
    },
    {
      icon: Users,
      title: "Healthcare Providers",
      description: "Partner with hospitals and clinics to implement AI-assisted diagnostic workflows"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Work <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">With Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Are you a medical researcher, AI engineer, or healthcare provider looking to expand diagnostic automation? 
            Let's work together to make radiology faster and safer.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collaborationTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-primary-light/20 transition-all duration-300">
                  <type.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span>Get In Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. John Smith"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.smith@hospital.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or collaboration interest..."
                    className="w-full min-h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground py-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Research Inquiries</h4>
                  <p className="text-muted-foreground">research@chestxrayai.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Support</h4>
                  <p className="text-muted-foreground">support@chestxrayai.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Partnership Opportunities</h4>
                  <p className="text-muted-foreground">partnerships@chestxrayai.com</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Research inquiries:</span>
                      <span className="text-foreground">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technical support:</span>
                      <span className="text-foreground">12-24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partnerships:</span>
                      <span className="text-foreground">1-3 business days</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Collaborate?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Access to cutting-edge AI diagnostic technology</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Collaborative research opportunities with publications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Integration support for clinical workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Custom model training for specific use cases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;