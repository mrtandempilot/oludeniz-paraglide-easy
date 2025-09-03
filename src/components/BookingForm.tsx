import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    package: "",
    participants: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      package: "",
      participants: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> Adventure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to soar? Fill out the form below and we'll get back to you within 24 hours to confirm your booking.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="shadow-adventure">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quick Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="package">Flight Package</Label>
                    <Select onValueChange={(value) => handleChange("package", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Flight (€80)</SelectItem>
                        <SelectItem value="sunset">Sunset Flight (€120)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="participants">Participants</Label>
                    <Select onValueChange={(value) => handleChange("participants", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Number of people" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Any special requests or questions?"
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">+90 252 617 0511</div>
                      <div className="text-sm text-muted-foreground">24/7 Support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">info@oludenizparagliding.com</div>
                      <div className="text-sm text-muted-foreground">Response within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Daily Flights</div>
                      <div className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Professional certified instructor
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    All safety equipment & gear
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Insurance coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Transport from Oludeniz center
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Photo package
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Flight certificate
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  All our instructors are certified by APPI (Association of Paragliding Pilots and Instructors) 
                  with over 15 years of experience. We maintain a 100% safety record with regular equipment 
                  inspections and weather monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;