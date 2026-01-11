import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="py-24 bg-gradient-card" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4">Get Started</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Book a Free Fashion Tech <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our team will guide you on the best career path in fashion & technology.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary h-12"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Current Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary h-12">
                  <SelectValue placeholder="Select your current status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="designer">Fashion Designer</SelectItem>
                  <SelectItem value="professional">Working Professional</SelectItem>
                  <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Interested Course</Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
              >
                <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary h-12">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-fashion">AI for Fashion Design & Trend Forecasting</SelectItem>
                  <SelectItem value="digital-fashion">Digital Fashion & 3D Virtual Garments</SelectItem>
                  <SelectItem value="entrepreneurship">Fashion Entrepreneurship & Brand Building</SelectItem>
                  <SelectItem value="sustainable">Sustainable Fashion & Smart Textiles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" variant="cta" size="xl" className="w-full">
              Get Free Counselling
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
