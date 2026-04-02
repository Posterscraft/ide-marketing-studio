import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1],
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="flex-1 flex flex-col"
      >
        <Routes location={location}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
