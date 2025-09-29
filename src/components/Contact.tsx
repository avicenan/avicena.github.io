import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo } from "../data/personal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // console.log("Form submitted:", formData);
    window.open("mailto:avicena.naufaldo@gmail.com?subject=" + formData.subject + "&body=" + formData.message, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out if you'd like to connect!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">I'm currently available for freelance work and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-muted-foreground">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {personalInfo.githubUrl && (
                  <Button variant="outline" size="sm" onClick={() => window.open(personalInfo.githubUrl, "_blank")} className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                )}
                {personalInfo.linkedinUrl && (
                  <Button variant="outline" size="sm" onClick={() => window.open(personalInfo.linkedinUrl, "_blank")} className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                )}
                {personalInfo.instagramUrl && (
                  <Button variant="outline" size="sm" onClick={() => window.open(personalInfo.instagramUrl, "_blank")} className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me more about your project or inquiry..." rows={6} />
              </div>
              <Button type="submit" className="w-full group">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
