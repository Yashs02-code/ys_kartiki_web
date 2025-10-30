import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Countdown for Kartiki Ekadashi
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-11-02T05:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const upcomingEvents = [
    {
      title: "Shri Vitthal Rakhumai Cricket Cup",
        date: "November 1 - 3, 2025",
        time: "Starts 3:30 PM (Nov 1st)",
        location: "Shri Vitthal Rakhumai Kridaangan, Amberkarwadi",
        description: "Grand Day/Night Underarm Box Cricket tournament.",
        attendees: "Teams participating: 20+",
        status: "recurring",
    },
    {
        title: "Grand Dhol Vadan Competition",
        date: "November 3, 2025",
        time: "Starting 10:30 PM",
        location: "Shri Vitthal Rakhumai Kridaangan, Amberkarwadi",
        description: "An exciting competition for Dhol and Tasha players.",
        attendees: "10+ Dhol Tasha Groups",
        status: "upcoming",
    },
  ];

  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6 animate-fade-in">
            Temple Events
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Join us in celebrating divine festivals and spiritual gatherings
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/10 border-2 border-primary/20">
            <div className="text-center mb-8">
              <Badge className="bg-primary text-primary-foreground mb-4">Featured Event</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
                Kartiki Ekadashi Utsav 2025
              </h2>
              <p className="text-lg text-muted-foreground">
                The most auspicious celebration of the year
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {countdown.days}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Days</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {countdown.hours}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Hours</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {countdown.minutes}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutes</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {countdown.seconds}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Seconds</div>
              </div>
            </div>

            <div className="text-center text-muted-foreground">
              <p className="text-lg">November 02, 2025 • 9:00 AM - 10:00 PM</p>
              <p className="mt-2">Maha Aarti, Bhajan Sessions, Cultural Programs & Prasad Distribution</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section ref={ref1} className="py-16 px-4">
        <div className={`container mx-auto max-w-6xl ${inView1 ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Upcoming Events</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 cursor-glow group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    className={
                      event.status === "upcoming"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }
                  >
                    {event.status === "upcoming" ? "Upcoming" : "Recurring"}
                  </Badge>
                  <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>{event.attendees} Expected</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Events;
