import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      rating: 5,
      text: "Absolutely incredible experience! The view over Oludeniz was breathtaking and our instructor made us feel completely safe. The photos they took were professional quality. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      name: "Michael Schmidt",
      country: "Germany", 
      rating: 5,
      text: "Best activity we did in Turkey! The sunset flight was magical - floating above the Blue Lagoon as the sun set was unforgettable. Professional team and excellent value for money.",
      date: "1 month ago"
    },
    {
      name: "Emma & James",
      country: "Australia",
      rating: 5,
      text: "We were nervous at first but the instructors were so experienced and reassuring. The flight was smooth and the views were out of this world. Already planning to come back next year!",
      date: "3 weeks ago"
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      rating: 5,
      text: "Perfect organization from start to finish. Pickup was on time, equipment was top quality, and the 25-minute flight felt like it could have lasted forever. Thank you for an amazing experience!",
      date: "1 week ago"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Guests
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers who've experienced the magic of Oludeniz from above
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-adventure hover:scale-105 relative overflow-hidden">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;