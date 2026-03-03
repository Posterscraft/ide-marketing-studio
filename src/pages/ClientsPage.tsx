import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ClientsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col">
          <SEO title="Our Clients" description="Trusted by 100+ businesses across e-commerce, real estate, hospitality, and more. See PostersCraft's happy clients." path="/clients" />
          <Clients />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ClientsPage;
