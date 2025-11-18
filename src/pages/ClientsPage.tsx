import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

const ClientsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto">
          <Clients />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ClientsPage;
