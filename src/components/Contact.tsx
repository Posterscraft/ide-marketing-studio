import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Brief Submitted! ✅",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ projectType: "", budget: "", timeline: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface-variant">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
              {"<Contact />"}
            </div>
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Start Your Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill in the brief terminal below. Let's build something extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Terminal Form */}
            <Card className="lg:col-span-2 p-8 elevation-3 border border-border bg-surface">
              <div className="bg-editor-gutter rounded-t-lg px-4 py-2 flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-cta"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  brief_terminal.tsx
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">
                <div>
                  <label className="block text-code-keyword mb-2">
                    <span className="text-primary">{">"}</span> project_type?
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2 bg-editor-bg border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="commercial">Commercial</option>
                    <option value="wedding">Wedding</option>
                    <option value="banner">Banner/Poster</option>
                    <option value="social">Social Campaign</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-code-keyword mb-2">
                    <span className="text-primary">{">"}</span> budget?
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g., ₹50,000 or $5,000"
                    className="w-full px-4 py-2 bg-editor-bg border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-code-keyword mb-2">
                    <span className="text-primary">{">"}</span> timeline?
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., 2 weeks"
                    className="w-full px-4 py-2 bg-editor-bg border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-code-keyword mb-2">
                    <span className="text-primary">{">"}</span> contact_email?
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-editor-bg border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-code-keyword mb-2">
                    <span className="text-primary">{">"}</span> project_details?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-2 bg-editor-bg border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-cta text-cta-foreground hover:opacity-90 material-transition elevation-2"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Brief
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 elevation-2 border border-border bg-surface">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:hello@posterscraft.com"
                      className="text-sm text-muted-foreground hover:text-primary material-transition"
                    >
                      hello@posterscraft.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 elevation-2 border border-border bg-surface">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-muted-foreground hover:text-primary material-transition"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 elevation-2 border border-border bg-surface">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Studio</h3>
                    <p className="text-sm text-muted-foreground">
                      Mumbai, Maharashtra
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </Card>

              <div className="bg-surface rounded-lg p-6 elevation-2 border border-border">
                <div className="text-xs font-mono text-muted-foreground mb-2">
                  // Average response time
                </div>
                <div className="text-2xl font-medium text-foreground">{"< 24 hours"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
