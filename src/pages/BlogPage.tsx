import AppBar from "@/components/AppBar";
import ProjectExplorer from "@/components/ProjectExplorer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import MobileBottomNav from "@/components/MobileBottomNav";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppBar />
      
      <div className="flex flex-1">
        <ProjectExplorer />
        
        <main className="flex-1 overflow-y-auto flex flex-col pb-16 lg:pb-0">
          <SEO title="Blog" description="Read insights on web development, digital marketing, SEO tips, branding strategies, and creative production from PostersCraft." path="/blog" />
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono mb-4">
                {"<Blog />"}
              </div>
              <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-4">
                Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Insights, tutorials, and industry trends from our creative and technical team.
              </p>
            </div>
          </section>
          <Footer />
        </main>
      <MobileBottomNav />
    </div>
    </div>
  );
};

export default BlogPage;
