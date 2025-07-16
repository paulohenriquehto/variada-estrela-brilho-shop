import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PurchaseNotification from "@/components/PurchaseNotification";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
      <PurchaseNotification />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
