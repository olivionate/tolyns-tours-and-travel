import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import DestinationsPage from "./pages/Destinations";
import ContactPage from "./pages/ContactPage";
import Sustainability from "./pages/Sustainability";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import WildlifeSafaris from "./pages/services/WildlifeSafaris";
import BeachCoastal from "./pages/services/BeachCoastal";
import MountainClimbing from "./pages/services/MountainClimbing";
import CulturalTours from "./pages/services/CulturalTours";
import CorporateTravel from "./pages/services/CorporateTravel";
import TravelLogistics from "./pages/services/TravelLogistics";
import MaasaiMara from "./pages/destinations/MaasaiMara";
import Amboseli from "./pages/destinations/Amboseli";
import DianiBeach from "./pages/destinations/DianiBeach";
import MountKenya from "./pages/destinations/MountKenya";
import LamuIsland from "./pages/destinations/LamuIsland";
import Tsavo from "./pages/destinations/Tsavo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          <Route path="/destinations/maasai-mara" element={<MaasaiMara />} />
          <Route path="/destinations/amboseli" element={<Amboseli />} />
          <Route path="/destinations/diani-beach" element={<DianiBeach />} />
          <Route path="/destinations/mount-kenya" element={<MountKenya />} />
          <Route path="/destinations/lamu-island" element={<LamuIsland />} />
          <Route path="/destinations/tsavo" element={<Tsavo />} />
          <Route path="/services/wildlife-safaris" element={<WildlifeSafaris />} />
          <Route path="/services/beach-coastal" element={<BeachCoastal />} />
          <Route path="/services/mountain-climbing" element={<MountainClimbing />} />
          <Route path="/services/cultural-tours" element={<CulturalTours />} />
          <Route path="/services/corporate-travel" element={<CorporateTravel />} />
          <Route path="/services/travel-logistics" element={<TravelLogistics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
