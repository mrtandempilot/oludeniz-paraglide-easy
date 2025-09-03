import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
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
