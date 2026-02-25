import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PartyPopper, CheckCircle } from "lucide-react";

const EventManagementPage = () => {
  const features = [
    { title: "Corporate Events", desc: "Conferences, seminars, team outings, and annual functions planned and executed flawlessly." },
    { title: "Product Launches", desc: "Grand product reveals with stage design, media coverage, and influencer invites." },
    { title: "Exhibitions & Trade Shows", desc: "Booth design, promotional material, and on-ground activation at exhibitions." },
    { title: "Brand Activations", desc: "Engaging brand experiences with interactive installations and sampling campaigns." },
    { title: "Wedding & Social Events", desc: "Complete wedding planning, decor, entertainment, and photography coordination." },
    { title: "Virtual & Hybrid Events", desc: "Online events with live streaming, virtual stages, and audience engagement tools." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      <div className="flex flex-1">
        <ProjectExplorer />
        <main className="flex-1 overflow-y-auto">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground">
              events.xml
            </motion.div>
          </div>
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">{"<EventManagement />"}</div>
              <h1 className="text-3xl lg:text-5xl font-medium text-foreground mb-4">Event Management</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-12">
                From corporate conferences to product launches — we plan, coordinate, and execute memorable events end-to-end.
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
                <div className="flex items-center gap-3 mb-4"><PartyPopper className="w-6 h-6 text-primary" /><h3 className="text-xl font-medium text-foreground">Pricing</h3></div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹50,000</div><div className="text-sm text-muted-foreground">Small Events</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹1,50,000</div><div className="text-sm text-muted-foreground">Corporate Events</div></div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center"><div className="text-xl font-bold text-foreground">₹5,00,000+</div><div className="text-sm text-muted-foreground">Large-Scale Events</div></div>
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

export default EventManagementPage;
