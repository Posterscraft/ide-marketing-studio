import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, ExternalLink, CheckCircle, Star, Clock, MapPin, ArrowRight, Monitor, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const StudioBookingPage = () => {
  const studioFeatures = [
    { title: "Professional Lighting Setup", desc: "Softboxes, ring lights, LED panels, and natural light windows. Perfect for portraits, products, and video shoots.", icon: <Lightbulb className="w-5 h-5" /> },
    { title: "4K Video Equipment", desc: "Sony & Canon cinema cameras, professional gimbals, sliders, and drone for aerial shots. Complete video production setup.", icon: <Monitor className="w-5 h-5" /> },
    { title: "Multiple Backdrops", desc: "White, black, grey, green screen, and custom colored backdrops. Plus textured walls and themed setups for variety.", icon: <Camera className="w-5 h-5" /> },
    { title: "Spacious Shooting Area", desc: "1,200 sq ft main studio area with separate makeup room, changing room, and client lounge. Comfortable for teams up to 20.", icon: <Users className="w-5 h-5" /> },
    { title: "Post-Production Suite", desc: "On-site editing bay with high-end workstations, calibrated monitors, and industry-standard software for instant review.", icon: <Monitor className="w-5 h-5" /> },
    { title: "Props & Accessories", desc: "Extensive collection of props, furniture, artificial flowers, and styling accessories for creative setups.", icon: <Star className="w-5 h-5" /> },
  ];

  const shootTypes = [
    { title: "Wedding Photography & Videography", desc: "Full day wedding coverage with 2-3 photographers, 2 videographers, drone, and same-day highlight reel. Traditional + candid.", packages: "₹50,000 - ₹3,00,000" },
    { title: "Pre-Wedding Shoots", desc: "Outdoor and studio pre-wedding shoots with concept planning, outfit guidance, props, and cinematic video. 100+ edited photos.", packages: "₹25,000 - ₹1,00,000" },
    { title: "Corporate Events", desc: "Conference coverage, seminars, award ceremonies, team outings. Multiple cameras, live streaming, and same-day edits available.", packages: "₹30,000 - ₹1,50,000" },
    { title: "Commercial & Product Shoots", desc: "E-commerce product photography, food photography, fashion lookbooks, and brand campaigns. Lifestyle and white background options.", packages: "₹10,000 - ₹75,000" },
    { title: "Brand Photography", desc: "Personal branding, headshots, team photos, office interiors, and lifestyle content for your website and social media.", packages: "₹15,000 - ₹50,000" },
    { title: "Music Videos & Reels", desc: "Music video production with set design, choreography coordination, multi-camera setup, and professional color grading.", packages: "₹25,000 - ₹2,00,000" },
  ];

  const process = [
    { step: "1", title: "Inquiry & Consultation", desc: "Tell us about your shoot — type, date, location, team size. We'll recommend the perfect setup." },
    { step: "2", title: "Concept & Planning", desc: "Moodboard creation, location scouting, timeline planning, and equipment checklist preparation." },
    { step: "3", title: "Shoot Day", desc: "Professional crew arrives on time with all equipment. We handle everything from setup to breakdown." },
    { step: "4", title: "Post-Production", desc: "Photo editing, video editing, color grading, and final delivery in 7-15 business days." },
  ];

  const testimonials = [
    { name: "Priya & Rahul", event: "Wedding", quote: "PostersCraft made our wedding day unforgettable. The cinematic highlights reel brought tears to our eyes!" },
    { name: "FreshBrew Coffee", event: "Product Shoot", quote: "Our product photos look incredible. Sales increased 40% after updating our website with the new images." },
    { name: "TechMinds Corp", event: "Corporate Event", quote: "Professional, punctual, and creative. The event coverage exceeded our expectations." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              studio-booking.tsx
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<StudioBooking />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Studio Booking</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Professional photography and videography studio with state-of-the-art equipment. Book our 1,200 sq ft studio 
                for weddings, pre-weddings, corporate events, product shoots, and brand photography. 500+ shoots completed since 2019.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.luminastudio.in/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium">
                  Visit Lumina Studio <ExternalLink className="w-4 h-4" />
                </a>
                <Link to="/contact">
                  <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary/50 material-transition font-medium">
                    Book a Session
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Studio Features */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Studio Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {studioFeatures.map((f, i) => (
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

          {/* Shoot Types & Pricing */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Shoot Types & Pricing</h2>
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                {shootTypes.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 lg:p-6 elevation-2 border border-border bg-surface h-full">
                      <h3 className="text-base lg:text-lg font-medium text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                      <div className="text-sm font-medium text-primary bg-primary/10 inline-block px-3 py-1 rounded">{s.packages}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {process.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface text-center h-full">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-3">{p.step}</div>
                      <h3 className="font-medium text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Client Love</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {testimonials.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div>
                      <p className="text-sm text-muted-foreground italic mb-3">"{t.quote}"</p>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-primary">{t.event}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                <h3 className="text-xl font-medium text-foreground mb-4">Studio Location & Contact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> PostersCraft Studio, Kolkata, West Bengal</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="w-4 h-4 text-primary" /> Mon - Sat: 10 AM - 8 PM | Sunday: By Appointment</div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Phone:</span>{" "}
                      <a href="tel:+918981104129" className="hover:text-primary material-transition">+91 89811 04129</a>
                    </p>
                  </div>
                  <div className="flex items-end">
                    <a href="https://www.luminastudio.in/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium">
                      Visit Lumina Studio Website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default StudioBookingPage;
