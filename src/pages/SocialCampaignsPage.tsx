import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Share2, CheckCircle, BarChart3, Users, Target, Megaphone, ArrowRight, TrendingUp, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const SocialCampaignsPage = () => {
  const services = [
    { title: "Social Media Management", desc: "Complete management of your Instagram, Facebook, LinkedIn, Twitter & YouTube. Daily posts, stories, reels, community management, and growth strategy.", icon: <Share2 className="w-5 h-5" /> },
    { title: "Content Calendar & Strategy", desc: "Monthly content calendars aligned with festivals, trends, and your business goals. We plan 30+ posts/month with captions, hashtags, and posting times.", icon: <Calendar className="w-5 h-5" /> },
    { title: "Influencer Marketing", desc: "Identify, negotiate, and manage influencer collaborations. From micro-influencers to celebrity partnerships — we handle the entire campaign.", icon: <Users className="w-5 h-5" /> },
    { title: "Paid Social Advertising", desc: "ROI-focused ad campaigns on Facebook, Instagram, and LinkedIn. We've managed ₹70L+ in social ad spend with proven results.", icon: <Target className="w-5 h-5" /> },
    { title: "Community Management", desc: "Active engagement with your followers — responding to comments, DMs, reviews, and building a loyal community around your brand.", icon: <MessageCircle className="w-5 h-5" /> },
    { title: "Analytics & Reporting", desc: "Weekly & monthly reports with engagement rates, follower growth, reach, impressions, and actionable insights to improve performance.", icon: <BarChart3 className="w-5 h-5" /> },
  ];

  const platforms = [
    { name: "Instagram", stats: "Reels, Stories, Posts, IGTV", expertise: "Content creation, hashtag strategy, reel trends, shopping integration" },
    { name: "Facebook", stats: "Pages, Groups, Marketplace", expertise: "Community building, event promotion, lead generation, messenger bots" },
    { name: "LinkedIn", stats: "Company Pages, Articles", expertise: "B2B marketing, thought leadership, employee advocacy, lead gen" },
    { name: "YouTube", stats: "Channels, Shorts, Ads", expertise: "Video SEO, thumbnail design, channel optimization, monetization strategy" },
    { name: "Twitter / X", stats: "Threads, Spaces, Polls", expertise: "Real-time engagement, trending topics, brand voice, customer support" },
    { name: "Google My Business", stats: "Reviews, Posts, Q&A", expertise: "Local SEO, review management, photo updates, offer promotions" },
  ];

  const results = [
    { metric: "₹70L+", label: "Ad Spend Managed", detail: "Across Facebook & Instagram campaigns" },
    { metric: "500%", label: "Avg. ROAS", detail: "Return on ad spend across e-commerce clients" },
    { metric: "10M+", label: "Total Reach", detail: "Monthly reach across all managed accounts" },
    { metric: "150+", label: "Campaigns Run", detail: "Successful social campaigns delivered" },
  ];

  const packages = [
    { name: "Starter", price: "₹15,000/mo", features: ["15 posts/month", "1 platform", "Basic analytics", "Caption writing", "Hashtag research"] },
    { name: "Growth", price: "₹30,000/mo", features: ["30 posts/month", "3 platforms", "Reels creation (4/mo)", "Story design", "Monthly report", "Community management"] },
    { name: "Premium", price: "₹60,000+/mo", features: ["60+ posts/month", "All platforms", "Daily reels/stories", "Influencer outreach", "Paid ad management", "Weekly reports", "Dedicated manager"] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <SEO title="Social Media Campaigns" description="Social media management, content strategy, influencer marketing & paid social advertising. Grow your brand with PostersCraft." path="/social-campaigns" />
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              social-campaigns.json
            </motion.div>
          </div>

          {/* Hero */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<SocialCampaigns />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Social Media Campaigns</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Data-driven social media campaigns across Facebook, Instagram, LinkedIn, YouTube, and Twitter. 
                We've managed ₹70L+ in social ad spend and reached 10M+ people. From strategy to execution — we handle everything.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {results.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-4 text-center elevation-2 border border-border bg-surface">
                      <div className="text-2xl lg:text-3xl font-bold text-primary">{r.metric}</div>
                      <div className="text-sm font-medium text-foreground">{r.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{r.detail}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-12 bg-surface-variant/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">What We Offer</h2>
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

          {/* Platforms */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8">Platforms We Master</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 elevation-2 border border-border bg-surface h-full">
                      <h3 className="font-medium text-foreground mb-1">{p.name}</h3>
                      <div className="text-xs text-primary mb-2">{p.stats}</div>
                      <p className="text-sm text-muted-foreground">{p.expertise}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Packages */}
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
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">Ready to Go Viral?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's create campaigns that stop the scroll and drive real results.</p>
              <Link to="/contact">
                <button className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg elevation-2 hover:elevation-3 material-transition font-medium inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
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

export default SocialCampaignsPage;
