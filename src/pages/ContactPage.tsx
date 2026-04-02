import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Contact Us" description="Get in touch with PostersCraft for web development, app development, SEO, and digital marketing services. Call +91 8981104129 or email contact@posterscraft.com." path="/contact" />
          <Contact />
          <Footer />
        </main>
      <MobileBottomNav />
    </div>
    </div>
  );
};

export default ContactPage;
