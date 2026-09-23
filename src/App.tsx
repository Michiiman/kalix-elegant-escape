import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import ProfileDetail from "./pages/ProfileDetail";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import Contacto from "./pages/Contacto";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/bucaramanga" element={<Index />} />
            <Route path="/bucaramanga/catalogo" element={<Catalogo />} />
            <Route path="/bucaramanga/catalogo/:id" element={<ProfileDetail />} />
            <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
            <Route path="/" element={<Navigate to="/bucaramanga" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
