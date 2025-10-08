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
import HamburgerTest from "./components/HamburgerTest";
import Demos from "./pages/Demos";
import Landing from "./pages/Landing";
import MVPFunding from "./pages/MVPFunding";
import StartupQuiz from "./pages/StartupQuiz";
import MobileAppGuide from "./pages/MobileAppGuide";
import CookieConsent from "react-cookie-consent";

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
          <Route path="/landing" element={<Landing />} />
          <Route path="/mvp-funding" element={<MVPFunding />} />
          <Route path="/startup-quiz" element={<StartupQuiz />} />
          <Route path="/mobile-app-guide" element={<MobileAppGuide />} />
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
          <Route path="/demos" element={<Demos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          style={{
            background: "rgba(31, 41, 55, 0.92)",
            color: "#fff",
            borderRadius: 0,
            margin: 0,
            maxWidth: "100vw",
            width: "100vw",
            left: 0,
            right: 0,
            marginLeft: 0,
            marginRight: 0,
            boxShadow: "0 -2px 12px 0 rgba(0,0,0,0.08)",
            padding: "0.5rem 0.75rem 0.5rem 0.75rem",
            fontSize: "0.92rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            bottom: 0,
            zIndex: 1000,
          }}
          buttonStyle={{
            background: "linear-gradient(90deg, #fb923c 0%, #fde047 100%)",
            color: "#222",
            borderRadius: "9999px",
            fontWeight: 600,
            padding: "0.4rem 1.1rem",
            margin: "0 0 0 0.5rem",
            border: "none",
            fontSize: "0.95rem",
            display: "inline-block",
          }}
          declineButtonStyle={{
            background: "#fff",
            color: "#fb923c",
            borderRadius: "9999px",
            fontWeight: 600,
            padding: "0.4rem 1.1rem",
            margin: "0 0 0 0.5rem",
            border: "none",
            fontSize: "0.95rem",
            display: "inline-block",
          }}
          contentStyle={{
            fontSize: "0.92rem",
            textAlign: "left",
            marginBottom: 0,
            flex: 1,
          }}
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
