import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, ArrowRight, Search, BarChart3, Target, Globe, Mail, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const SeoMarketingPage = () => {
  const services = [
    { title: "On-Page SEO", desc: "Meta tags, content optimization, schema markup, site structure, internal linking, image optimization, Core Web Vitals improvement, and technical SEO audits.", icon: <Search className="w-5 h-5" /> },
    { title: "Off-Page SEO", desc: "High-authority link building, guest posting, directory submissions, brand mentions, social signals, and digital PR to boost domain authority.", icon: <Globe className="w-5 h-5" /> },
    { title: "Google Ads (PPC)", desc: "Search, display, shopping, YouTube, and Performance Max campaigns. Keyword research, ad copywriting, bid optimization, and conversion tracking.", icon: <Target className="w-5 h-5" /> },
    { title: "Facebook & Instagram Ads", desc: "Full-funnel social advertising — awareness, consideration, and conversion campaigns. Lookalike audiences, retargeting, and creative A/B testing.", icon: <Megaphone className="w-5 h-5" /> },
    { title: "Analytics & Reporting", desc: "Google Analytics 4, Search Console, Facebook Pixel, and custom dashboards. Weekly/monthly reports with traffic, conversion, and ROI insights.", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Email Marketing", desc: "Email automation, drip campaigns, newsletter design, list segmentation, and A/B testing using Mailchimp, Sendinblue, or custom SMTP.", icon: <Mail className="w-5 h-5" /> },
  ];

  const stats = [
    { value: "₹1Cr+", label: "Total Ad Spend Managed" },
    { value: "₹70L+", label: "Facebook & Instagram Ads" },
    { value: "₹50L+", label: "Google Ads Managed" },
    { value: "300%", label: "Avg. ROI Improvement" },
  ];

  const caseStudies = [
    { client: "E-commerce Fashion Brand", challenge: "Low online sales, high cart abandonment", solution: "Full-funnel Facebook + Google Shopping ads with retargeting", result: "8x ROAS, 150% revenue increase in 3 months" },
    { client: "Real Estate Developer", challenge: "Low-quality leads from generic campaigns", solution: "Targeted Google Ads + landing pages with lead scoring", result: "₹200 cost per qualified lead, 60% conversion rate" },
    { client: "Local Restaurant Chain", challenge: "Low foot traffic and online orders", solution: "Google My Business + Instagram ads + influencer marketing", result: "3x increase in online orders, 200+ Google reviews" },
    { client: "EdTech Startup", challenge: "Need for app installs and course enrollments", solution: "Facebook App Install + Google UAC + YouTube pre-roll ads", result: "50,000 app installs at ₹15/install, 2,000 enrollments" },
  ];

  const process = [
    { step: "01", title: "Audit & Analysis", desc: "Comprehensive audit of your current digital presence — website, SEO, social media, and competitor analysis." },
    { step: "02", title: "Strategy & Planning", desc: "Custom marketing strategy with channel mix, budget allocation, KPIs, and monthly milestones." },
    { step: "03", title: "Execution", desc: "Campaign setup, ad creative design, landing page optimization, and content creation across all channels." },
    { step: "04", title: "Optimize & Scale", desc: "Data-driven optimization — A/B testing, bid adjustments, audience refinement, and scaling winning campaigns." },
  ];

  const packages = [
    { name: "SEO Only", price: "₹15,000/mo", features: ["Technical SEO audit", "On-page optimization", "5 blog posts/month", "Monthly ranking report", "Google My Business"] },
    { name: "SEO + Paid Ads", price: "₹25,000/mo", features: ["Everything in SEO", "Google Ads management", "Facebook/Instagram ads", "Landing page design", "Weekly reports", "Ad creative design"] },
    { name: "Full Digital Marketing", price: "₹50,000+/mo", features: ["Everything above", "Email marketing", "Content marketing", "Influencer outreach", "Video ads", "Dedicated manager", "Daily optimization"] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="SEO & Digital Marketing" description="SEO, Google Ads, Facebook Ads & email marketing services. ₹70L+ ad spend managed with proven ROI by PostersCraft Kolkata." path="/seo-marketing" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              seo-marketing.json
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<SEOMarketing />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">SEO & Digital Marketing</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Data-driven digital marketing that delivers measurable results. We've managed over ₹1 Crore in ad spend across 
                Facebook, Instagram, and Google. From SEO to paid campaigns — we grow your business online.
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Our Services</h2>
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

          {/* Case Studies */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                {caseStudies.map((cs, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 lg:p-6 elevation-2 border border-border bg-surface h-full">
                      <h3 className="font-medium text-foreground mb-3">{cs.client}</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-muted-foreground font-medium">Challenge:</span> <span className="text-muted-foreground">{cs.challenge}</span></div>
                        <div><span className="text-muted-foreground font-medium">Solution:</span> <span className="text-muted-foreground">{cs.solution}</span></div>
                        <div className="text-primary font-medium bg-primary/10 px-3 py-1.5 rounded mt-2 inline-block">{cs.result}</div>
                      </div>
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

          {/* Pricing */}
          <section className="py-16">
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
          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Ready to Grow Online?</h2>
              <p className="text-muted-foreground mb-6">Free marketing audit + strategy session. No commitments.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 material-transition font-medium inline-flex items-center gap-2">
                  Get Free Audit <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </section>

          <Footer />
        </main>
    </div>
      <MobileBottomNav />
    </div>
  );
};

export default SeoMarketingPage;
