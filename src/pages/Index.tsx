import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col">
          <SEO title="PostersCraft - Web Development, App Development & Digital Marketing Studio" description="PostersCraft specializes in web development, mobile app development, SEO optimization, creative production, and digital marketing solutions in Kolkata." path="/" keywords="web development, mobile app development, SEO, digital marketing, branding, Kolkata" />
          <Hero />
          <Services />
          <TechStack />
          <Portfolio />
          <Clients />
          <Contact />
          <Footer />
        </main>
      </div>
      
      <FloatingSocials />
    </div>
  );
};

export default Index;
