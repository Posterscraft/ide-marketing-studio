import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, CheckCircle, BarChart3, Target, Layers, Eye, ArrowRight, Image, MonitorPlay, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const AdCreativesPage = () => {
  const services = [
    { title: "Static Ad Creatives", desc: "Single-image ads designed for maximum click-through. Optimized for Facebook, Instagram, Google Display, and LinkedIn ad placements.", icon: <Image className="w-5 h-5" /> },
    { title: "Carousel Ads", desc: "Multi-slide carousel ads that tell a story. Perfect for showcasing product ranges, features, testimonials, or step-by-step processes.", icon: <Layers className="w-5 h-5" /> },
    { title: "Video Ads", desc: "15-60 second video ads designed for social feeds, stories, and YouTube pre-rolls. Attention-grabbing hooks in the first 3 seconds.", icon: <MonitorPlay className="w-5 h-5" /> },
    { title: "Google Display Ads", desc: "Responsive display ads in all standard IAB sizes — 300x250, 728x90, 160x600, 320x50, and more. HTML5 animated and static versions.", icon: <Megaphone className="w-5 h-5" /> },
    { title: "A/B Test Variations", desc: "Multiple creative variations for split testing. Different headlines, images, CTAs, and color schemes to find the highest-performing combination.", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Landing Page Design", desc: "High-converting landing pages designed to match your ad creatives. Consistent messaging, trust signals, and optimized CTA placement.", icon: <Eye className="w-5 h-5" /> },
  ];

  const adTypes = [
    { type: "E-commerce Ads", examples: "Product showcases, sale announcements, new arrivals, abandoned cart retargeting", results: "3-8x ROAS across fashion, electronics, and F&B brands" },
    { type: "Lead Generation Ads", examples: "Free consultation offers, ebook downloads, webinar registrations, quote requests", results: "₹50-200 cost per lead across real estate and education" },
    { type: "Brand Awareness Ads", examples: "Story-driven content, brand films, behind-the-scenes, customer testimonials", results: "2M+ impressions/month for brand awareness campaigns" },
    { type: "App Install Ads", examples: "Feature highlights, user testimonials, demo videos, limited-time offers", results: "₹15-50 cost per install across Android & iOS" },
    { type: "Event Promotion Ads", examples: "Event countdowns, speaker introductions, venue highlights, early bird offers", results: "1000+ registrations for corporate and social events" },
    { type: "Retargeting Ads", examples: "Cart abandonment, viewed products, past customers, lookalike audiences", results: "5-12x ROAS on retargeting campaigns" },
  ];

  const stats = [
    { value: "₹1Cr+", label: "Total Ad Spend Managed" },
    { value: "5,000+", label: "Ad Creatives Designed" },
    { value: "5-8x", label: "Average ROAS" },
    { value: "50+", label: "Active Ad Accounts" },
  ];

  const process = [
    { step: "01", title: "Campaign Brief", desc: "Understanding your product, audience, goals, and budget. We analyze past campaign data if available." },
    { step: "02", title: "Creative Strategy", desc: "Defining the hook, messaging hierarchy, visual style, and CTA strategy based on platform best practices." },
    { step: "03", title: "Design & Production", desc: "Creating multiple ad variations in all required sizes and formats. Video, static, and animated versions." },
    { step: "04", title: "Launch & Optimize", desc: "A/B testing creatives, monitoring performance, and iterating on designs based on real data." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Ad Creatives & Design" description="High-converting ad creatives for Facebook, Instagram, Google Display & YouTube. Static, carousel, video ads & A/B testing by PostersCraft." path="/ad-creatives" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              ad-creatives.xml
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<AdCreatives />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Ad Creatives</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Performance-driven ad creatives that convert. We've designed 5,000+ ad creatives and managed over ₹1 Crore in ad spend 
                across Facebook, Instagram, Google, and LinkedIn. Every design is backed by data and optimized for results.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-4 text-center elevation-2 border border-border bg-surface">
                      <div className="text-2xl lg:text-3xl font-bold text-primary">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Creative Formats We Deliver</h2>
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

          {/* Ad Types */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Campaign Types & Results</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {adTypes.map((ad, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <h3 className="font-medium text-foreground mb-2">{ad.type}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{ad.examples}</p>
                      <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1.5 rounded">{ad.results}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Our Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {process.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full text-center">
                      <div className="text-3xl font-bold text-primary/20 font-mono mb-2">{p.step}</div>
                      <h3 className="font-medium text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                <div className="flex items-center gap-3 mb-4"><Zap className="w-6 h-6 text-primary" /><h3 className="text-xl font-medium text-foreground">Pricing</h3></div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹1,000</div><div className="text-sm text-muted-foreground">Per Static Ad</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹3,000</div><div className="text-sm text-muted-foreground">Carousel Ad</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹5,000</div><div className="text-sm text-muted-foreground">Video Ad</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹25,000+</div><div className="text-sm text-muted-foreground">Full Campaign Bundle</div></div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Ready to Scale Your Ads?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's create ad creatives that stop the scroll and drive conversions.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium inline-flex items-center gap-2">
                  Get Ad Creatives <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdCreativesPage;
