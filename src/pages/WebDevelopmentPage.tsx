import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, CheckCircle, ArrowRight, Code, ShoppingCart, Rocket, Shield, Gauge, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const WebDevelopmentPage = () => {
  const services = [
    { title: "Business Websites", desc: "Professional websites for companies, startups, and personal brands. Modern UI/UX, responsive design, SEO optimized, and fast-loading.", icon: <Globe className="w-5 h-5" /> },
    { title: "E-commerce Stores", desc: "Full online stores with Shopify, WooCommerce, or custom builds. Payment gateways (Razorpay, Stripe), inventory management, order tracking, and analytics.", icon: <ShoppingCart className="w-5 h-5" /> },
    { title: "Landing Pages", desc: "High-converting landing pages for ad campaigns, product launches, and lead generation. A/B tested designs with optimized CTAs and forms.", icon: <Rocket className="w-5 h-5" /> },
    { title: "Web Applications", desc: "Custom web apps with React, Next.js, or Vue.js. Dashboards, CRMs, booking systems, portals, and SaaS products with complex business logic.", icon: <Code className="w-5 h-5" /> },
    { title: "WordPress & CMS", desc: "WordPress websites with custom themes, plugins, and easy-to-manage content systems. Also Webflow, Wix, and headless CMS implementations.", icon: <Wrench className="w-5 h-5" /> },
    { title: "Maintenance & Hosting", desc: "Ongoing website maintenance, security patches, SSL, backups, performance optimization, and reliable cloud hosting on AWS/Vercel/Netlify.", icon: <Shield className="w-5 h-5" /> },
  ];

  const stats = [
    { value: "150+", label: "Websites Delivered" },
    { value: "50+", label: "E-commerce Stores" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "< 2s", label: "Avg. Load Time" },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "WordPress", "Shopify", "WooCommerce", "Firebase",
    "AWS", "Vercel", "Netlify", "Cloudflare", "Razorpay", "Stripe"
  ];

  const process = [
    { step: "01", title: "Discovery & Planning", desc: "Understanding your business, goals, target audience, and competitors. We create a sitemap, wireframes, and project timeline." },
    { step: "02", title: "UI/UX Design", desc: "Figma/Adobe XD mockups with your brand colors, fonts, and imagery. Mobile-first responsive design with user flow optimization." },
    { step: "03", title: "Development", desc: "Clean, modular code with modern frameworks. SEO-optimized, fast-loading, and cross-browser compatible." },
    { step: "04", title: "Testing & QA", desc: "Thorough testing on all devices and browsers. Performance optimization, security audit, and accessibility compliance." },
    { step: "05", title: "Launch & Support", desc: "Deployment to production, DNS setup, SSL, and analytics integration. 3 months free support included." },
  ];

  const industries = [
    { name: "Real Estate", desc: "Property listings, virtual tours, lead capture, agent portals" },
    { name: "E-commerce", desc: "Product catalogs, cart, checkout, inventory, order management" },
    { name: "Restaurants & Cafes", desc: "Online menus, ordering, reservations, delivery integration" },
    { name: "Healthcare", desc: "Appointment booking, patient portals, telemedicine platforms" },
    { name: "Education", desc: "LMS platforms, course catalogs, student portals, payment systems" },
    { name: "Travel & Hospitality", desc: "Booking engines, itinerary builders, review systems" },
  ];

  const packages = [
    { name: "Landing Page", price: "₹25,000", features: ["Single page design", "Mobile responsive", "Contact form", "SEO basics", "5-day delivery"] },
    { name: "Business Website", price: "₹75,000", features: ["5-10 pages", "Custom design", "CMS integration", "SEO optimized", "Analytics", "3-month support"] },
    { name: "E-commerce / Web App", price: "₹1,50,000+", features: ["Unlimited pages", "Payment gateway", "Admin dashboard", "Custom features", "Performance optimized", "6-month support"] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Web Development Services" description="Custom website development with React, Next.js, WordPress & e-commerce solutions. SEO-optimized, responsive websites by PostersCraft." path="/web-development" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              web-development.tsx
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<WebDevelopment />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Web Development</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                We build stunning, fast, and responsive websites that drive results. 150+ websites delivered across real estate, 
                e-commerce, healthcare, education, and more. From simple landing pages to complex web applications — we code it all.
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

          {/* Process */}
          <section className="py-16">
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

          {/* Industries */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Industries We Serve</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((ind, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <h3 className="font-medium text-foreground mb-1">{ind.name}</h3>
                      <p className="text-sm text-muted-foreground">{ind.desc}</p>
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Let's Build Your Website</h2>
              <p className="text-muted-foreground mb-6">From idea to launch in as fast as 5 days.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 material-transition font-medium inline-flex items-center gap-2">
                  Get a Quote <ArrowRight className="w-4 h-4" />
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

export default WebDevelopmentPage;
