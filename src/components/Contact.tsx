import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { z } from "zod";

const contactSchema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Budget is required").max(100, "Budget must be less than 100 characters"),
  timeline: z.string().min(1, "Timeline is required").max(100, "Timeline must be less than 100 characters"),
  email: z.string().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().min(10, "Please provide at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    budget: "",
    timeline: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (field: keyof FormData, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: err.errors[0].message }));
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    validateField(field, formData[field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Brief Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ projectType: "", budget: "", timeline: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface-variant">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
              {"<Contact />"}
            </div>
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Start Your Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill in the brief terminal below. Let's build something extraordinary.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Terminal Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 elevation-3 border border-border bg-surface">
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
                    <label htmlFor="projectType" className="block text-code-keyword mb-2">
                      <span className="text-primary">{">"}</span> project_type?
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => handleChange("projectType", e.target.value)}
                      onBlur={() => handleBlur("projectType")}
                      className={`w-full px-4 py-2 bg-editor-bg border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.projectType ? "border-destructive" : "border-border"
                      }`}
                    >
                      <option value="">Select project type</option>
                      <option value="commercial">Commercial</option>
                      <option value="wedding">Wedding</option>
                      <option value="banner">Banner/Poster</option>
                      <option value="social">Social Campaign</option>
                      <option value="branding">Branding</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-destructive text-xs mt-1">{errors.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-code-keyword mb-2">
                      <span className="text-primary">{">"}</span> budget?
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      onBlur={() => handleBlur("budget")}
                      placeholder="e.g., ₹50,000 or $5,000"
                      className={`w-full px-4 py-2 bg-editor-bg border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.budget ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.budget && (
                      <p className="text-destructive text-xs mt-1">{errors.budget}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-code-keyword mb-2">
                      <span className="text-primary">{">"}</span> timeline?
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => handleChange("timeline", e.target.value)}
                      onBlur={() => handleBlur("timeline")}
                      placeholder="e.g., 2 weeks"
                      className={`w-full px-4 py-2 bg-editor-bg border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.timeline ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.timeline && (
                      <p className="text-destructive text-xs mt-1">{errors.timeline}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-code-keyword mb-2">
                      <span className="text-primary">{">"}</span> contact_email?
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-2 bg-editor-bg border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-code-keyword mb-2">
                      <span className="text-primary">{">"}</span> project_details?
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className={`w-full px-4 py-2 bg-editor-bg border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-cta text-cta-foreground hover:opacity-90 material-transition elevation-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Brief
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="p-6 elevation-2 border border-border bg-surface hover:elevation-3 material-transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:contact@posterscraft.com"
                        className="text-sm text-muted-foreground hover:text-primary material-transition"
                      >
                        contact@posterscraft.com
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 elevation-2 border border-border bg-surface hover:elevation-3 material-transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+918981104129"
                        className="text-sm text-muted-foreground hover:text-primary material-transition"
                      >
                        +91 89811 04129
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 elevation-2 border border-border bg-surface hover:elevation-3 material-transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        South Bankimpally, Madhyamgram
                        <br />
                        West Bengal, India
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 elevation-2 border border-border bg-surface hover:elevation-3 material-transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Studio</h3>
                      <p className="text-sm text-muted-foreground">
                        Baguiati, Kolkata
                        <br />
                        West Bengal, India
                      </p>
                      <a
                        href="https://www.luminastudio.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                      >
                        Visit Studio Website →
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-surface rounded-lg p-6 elevation-2 border border-border">
                  <div className="text-xs font-mono text-muted-foreground mb-2">
                    // Average response time
                  </div>
                  <div className="text-2xl font-medium text-foreground">{"< 24 hours"}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
