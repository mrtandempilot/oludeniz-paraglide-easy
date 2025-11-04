import Hero from "@/components/Hero";
import ServicesUpdated from "@/components/ServicesUpdated";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <>
      <SEO />
      <LanguageSwitcher />
      <main className="min-h-screen">
        <Hero />
        <ServicesUpdated />
        <Testimonials />
        <LocationMap />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
};

export default Index;
