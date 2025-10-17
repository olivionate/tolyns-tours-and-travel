import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import DestinationsPage from "./pages/Destinations";
import WildlifeSafaris from "./pages/services/WildlifeSafaris";
import BeachCoastal from "./pages/services/BeachCoastal";
import MountainClimbing from "./pages/services/MountainClimbing";
import CulturalTours from "./pages/services/CulturalTours";
import CorporateTravel from "./pages/services/CorporateTravel";
import TravelLogistics from "./pages/services/TravelLogistics";

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
