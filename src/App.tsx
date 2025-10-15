
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UslugiPage from "./pages/UslugiPage";
import UzakonivaniePage from "./pages/uslugi/UzakonivaniePage";
import RazreshenieNaStroitelstvoPage from "./pages/uslugi/RazreshenieNaStroitelstvoPage";
import VvodVEkspluataciuPage from "./pages/uslugi/VvodVEkspluataciuPage";
import ZemelnyeUchastkiPage from "./pages/uslugi/ZemelnyeUchastkiPage";
import TehnicheskijZakazchikPage from "./pages/uslugi/TehnicheskijZakazchikPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<UslugiPage />} />
            <Route path="/uslugi/uzakonivanie-samostroya" element={<UzakonivaniePage />} />
            <Route path="/uslugi/razreshenie-na-stroitelstvo" element={<RazreshenieNaStroitelstvoPage />} />
            <Route path="/uslugi/vvod-v-ekspluataciyu" element={<VvodVEkspluataciuPage />} />
            <Route path="/uslugi/oformlenie-zemelnyh-uchastkov" element={<ZemelnyeUchastkiPage />} />
            <Route path="/uslugi/tehnicheskij-zakazchik" element={<TehnicheskijZakazchikPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;