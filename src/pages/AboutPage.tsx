import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Globe, ShoppingCart, Youtube, Coffee, Building2, Palmtree, Award, Users, IndianRupee, Calendar, Target } from "lucide-react";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const AboutPage = () => {
  const stats = [
    { icon: <IndianRupee className="w-6 h-6" />, value: "₹70L+", label: "Ad Spend on Facebook & Instagram" },
    { icon: <Target className="w-6 h-6" />, value: "₹50L+", label: "Google Ads Managed" },
    { icon: <ShoppingCart className="w-6 h-6" />, value: "₹30L+", label: "E-commerce Revenue Driven" },
    { icon: <Calendar className="w-6 h-6" />, value: "Since 2019", label: "Years of Excellence" },
    { icon: <Users className="w-6 h-6" />, value: "100+", label: "Happy Clients" },
    { icon: <Globe className="w-6 h-6" />, value: "50+", label: "Websites Delivered" },
  ];

  const domains = [
    { name: "E-commerce", icon: <ShoppingCart className="w-5 h-5" />, description: "Complete online stores with payment gateways, inventory management, and conversion-optimized funnels." },
    { name: "Coffee Shops & Restaurants", icon: <Coffee className="w-5 h-5" />, description: "Beautiful brand identities and digital presence for cafes, restaurants, and food businesses." },
    { name: "Real Estate", icon: <Building2 className="w-5 h-5" />, description: "Property listing websites, virtual tours, lead generation campaigns for builders and brokers." },
    { name: "YouTube & Content Creators", icon: <Youtube className="w-5 h-5" />, description: "Channel branding, thumbnails, video editing, and growth strategies for creators." },
    { name: "Resorts & Hospitality", icon: <Palmtree className="w-5 h-5" />, description: "Stunning websites and marketing campaigns for hotels, resorts, and travel businesses." },
    { name: "Corporate & Enterprise", icon: <Award className="w-5 h-5" />, description: "Professional websites, internal tools, branding, and digital transformation for businesses." },
  ];

  const timeline = [
    { year: "2019", title: "The Beginning", description: "Started PostersCraft with a passion for graphic design and creative production in Kolkata." },
    { year: "2020", title: "Digital Expansion", description: "Expanded into web development and digital marketing. Built our first portfolio of client websites." },
    { year: "2021", title: "Ad Campaign Mastery", description: "Crossed ₹20L+ in managed ad spend. Partnered with e-commerce brands for performance marketing." },
    { year: "2022", title: "Studio Launch", description: "Opened our post-production studio. Started offering video editing, reels production, and motion graphics." },
    { year: "2023", title: "Full-Service Agency", description: "Became a full-service creative agency. Crossed ₹50L+ in total managed ad spend across platforms." },
    { year: "2024", title: "Scaling New Heights", description: "70L+ in Facebook & Instagram ads, 50L+ in Google Ads. Expanded into app development and event management." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="About Us" description="Learn about PostersCraft — Kolkata's leading web development, app development & digital marketing studio. Since 2019, serving 100+ clients with ₹70L+ ad spend managed." path="/about" />
          {/* Editor Tab */}
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground"
            >
              about.json
            </motion.div>
          </div>

          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-editor-bg">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4"
              >
                {"<About />"}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl lg:text-5xl font-medium text-foreground mb-6"
              >
                Crafting Digital Excellence<br />
                <span className="gradient-primary bg-clip-text text-transparent">Since 2019</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                From a small creative team in Kolkata to a full-service digital agency — we've helped brands 
                across industries build unforgettable digital experiences and run high-performance ad campaigns.
              </motion.p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 lg:py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground text-center mb-10">
                Our Numbers Speak
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center elevation-2 hover:elevation-4 material-transition border border-border bg-surface group">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-3 group-hover:gradient-primary group-hover:text-primary-foreground material-transition">
                        {stat.icon}
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Journey Timeline */}
          <section className="py-12 lg:py-20 bg-editor-bg border-y border-border">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground text-center mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                From humble beginnings to managing lakhs in ad spend — here's our growth story.
              </p>
              <div className="max-w-3xl mx-auto space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 lg:gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xs flex-shrink-0">
                        {item.year.slice(2)}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-border min-h-[40px]" />
                      )}
                    </div>
                    <Card className="flex-1 p-4 lg:p-5 mb-4 elevation-1 border border-border bg-surface">
                      <div className="text-xs font-mono text-primary mb-1">{item.year}</div>
                      <h3 className="text-base lg:text-lg font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Domains We've Worked In */}
          <section className="py-12 lg:py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground text-center mb-4">
                Domains We've Conquered
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                We've delivered exceptional results across diverse industries — from local cafes to large real estate firms.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
                {domains.map((domain, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="p-5 lg:p-6 elevation-2 hover:elevation-4 material-transition border border-border bg-surface h-full group cursor-pointer">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3 group-hover:gradient-primary group-hover:text-primary-foreground material-transition">
                        {domain.icon}
                      </div>
                      <h3 className="text-base lg:text-lg font-medium text-foreground mb-2">{domain.name}</h3>
                      <p className="text-sm text-muted-foreground">{domain.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ad Performance Highlight */}
          <section className="py-12 lg:py-20 bg-editor-bg border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8 lg:p-12 elevation-3 border border-border bg-surface text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">
                    Performance Marketing That Delivers
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    We don't just create ads — we engineer results. Our data-driven approach to digital advertising has generated 
                    massive ROI for our clients across all platforms.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">₹70L+</div>
                      <div className="text-sm text-muted-foreground">Facebook & Instagram Ads</div>
                      <div className="text-xs text-primary/70 mt-1">Across 100+ campaigns</div>
                    </div>
                    <div className="p-4 bg-cta/5 rounded-lg border border-cta/20">
                      <div className="text-2xl font-bold text-cta mb-1">₹50L+</div>
                      <div className="text-sm text-muted-foreground">Google Ads</div>
                      <div className="text-xs text-cta/70 mt-1">Search, Display & YouTube</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-1">₹30L+</div>
                      <div className="text-sm text-muted-foreground">E-commerce Revenue</div>
                      <div className="text-xs text-primary/70 mt-1">Direct sales generated</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-12 lg:py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground text-center mb-10">
                What We Do
              </h2>
              <div className="max-w-4xl mx-auto">
                <Card className="p-6 lg:p-8 elevation-2 border border-border bg-surface">
                  <div className="bg-editor-bg rounded p-4 lg:p-6 font-mono text-sm border border-border">
                    <div className="text-code-keyword">const</div>
                    <div className="ml-2 text-foreground">PostersCraft = {"{"}</div>
                    <div className="ml-4 text-muted-foreground">
                      <span className="text-code-string">creative:</span> ["Posters", "Banners", "Social Media", "Motion Graphics"],
                    </div>
                    <div className="ml-4 text-muted-foreground">
                      <span className="text-code-string">video:</span> ["Reels", "YouTube", "Wedding Films", "Corporate Videos"],
                    </div>
                    <div className="ml-4 text-muted-foreground">
                      <span className="text-code-string">development:</span> ["Websites", "E-commerce", "Mobile Apps", "Web Apps"],
                    </div>
                    <div className="ml-4 text-muted-foreground">
                      <span className="text-code-string">marketing:</span> ["Facebook Ads", "Google Ads", "SEO", "Email Marketing"],
                    </div>
                    <div className="ml-4 text-muted-foreground">
                      <span className="text-code-string">branding:</span> ["Logo Design", "Brand Identity", "Packaging", "Stationery"],
                    </div>
                    <div className="ml-4 text-muted-foreground">
                      <span className="text-code-string">events:</span> ["Corporate Events", "Product Launches", "Exhibitions"],
                    </div>
                    <div className="ml-2 text-foreground">{"};"}</div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <Footer />
        </main>
    </div>
      <MobileBottomNav />
    </div>
  );
};

export default AboutPage;
