import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import StudioPage from "./pages/StudioPage";
import PortfolioPage from "./pages/PortfolioPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import CreativeProductionPage from "./pages/CreativeProductionPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import MobileAppPage from "./pages/MobileAppPage";
import SeoMarketingPage from "./pages/SeoMarketingPage";
import AdCreativesPage from "./pages/AdCreativesPage";
import BrandingPage from "./pages/BrandingPage";
import SocialCampaignsPage from "./pages/SocialCampaignsPage";
import EventManagementPage from "./pages/EventManagementPage";
import StudioBookingPage from "./pages/StudioBookingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/creative-production" element={<CreativeProductionPage />} />
          <Route path="/video-editing" element={<VideoEditingPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/mobile-app-development" element={<MobileAppPage />} />
          <Route path="/seo-marketing" element={<SeoMarketingPage />} />
          <Route path="/ad-creatives" element={<AdCreativesPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/social-campaigns" element={<SocialCampaignsPage />} />
          <Route path="/event-management" element={<EventManagementPage />} />
          <Route path="/studio-booking" element={<StudioBookingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
