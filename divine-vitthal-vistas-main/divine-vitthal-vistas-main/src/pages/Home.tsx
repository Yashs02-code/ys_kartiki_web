import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Camera, Phone } from "lucide-react";
import Typed from "typed.js"; // ✅ NEW IMPORT
import templeHero from "@/assets/temple-hero.jpg";

const Home = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ✅ NEW: Ref for typed.js
  const typedRef = useRef<HTMLSpanElement>(null);

  // ✅ NEW: Typed.js Effect
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Vitthal Rakhumai Temple",

      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={templeHero}
            alt="Vitthal Rakhumai Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/60 to-black/50" />

        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* ✅ Modified Heading with Typed.js */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            <span ref={typedRef}></span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 animate-slide-up">
            Experience Divine Grace in Ambere Village
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join us in celebrating Kartiki Ekadashi Utsav 2025 at the holy
            Vitthal Rakhumai Temple. Experience divine bliss, soulful bhajans,
            and the spiritual energy of Pandharpur right here in our village.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoom-in">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all text-lg px-8"
            >
              <Link to="/donation">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
            >
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                View Events
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float" />
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section ref={ref1} className="py-20 px-4">
        <div
          className={`container mx-auto max-w-6xl ${
            inView1 ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              About Our Temple
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Vitthal Rakhumai Temple in Ambere Village has been a holy
                place for devotees for many years. Dedicated to Lord Vitthal and
                Goddess Rakhumai, it brings people together in faith and
                devotion. As we celebrate the Kartiki Ekadashi Utsav 2025, let
                us join in prayer, kirtan, and bhakti to receive the Lord’s
                blessings.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Vitthal Rakhumai Temple is full of faith and devotion. Let’s
                come together this Utsav 2025 to celebrate with joy and prayers.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-glow">
                <img
                  src={templeHero}
                  alt="Temple Interior"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Kartiki Ekadashi Highlight */}
      <section
        ref={ref2}
        className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10"
      >
        <div
          className={`container mx-auto max-w-6xl ${
            inView2 ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20">
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 mx-auto text-primary mb-4 animate-float" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
                Kartiki Ekadashi Utsav 2025
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join us for the grand celebration of Kartiki Ekadashi, one of the
                most auspicious days in our temple calendar. Experience divine
                bhajans, traditional rituals, and community prayers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <h3 className="text-xl font-display font-semibold mb-2 text-primary">
                  Date
                </h3>
                <p className="text-lg">November 02, 2025</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <h3 className="text-xl font-display font-semibold mb-2 text-primary">
                  Time
                </h3>
                <p className="text-lg">9:00 AM - 10:00 PM</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <h3 className="text-xl font-display font-semibold mb-2 text-primary">
                  Special
                </h3>
                <p className="text-lg">Maha Aarti & Prasad</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent">
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section ref={ref3} className="py-20 px-4">
        <div
          className={`container mx-auto max-w-6xl ${
            inView3 ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all cursor-glow group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                <Camera className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Gallery</h3>
              <p className="text-muted-foreground mb-4">
                Explore beautiful photos from our temple and festivals
              </p>
              <Button asChild variant="outline" className="border-primary text-primary">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all cursor-glow group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                <Heart className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Donate</h3>
              <p className="text-muted-foreground mb-4">
                Support our new temple construction project
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link to="/donation">Make a Donation</Link>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all cursor-glow group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                <Phone className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Contact</h3>
              <p className="text-muted-foreground mb-4">
                Get in touch with us for any queries or assistance
              </p>
              <Button asChild variant="outline" className="border-primary text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
