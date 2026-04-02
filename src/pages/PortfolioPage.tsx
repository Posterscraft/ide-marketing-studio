import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Portfolio" description="View PostersCraft's portfolio of web development, mobile apps, branding, video production, and digital marketing projects." path="/portfolio" />
          <Portfolio />
          <Footer />
        </main>
    </div>
      <MobileBottomNav />
    </div>
  );
};

export default PortfolioPage;
