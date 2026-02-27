import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PartyPopper, CheckCircle, ArrowRight, Users, MapPin, Camera, Music, Utensils, Star } from "lucide-react";
import { Link } from "react-router-dom";

const EventManagementPage = () => {
  const services = [
    { title: "Corporate Events", desc: "Conferences, seminars, AGMs, award ceremonies, team outings, product launches, and annual functions. Full planning from venue to catering to AV setup.", icon: <Users className="w-5 h-5" /> },
    { title: "Wedding & Social Events", desc: "Complete wedding planning — venue selection, decor, catering, entertainment, photography coordination, invitation design, and day-of coordination.", icon: <PartyPopper className="w-5 h-5" /> },
    { title: "Product Launches", desc: "Grand product reveals with stage design, media kits, press coverage, influencer invites, live streaming, and social media buzz creation.", icon: <Star className="w-5 h-5" /> },
    { title: "Exhibitions & Trade Shows", desc: "Booth design & fabrication, promotional material, on-ground activation, lead capture systems, and post-event analytics.", icon: <MapPin className="w-5 h-5" /> },
    { title: "Entertainment & Performances", desc: "DJ, live bands, anchors, stand-up comedy, dance troupes, celebrity management, and complete entertainment coordination.", icon: <Music className="w-5 h-5" /> },
    { title: "Catering & Hospitality", desc: "Multi-cuisine catering, bar service, themed food stations, dietary accommodations, and complete hospitality management for events.", icon: <Utensils className="w-5 h-5" /> },
  ];

  const stats = [
    { value: "100+", label: "Events Managed" },
    { value: "50K+", label: "Guests Hosted" },
    { value: "30+", label: "Venue Partners" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const eventTypes = [
    { name: "Corporate Conference", capacity: "50-5000 pax", includes: "Venue, AV, catering, registration, speaker management" },
    { name: "Product Launch", capacity: "100-1000 pax", includes: "Stage design, media, PR, live streaming, photography" },
    { name: "Wedding", capacity: "100-2000 pax", includes: "Venue, decor, catering, entertainment, photography, coordination" },
    { name: "Exhibition Booth", capacity: "Custom", includes: "Design, fabrication, setup, promotional material, staff" },
    { name: "Team Building", capacity: "20-500 pax", includes: "Activities, venue, facilitators, meals, transport" },
    { name: "Gala Dinner", capacity: "50-500 pax", includes: "Venue, theme decor, gourmet catering, entertainment, AV" },
  ];

  const process = [
    { step: "01", title: "Consultation & Brief", desc: "Understanding your event vision, guest count, budget, and special requirements. We create a detailed event proposal." },
    { step: "02", title: "Planning & Design", desc: "Venue shortlisting, theme design, vendor coordination, timeline planning, and budget breakdown with your approval at every step." },
    { step: "03", title: "Coordination & Setup", desc: "Vendor management, logistics coordination, rehearsals, and complete venue setup the day before. Nothing left to chance." },
    { step: "04", title: "Event Day Execution", desc: "On-ground team manages everything — guest registration, AV, catering, photography, entertainment, and emergency backup plans." },
    { step: "05", title: "Post-Event", desc: "Photo/video delivery, guest feedback collection, vendor settlements, and a post-event report with highlights and metrics." },
  ];

  const testimonials = [
    { name: "TechCorp India", event: "Annual Conference", quote: "Flawless execution for our 500-person conference. Every detail was handled perfectly — from registration to the gala dinner." },
    { name: "Ananya & Rohan", event: "Wedding", quote: "Our dream wedding came to life exactly as we imagined. PostersCraft handled everything while we enjoyed every moment." },
    { name: "FreshStart Foods", event: "Product Launch", quote: "The product launch was spectacular. Media coverage, influencer presence, and social media buzz exceeded all expectations." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              events.xml
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<EventManagement />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Event Management</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                From corporate conferences to dream weddings — we plan, coordinate, and execute memorable events end-to-end. 
                100+ events managed, 50,000+ guests hosted, and a 98% client satisfaction rate. We make every event unforgettable.
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">What We Manage</h2>
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

          {/* Event Types */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Event Types & Packages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventTypes.map((e, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <h3 className="font-medium text-foreground mb-1">{e.name}</h3>
                      <div className="text-xs text-primary mb-2">Capacity: {e.capacity}</div>
                      <p className="text-sm text-muted-foreground">{e.includes}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">How We Work</h2>
              <div className="space-y-4">
                {process.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface flex gap-4 items-start">
                      <div className="text-2xl font-bold text-primary/30 font-mono shrink-0">{p.step}</div>
                      <div><h3 className="font-medium text-foreground mb-1">{p.title}</h3><p className="text-sm text-muted-foreground">{p.desc}</p></div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Client Stories</h2>
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

          {/* Pricing */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                <div className="flex items-center gap-3 mb-4"><PartyPopper className="w-6 h-6 text-primary" /><h3 className="text-xl font-medium text-foreground">Pricing</h3></div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <div className="text-xl font-bold text-foreground">₹50,000</div>
                    <div className="text-sm text-muted-foreground mb-1">Small Events</div>
                    <div className="text-xs text-muted-foreground">Up to 100 guests</div>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <div className="text-xl font-bold text-foreground">₹1,50,000</div>
                    <div className="text-sm text-muted-foreground mb-1">Corporate Events</div>
                    <div className="text-xs text-muted-foreground">100-500 guests</div>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <div className="text-xl font-bold text-foreground">₹5,00,000+</div>
                    <div className="text-sm text-muted-foreground mb-1">Large-Scale Events</div>
                    <div className="text-xs text-muted-foreground">500+ guests</div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Planning an Event?</h2>
              <p className="text-muted-foreground mb-6">Let's make it unforgettable. Free consultation for events above ₹1L.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 material-transition font-medium inline-flex items-center gap-2">
                  Plan Your Event <ArrowRight className="w-4 h-4" />
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

export default EventManagementPage;
