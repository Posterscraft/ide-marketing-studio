import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle } from "lucide-react";

const SeoMarketingPage = () => {
  const features = [
    { title: "On-Page SEO", desc: "Meta tags, content optimization, schema markup, and site structure improvements." },
    { title: "Off-Page SEO", desc: "Link building, guest posting, directory submissions, and authority building." },
    { title: "Google Ads", desc: "Search, display, shopping, and YouTube ad campaigns with ROI tracking." },
    { title: "Facebook & Instagram Ads", desc: "Targeted social media advertising with creative design and A/B testing." },
    { title: "Analytics & Reporting", desc: "Monthly reports with traffic, conversion, and ROI insights using Google Analytics." },
    { title: "Content Marketing", desc: "Blog writing, infographics, and content strategy to drive organic traffic." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              seo-marketing.json
            </motion.div>
          </div>
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<SEOMarketing />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">SEO & Digital Marketing</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-12">
                Data-driven digital marketing that delivers measurable results. We've managed over ₹1 Crore in ad spend across platforms.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-5 lg:p-6 elevation-2 border border-border bg-surface h-full">
                      <CheckCircle className="w-5 h-5 text-primary mb-3" />
                      <h3 className="text-base lg:text-lg font-medium text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <Card className="mt-12 p-6 lg:p-8 elevation-2 border border-border bg-surface">
                <div className="flex items-center gap-3 mb-4"><TrendingUp className="w-6 h-6 text-primary" /><h3 className="text-xl font-medium text-foreground">Pricing</h3></div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹15,000/mo</div><div className="text-sm text-muted-foreground">SEO Only</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹25,000/mo</div><div className="text-sm text-muted-foreground">SEO + Ads</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹50,000+/mo</div><div className="text-sm text-muted-foreground">Full Digital Marketing</div></div>
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

export default SeoMarketingPage;
