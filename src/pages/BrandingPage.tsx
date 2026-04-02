import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Palette, CheckCircle, Layers, Eye, PenTool, Target, ArrowRight, Sparkles, FileText, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const BrandingPage = () => {
  const services = [
    { title: "Logo Design", desc: "Custom logo creation with multiple concepts, revisions, and final delivery in all formats — PNG, SVG, EPS, AI. We design logos that tell your brand story.", icon: <PenTool className="w-5 h-5" /> },
    { title: "Visual Identity System", desc: "Complete brand identity including color palette, typography selection, iconography style, imagery guidelines, and visual language across all touchpoints.", icon: <Eye className="w-5 h-5" /> },
    { title: "Brand Guidelines Document", desc: "Comprehensive brand book with logo usage rules, color codes (HEX, RGB, CMYK, Pantone), spacing guidelines, do's & don'ts, and application examples.", icon: <FileText className="w-5 h-5" /> },
    { title: "Stationery & Collateral", desc: "Business cards, letterheads, envelopes, ID cards, email signatures, presentations, and all corporate stationery designed with your brand identity.", icon: <Briefcase className="w-5 h-5" /> },
    { title: "Social Media Branding", desc: "Profile pictures, cover photos, highlight covers, post templates, and story templates — consistent branding across Instagram, Facebook, LinkedIn, YouTube.", icon: <Layers className="w-5 h-5" /> },
    { title: "Brand Strategy & Positioning", desc: "Market research, competitor analysis, brand positioning, value proposition, tone of voice, and messaging framework to differentiate your brand.", icon: <Target className="w-5 h-5" /> },
  ];

  const process = [
    { step: "01", title: "Discovery Workshop", desc: "A 1-2 hour session to understand your vision, values, target audience, competitors, and brand personality. We dig deep into what makes you different." },
    { step: "02", title: "Research & Strategy", desc: "Market analysis, competitor audit, audience profiling, and brand positioning. We define your brand's unique space in the market." },
    { step: "03", title: "Concept Development", desc: "3-5 unique logo concepts with moodboards and visual direction. Each concept is backed by strategic rationale." },
    { step: "04", title: "Design Refinement", desc: "Your chosen concept goes through detailed refinement — perfecting every curve, color, and proportion with up to 5 revision rounds." },
    { step: "05", title: "Brand System Build", desc: "We extend the logo into a full visual identity — colors, fonts, patterns, stationery, social media templates, and brand guidelines." },
    { step: "06", title: "Final Handover", desc: "Complete brand asset library delivered with organized files, brand guidelines PDF, and a walkthrough session on how to use everything." },
  ];

  const industries = [
    "E-commerce", "Real Estate", "Food & Beverage", "Healthcare", "Education",
    "Technology", "Fashion", "Hospitality", "Finance", "Fitness", "Travel", "Retail"
  ];

  const faqs = [
    { q: "How long does a full branding project take?", a: "Typically 2-4 weeks depending on the scope. A logo-only project takes about 7-10 days, while a full brand identity system takes 3-4 weeks." },
    { q: "How many logo concepts do I get?", a: "We provide 3-5 unique logo concepts in the initial presentation. You choose one direction, and we refine it with up to 5 revision rounds." },
    { q: "Do I get all the source files?", a: "Absolutely! You receive all source files (AI, EPS, PSD) along with web-ready formats (PNG, SVG, JPG) in various sizes and color variations." },
    { q: "Can you rebrand an existing business?", a: "Yes! We handle rebranding projects regularly — refreshing outdated identities while maintaining brand equity and customer recognition." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Branding & Identity Design" description="Logo design, visual identity, brand guidelines, stationery & packaging design. Build a memorable brand with PostersCraft Kolkata." path="/branding" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              branding.tsx
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<Branding />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Branding & Identity</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                Your brand is more than a logo — it's the entire experience people have with your business. We create strategic, 
                memorable brand identities that connect with your audience and stand out in crowded markets. From startups to established 
                businesses, we've built 200+ brand identities across 12+ industries.
              </p>
            </div>
          </section>

          {/* Services */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Our Branding Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {services.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 lg:p-6 elevation-2 border border-border bg-surface h-full">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">{f.icon}</div>
                      <h3 className="text-base lg:text-lg font-medium text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Our Branding Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {process.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <div className="text-3xl font-bold text-primary/20 font-mono mb-2">{p.step}</div>
                      <h3 className="font-medium text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Industries We've Branded</h2>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-foreground elevation-1"
                  >{ind}</motion.span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-3xl">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface">
                      <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                <div className="flex items-center gap-3 mb-4"><Palette className="w-6 h-6 text-primary" /><h3 className="text-xl font-medium text-foreground">Pricing</h3></div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <div className="text-xl font-bold text-foreground">₹15,000</div>
                    <div className="text-sm text-muted-foreground mb-2">Logo Only</div>
                    <div className="text-xs text-muted-foreground">3 concepts, 3 revisions, all formats</div>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <div className="text-xl font-bold text-foreground">₹40,000</div>
                    <div className="text-sm text-muted-foreground mb-2">Brand Identity</div>
                    <div className="text-xs text-muted-foreground">Logo + colors + fonts + stationery</div>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <div className="text-xl font-bold text-foreground">₹75,000+</div>
                    <div className="text-sm text-muted-foreground mb-2">Full Brand System</div>
                    <div className="text-xs text-muted-foreground">Everything + brand book + social templates</div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Let's Build Your Brand</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Every great business starts with a great brand. Let's create yours.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium inline-flex items-center gap-2">
                  Get a Brand Quote <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </section>

          <Footer />
        </main>
      <MobileBottomNav />
    </div>
    </div>
  );
};

export default BrandingPage;
