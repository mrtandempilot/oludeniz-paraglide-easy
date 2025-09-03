import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-paragliding.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Oludeniz
          <span className="block text-4xl md:text-6xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Paragliding
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto">
          Soar above Turkey's stunning Blue Lagoon. Experience the thrill of tandem paragliding 
          with certified instructors over one of the world's most beautiful coastlines.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToBooking}
            className="text-lg px-8 py-6"
          >
            Book Your Flight
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1200m</div>
            <div className="text-sm">Flight Altitude</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">25min</div>
            <div className="text-sm">Average Flight Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm">Safety Record</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;