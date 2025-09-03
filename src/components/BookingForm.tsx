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
    toast.success("Rezervasyon talebiniz gönderildi! 24 saat içinde sizinle iletişime geçeceğiz.");
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
            Maceranızı
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> Rezerve Edin</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uçmaya hazır mısınız? Aşağıdaki formu doldurun, rezervasyonunuzu onaylamak için 24 saat içinde sizinle iletişime geçelim.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="shadow-adventure">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Hızlı Rezervasyon</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ad Soyad *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-posta *</Label>
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
                    <Label htmlFor="phone">Telefon Numarası *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Tercih Edilen Tarih</Label>
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
                    <Label htmlFor="package">Uçuş Paketi</Label>
                    <Select onValueChange={(value) => handleChange("package", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Paket seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standart Uçuş (€80)</SelectItem>
                        <SelectItem value="sunset">Gün Batımı Uçuşu (€120)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="participants">Katılımcılar</Label>
                    <Select onValueChange={(value) => handleChange("participants", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Kişi sayısı" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Kişi</SelectItem>
                        <SelectItem value="2">2 Kişi</SelectItem>
                        <SelectItem value="3">3 Kişi</SelectItem>
                        <SelectItem value="4">4+ Kişi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Ek Bilgiler</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Özel istekleriniz veya sorularınız var mı?"
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Rezervasyon Talebini Gönder
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">+90 252 617 0511</div>
                      <div className="text-sm text-muted-foreground">7/24 Destek</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">info@oludenizparagliding.com</div>
                      <div className="text-sm text-muted-foreground">2 saat içinde yanıt</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Günlük Uçuşlar</div>
                      <div className="text-sm text-muted-foreground">08:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Pakete Dahil Olanlar</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Profesyonel sertifikalı eğitmen
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Tüm güvenlik ekipmanları
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Sigorta kapsamı
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Ölüdeniz merkezden transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Fotoğraf paketi
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Uçuş sertifikası
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Güvenlik Önceliğimiz</h3>
                <p className="text-sm text-muted-foreground">
                  Tüm eğitmenlerimiz APPI (Yamaç Paraşütü Pilotları ve Eğitmenleri Derneği) sertifikalıdır 
                  ve 15+ yıl deneyime sahiptir. Düzenli ekipman kontrolleri ve hava durumu takibi ile 
                  %100 güvenlik kaydımızı sürdürüyoruz.
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