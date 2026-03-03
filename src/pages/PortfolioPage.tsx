import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col">
          <SEO title="Portfolio" description="View PostersCraft's portfolio of web development, mobile apps, branding, video production, and digital marketing projects." path="/portfolio" />
          <Portfolio />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default PortfolioPage;
