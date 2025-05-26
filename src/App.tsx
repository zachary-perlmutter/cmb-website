import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import AutomationServices from "./pages/AutomationServices";
import WebApps from "./pages/WebApps";
import MobileApps from "./pages/MobileApps";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Audit from "./pages/Audit";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookieConsent from "react-cookie-consent";
import HamburgerTest from "./components/HamburgerTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/automation" element={<AutomationServices />} />
          <Route path="/services/web-apps" element={<WebApps />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Contact />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/hamburger" element={<HamburgerTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          style={{
            background: "rgba(31, 41, 55, 0.95)",
            color: "#fff",
            borderRadius: "1rem",
            margin: "0.5rem",
            maxWidth: "95vw",
            width: "100%",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
            padding: "1.25rem 1rem",
            fontSize: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          buttonStyle={{
            background: "linear-gradient(90deg, #fb923c 0%, #fde047 100%)",
            color: "#222",
            borderRadius: "9999px",
            fontWeight: 700,
            padding: "0.9rem 2.2rem",
            margin: "0.5rem 0 0 0",
            border: "none",
            width: "100%",
            maxWidth: 320,
            fontSize: "1.1rem",
          }}
          declineButtonStyle={{
            background: "#fff",
            color: "#fb923c",
            borderRadius: "9999px",
            fontWeight: 700,
            padding: "0.9rem 2.2rem",
            margin: "0.5rem 0 0 0",
            border: "none",
            width: "100%",
            maxWidth: 320,
            fontSize: "1.1rem",
          }}
          contentStyle={{ fontSize: "1rem", textAlign: "center" }}
          expires={365}
        >
          We use cookies to enhance your experience and analyze site usage. Read
          our{" "}
          <a
            href="/privacy"
            style={{ color: "#fde047", textDecoration: "underline" }}
          >
            Privacy Policy
          </a>
          .
        </CookieConsent>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
