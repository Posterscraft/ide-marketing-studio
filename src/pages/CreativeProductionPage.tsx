import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, CheckCircle, Palette, Video, Sparkles, Layers, Target, ArrowRight, Star, Zap, Eye, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const CreativeProductionPage = () => {
  const services = [
    { title: "Poster & Banner Design", desc: "Eye-catching posters, flex banners, standees, and hoarding designs for events, launches, and promotions. Print-ready files in all formats.", icon: <Palette className="w-5 h-5" /> },
    { title: "Social Media Creatives", desc: "Daily post designs, carousel graphics, story templates, and festival greetings for Instagram, Facebook, LinkedIn, and Twitter.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Video Production", desc: "End-to-end video production from scripting and storyboarding to shooting, editing, color grading, and final delivery in 4K.", icon: <Video className="w-5 h-5" /> },
    { title: "Product Photography", desc: "Professional product shoots with studio lighting, props, and post-processing. E-commerce ready images with white background or lifestyle setups.", icon: <Camera className="w-5 h-5" /> },
    { title: "Motion Graphics & Animation", desc: "2D/3D motion graphics, animated logos, explainer videos, and kinetic typography using After Effects and Cinema 4D.", icon: <Layers className="w-5 h-5" /> },
    { title: "Packaging & Print Design", desc: "Product packaging, brochures, catalogues, visiting cards, letterheads, and all print collateral with press-ready output.", icon: <PenTool className="w-5 h-5" /> },
  ];

  const process = [
    { step: "01", title: "Brief & Discovery", desc: "We start by understanding your brand, target audience, campaign goals, and visual preferences through a detailed creative brief." },
    { step: "02", title: "Concept & Moodboard", desc: "Our creative team develops multiple concepts with moodboards, reference styles, and direction options for your approval." },
    { step: "03", title: "Design & Production", desc: "Once approved, we move into full production — designing, shooting, editing, and crafting every piece to perfection." },
    { step: "04", title: "Review & Revisions", desc: "You get up to 3 rounds of revisions to fine-tune every detail. We don't stop until you're 100% satisfied." },
    { step: "05", title: "Final Delivery", desc: "All assets delivered in multiple formats (web, print, social) with organized file naming and a comprehensive asset library." },
  ];

  const stats = [
    { value: "5,000+", label: "Creatives Delivered" },
    { value: "200+", label: "Brands Served" },
    { value: "50+", label: "Video Projects" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const tools = [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Adobe Premiere Pro",
    "DaVinci Resolve", "Cinema 4D", "Figma", "Canva Pro", "Blender", "Lightroom"
  ];

  const portfolio = [
    { category: "Social Media", count: "3,000+ posts designed", highlight: "Managed creative output for 50+ brands monthly" },
    { category: "Video Production", count: "200+ videos produced", highlight: "Corporate films, reels, YouTube content, wedding films" },
    { category: "Print & Packaging", count: "500+ print projects", highlight: "Brochures, catalogues, packaging for FMCG & retail" },
    { category: "Motion Graphics", count: "100+ animations", highlight: "Logo reveals, explainers, ad animations" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              creative-production.tsx
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<CreativeProduction />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Creative Production</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                End-to-end creative services from concept to final delivery. We design posters, produce videos, craft social media content, 
                and create stunning visuals that make your brand unforgettable. Since 2019, we've delivered 5,000+ creatives across 200+ brands.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-2">What We Create</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">From a single Instagram post to a full brand campaign — we handle every creative need.</p>
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-2">Our Creative Process</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">A streamlined 5-step workflow that ensures quality and speed.</p>
              <div className="space-y-4">
                {process.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 lg:p-6 elevation-2 border border-border bg-surface flex gap-4 items-start">
                      <div className="text-2xl font-bold text-primary/30 font-mono shrink-0">{p.step}</div>
                      <div>
                        <h3 className="text-base lg:text-lg font-medium text-foreground mb-1">{p.title}</h3>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Highlights */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Portfolio Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {portfolio.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 lg:p-6 elevation-2 border border-border bg-surface">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-primary" />
                        <h3 className="font-medium text-foreground">{p.category}</h3>
                      </div>
                      <div className="text-xl font-bold text-primary mb-1">{p.count}</div>
                      <p className="text-sm text-muted-foreground">{p.highlight}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Tools We Use</h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-foreground elevation-1"
                  >{tool}</motion.span>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                <div className="flex items-center gap-3 mb-4"><Sparkles className="w-6 h-6 text-primary" /><h3 className="text-xl font-medium text-foreground">Pricing</h3></div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹500</div><div className="text-sm text-muted-foreground">Per Social Post</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹5,000</div><div className="text-sm text-muted-foreground">Reels / Short Video</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹15,000</div><div className="text-sm text-muted-foreground">Corporate Video</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹25,000+</div><div className="text-sm text-muted-foreground">Full Campaign</div></div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Ready to Create Something Amazing?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's bring your vision to life. Get in touch for a free creative consultation.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium inline-flex items-center gap-2">
                  Start a Project <ArrowRight className="w-4 h-4" />
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

export default CreativeProductionPage;
