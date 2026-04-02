import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, ArrowRight, Code, Layers, Rocket, Shield, Gauge, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const MobileAppPage = () => {
  const services = [
    { title: "Android Apps", desc: "Native Android apps with Kotlin/Java or cross-platform with Flutter/React Native. Material Design 3, optimized for all screen sizes and Android versions.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "iOS Apps", desc: "Sleek iOS apps following Apple's Human Interface Guidelines. Swift development or cross-platform deployment via Flutter/React Native.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "Cross-Platform (Flutter/React Native)", desc: "Single codebase for both iOS and Android. 70% faster development, consistent UI, and native performance. Our preferred approach for most projects.", icon: <Layers className="w-5 h-5" /> },
    { title: "UI/UX Design", desc: "User-centered design with wireframes, interactive prototypes in Figma, user flow mapping, and usability testing before a single line of code is written.", icon: <Code className="w-5 h-5" /> },
    { title: "API & Backend Integration", desc: "Connect your app to any backend — Firebase, Supabase, Node.js, or custom APIs. Payment gateways (Razorpay, Stripe), maps, SMS, push notifications.", icon: <Zap className="w-5 h-5" /> },
    { title: "App Store Launch & ASO", desc: "Complete deployment to Google Play & Apple App Store. App Store Optimization (ASO) with keyword research, screenshots, descriptions, and review management.", icon: <Rocket className="w-5 h-5" /> },
  ];

  const stats = [
    { value: "40+", label: "Apps Delivered" },
    { value: "500K+", label: "Total Downloads" },
    { value: "4.5★", label: "Avg. Store Rating" },
    { value: "30+", label: "Industries Served" },
  ];

  const appTypes = [
    { name: "E-commerce Apps", desc: "Product browsing, cart, wishlist, payment, order tracking, push notifications, and loyalty programs" },
    { name: "Food Delivery Apps", desc: "Restaurant listing, menu browsing, cart, real-time tracking, driver app, and admin panel" },
    { name: "Booking & Reservation", desc: "Salon, spa, hotel, doctor appointment booking with calendar, payments, and reminders" },
    { name: "Social & Community", desc: "User profiles, feeds, messaging, notifications, content sharing, and moderation tools" },
    { name: "Fitness & Health", desc: "Workout tracking, meal planning, progress charts, wearable integration, and subscription" },
    { name: "On-Demand Services", desc: "Service marketplace, real-time matching, GPS tracking, ratings, and payment splitting" },
  ];

  const techStack = [
    "Flutter", "React Native", "Kotlin", "Swift", "Firebase", "Supabase",
    "Node.js", "REST APIs", "GraphQL", "Razorpay", "Stripe", "Google Maps",
    "Push Notifications", "Figma", "TestFlight", "Play Console"
  ];

  const process = [
    { step: "01", title: "Discovery & Strategy", desc: "Understanding your idea, target users, monetization model, and competitors. We create a feature list and project roadmap." },
    { step: "02", title: "UI/UX Design", desc: "Wireframes → high-fidelity mockups → interactive prototype. User testing and iteration before development begins." },
    { step: "03", title: "Development Sprints", desc: "2-week agile sprints with regular demos. You see progress every 2 weeks and can give feedback early." },
    { step: "04", title: "Testing & QA", desc: "Manual + automated testing on real devices. Performance profiling, crash reporting, and security audit." },
    { step: "05", title: "Launch & Growth", desc: "App store submission, ASO, analytics setup, and crash monitoring. 3 months post-launch support included." },
  ];

  const packages = [
    { name: "Basic App", price: "₹1,50,000", features: ["5-8 screens", "Basic features", "Single platform", "API integration", "30-day delivery", "1-month support"] },
    { name: "Feature-Rich App", price: "₹3,00,000", features: ["15-25 screens", "Auth + payments", "Both platforms", "Push notifications", "Admin panel", "60-day delivery", "3-month support"] },
    { name: "Enterprise App", price: "₹5,00,000+", features: ["Unlimited screens", "Complex features", "Both platforms", "Custom backend", "Analytics", "Real-time features", "6-month support"] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Mobile App Development" description="Android & iOS app development with Flutter, React Native & Kotlin. UI/UX design, API integration & app store deployment by PostersCraft." path="/mobile-app-development" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              mobile-app.tsx
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<MobileApp />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Mobile App Development</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                We build high-performance mobile apps for iOS and Android. 40+ apps delivered with 500K+ total downloads across 
                e-commerce, food delivery, healthcare, fitness, and more. From concept to App Store launch — we handle everything.
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">What We Build</h2>
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

          {/* App Types */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Types of Apps We've Built</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {appTypes.map((app, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <h3 className="font-medium text-foreground mb-1">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Development Process</h2>
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

          {/* Tech Stack */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((t, i) => (
                  <span key={i} className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-foreground elevation-1">{t}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Packages</h2>
              <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                {packages.map((pkg, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className={`p-6 elevation-2 border bg-surface h-full ${i === 1 ? 'border-primary' : 'border-border'}`}>
                      {i === 1 && <div className="text-xs text-primary font-medium mb-2">MOST POPULAR</div>}
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
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Got an App Idea?</h2>
              <p className="text-muted-foreground mb-6">Let's turn it into reality. Free consultation included.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 material-transition font-medium inline-flex items-center gap-2">
                  Discuss Your App <ArrowRight className="w-4 h-4" />
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

export default MobileAppPage;
