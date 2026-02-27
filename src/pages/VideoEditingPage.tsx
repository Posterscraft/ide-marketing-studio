import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Film, CheckCircle, ArrowRight, Clapperboard, Music, Palette, Sparkles, Monitor, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const VideoEditingPage = () => {
  const services = [
    { title: "YouTube Video Editing", desc: "Long-form content with professional cuts, transitions, color grading, sound design, thumbnails, and end screens. We edit gaming, vlogs, tutorials, reviews, and podcasts.", icon: <Monitor className="w-5 h-5" /> },
    { title: "Instagram Reels & Shorts", desc: "Trending vertical content with viral hooks, captions, effects, music sync, and trending audio. We create 15s, 30s, and 60s formats optimized for each platform.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Corporate Videos", desc: "Company profiles, training videos, product demos, investor pitches, and internal communications. Professional voiceover, subtitles, and branded intros.", icon: <Clapperboard className="w-5 h-5" /> },
    { title: "Wedding Films", desc: "Cinematic wedding highlight reels (3-5 min), full ceremony edits, pre-wedding shoots, engagement videos, and save-the-date clips with drone footage.", icon: <Film className="w-5 h-5" /> },
    { title: "Color Grading", desc: "Professional color correction and grading using DaVinci Resolve. We match reference looks, create custom LUTs, and ensure consistency across all footage.", icon: <Palette className="w-5 h-5" /> },
    { title: "Sound Design & Mixing", desc: "Audio cleanup, noise reduction, background music, SFX, voiceover sync, and final mixing. We ensure crystal clear audio in every video.", icon: <Music className="w-5 h-5" /> },
  ];

  const stats = [
    { value: "1,000+", label: "Videos Edited" },
    { value: "500+", label: "Reels Created" },
    { value: "200+", label: "Wedding Films" },
    { value: "48hr", label: "Reel Turnaround" },
  ];

  const tools = [
    "Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Final Cut Pro",
    "Audition", "Cinema 4D", "Blender", "CapCut Pro"
  ];

  const process = [
    { step: "01", title: "Upload Raw Footage", desc: "Share your footage via Google Drive, WeTransfer, or hard drive. We accept all formats — MOV, MP4, RAW, ProRes." },
    { step: "02", title: "Brief & Reference", desc: "Tell us your vision — share reference videos, music preferences, and any specific instructions or brand guidelines." },
    { step: "03", title: "First Cut", desc: "We deliver the first rough cut in 3-5 days. You review and share feedback for changes." },
    { step: "04", title: "Revisions & Final", desc: "Up to 3 rounds of revisions. Final video delivered in your preferred format and resolution (up to 4K)." },
  ];

  const packages = [
    { name: "Reels / Shorts", price: "₹5,000", features: ["15-60 sec edit", "Trending transitions", "Music sync", "Captions/subtitles", "48hr delivery"] },
    { name: "YouTube Videos", price: "₹10,000", features: ["10-20 min edit", "Intro/outro", "Color grading", "Sound design", "Thumbnail design", "5-day delivery"] },
    { name: "Wedding Films", price: "₹25,000+", features: ["Cinematic highlight reel", "Full ceremony edit", "Drone footage edit", "Music licensing", "2-week delivery"] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              video-editing.tsx
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<VideoEditing />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Video & Reels Editing</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                From raw footage to scroll-stopping content. We've edited 1,000+ videos, created 500+ reels, and produced 200+ wedding films 
                using industry-standard tools. Fast turnaround, cinematic quality, every single time.
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">What We Edit</h2>
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {process.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface text-center h-full">
                      <div className="text-3xl font-bold text-primary/20 font-mono mb-2">{p.step}</div>
                      <h3 className="font-medium text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-6">Tools We Use</h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-foreground elevation-1">{tool}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Packages</h2>
              <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                {packages.map((pkg, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-6 elevation-2 border border-border bg-surface h-full">
                      <h3 className="text-lg font-medium text-foreground">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-primary my-3">{pkg.price}</div>
                      <ul className="space-y-2">
                        {pkg.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Got Footage? Let's Edit.</h2>
              <p className="text-muted-foreground mb-6">Share your raw footage and we'll turn it into magic.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 material-transition font-medium inline-flex items-center gap-2">
                  Start Editing <ArrowRight className="w-4 h-4" />
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

export default VideoEditingPage;
