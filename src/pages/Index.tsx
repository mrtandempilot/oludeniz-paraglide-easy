import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <>
      <SEO />
      <LanguageSwitcher />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Testimonials />
        <LocationMap />
        <Footer />
      </main>
    </>
  );
};

export default Index;
