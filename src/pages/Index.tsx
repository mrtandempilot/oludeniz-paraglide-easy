console.log("Index.tsx loading...");

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

console.log("All components imported successfully");

const Index = () => {
  console.log("Index component rendering...");
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
