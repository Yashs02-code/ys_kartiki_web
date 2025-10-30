import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Building2, Star, QrCode } from "lucide-react";
import Swal from "sweetalert2";

const Donation = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  // Progress bar - fundraising stats
  const targetAmount = 10000000; // 1 Crore
  const raisedAmount = 4250000; // 42.5 Lakhs
  const progressPercentage = (raisedAmount / targetAmount) * 100;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.amount) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#d97706",
      });
      setLoading(false);
      return;
    }

    try {
      const sheetDBUrl = "https://sheetdb.io/api/v1/cmm04qugcxdw5";

      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            amount: formData.amount,
            message: formData.message,
            date: new Date().toLocaleString(),
          },
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      Swal.fire({
        icon: "success",
        title: "Thank You!",
        html: `
      <div style="text-align: center;">
        <p style="font-size: 18px; margin-bottom: 10px;">Your generous donation of ₹${formData.amount} has been received!</p>
        <p style="color: #666;">Thank you for your support and blessings!</p>
      </div>
    `,
        confirmButtonColor: "#d97706",
      });

      setFormData({ name: "", email: "", phone: "", amount: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your donation. Please try again.",
        confirmButtonColor: "#d97706",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="w-16 h-16 mx-auto text-primary mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6 animate-fade-in">
            Support Our Temple
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Support our dream to build a new temple for Lord Vithal and Goddess
            Rakhumai. Every rupee counts in this divine mission!
          </p>
        </div>
      </section>

      {/* Fundraising Progress */}
      <section ref={ref1} className="py-16 px-4">
        <div
          className={`container mx-auto max-w-6xl ${
            inView1 ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5">
            <div className="text-center mb-8">
              <Building2 className="w-12 h-12 mx-auto text-primary mb-4 animate-float" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Temple Project Fundraising
              </h2>
              <p className="text-muted-foreground">
                Together, we’re building something sacred
              </p>
            </div>

            {/* ✅ Updated Fund Progress Section */}
            {(() => {
              const raisedAmount = 250000; // ₹2,50,000
              const targetAmount = 1000000; // ₹10,00,000
              const progressPercentage = (raisedAmount / targetAmount) * 100;

              const formatRupees = (num: number) =>
                new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                }).format(num);

              return (
                <>
                  <div className="mb-6 text-center">
                    <p className="text-2xl md:text-3xl font-display font-semibold text-primary">
                      {formatRupees(raisedAmount)} raised
                      <span className="text-foreground/80">
                        {" "}
                        out of {formatRupees(targetAmount)} goal
                      </span>
                    </p>
                  </div>

                  <div className="mb-4">
                    <Progress value={progressPercentage} className="h-4" />
                    <p className="text-center text-sm text-muted-foreground mt-2">
                      {progressPercentage.toFixed(1)}% of goal reached
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                      <div className="text-3xl font-display font-bold mb-1">
                        1,245
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Generous Donors
                      </div>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <Heart className="w-8 h-8 mx-auto text-primary mb-2" />
                      <div className="text-3xl font-display font-bold mb-1">
                        {formatRupees(raisedAmount)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Raised
                      </div>
                    </div>
                    <div className="text-center p-6 bg-background/50 rounded-xl">
                      <Star className="w-8 h-8 mx-auto text-primary mb-2" />
                      <div className="text-3xl font-display font-bold mb-1">
                        125
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Days Active
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </Card>
        </div>
      </section>

      {/* Donation Form & QR */}
      <section ref={ref2} className="py-16 px-4">
        <div
          className={`container mx-auto max-w-6xl ${
            inView2 ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Donation Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">
                Make a Donation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="amount">Donation Amount (₹) *</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent text-lg py-6"
                >
                  {loading ? "Processing..." : "Submit Donation"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  After submitting, you'll receive instructions for completing
                  the donation via UPI/Bank Transfer
                </p>
              </form>
            </Card>

            {/* QR & Bank Details */}
            <div className="space-y-6">
              <Card className="p-8 text-center">
                <QrCode className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold mb-4">
                  Scan to Donate
                </h3>
                <div className="bg-muted p-6 rounded-xl inline-block mb-4">
                  <div className="w-48 h-48 bg-background rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="w-32 h-32 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">
                        QR Code Placeholder
                      </p>
                      <p className="text-xs text-muted-foreground">
                        UPI: temple@upi
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Scan with any UPI app to donate instantly
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Bank Transfer Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Account Name</p>
                    <p className="font-semibold">
                      Vitthal-Rakhumai Temple Trust
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Account Number</p>
                    <p className="font-semibold">XXXXXXXXXXXX1234</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">IFSC Code</p>
                    <p className="font-semibold">SBIN0001234</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">UPI ID</p>
                    <p className="font-semibold">vitthaltemple@upi</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  All donations are tax-exempt under Section 80G. Receipt will
                  be issued for donations above ₹500.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donation;
