import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto">
          <div className="bg-surface-variant border-b border-border px-4 flex items-center h-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-surface px-4 py-1.5 rounded-t border border-b-0 border-border text-sm font-medium text-foreground"
            >
              services.xml
            </motion.div>
          </div>
          <Services />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;
