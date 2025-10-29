import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Users, Building2 } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6 animate-fade-in">
            About Our Temple
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            A legacy of devotion, spirituality, and community service
          </p>
        </div>
      </section>

      {/* Temple History */}
      <section ref={ref1} className="py-16 px-4">
        <div className={`container mx-auto max-w-6xl ${inView1 ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">Temple History</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  The Vitthal-Rakhumai Temple in ABC Village has stood as a sacred symbol of faith for over three centuries. 
                  Established in the 18th century, the temple was built by local devotees who envisioned a place where the 
                  divine presence of Lord Vitthal and Goddess Rakhumai could bless the community.
                </p>
                <p className="leading-relaxed">
                  Through generations, the temple has witnessed countless devotees finding solace, peace, and spiritual 
                  enlightenment within its sacred walls. The temple has become an integral part of our village's cultural 
                  and spiritual identity.
                </p>
                <p className="leading-relaxed">
                  Today, the temple continues to serve as a beacon of hope and devotion, hosting daily prayers, weekly 
                  bhajans, and grand festivals that bring the entire community together in celebration of our shared faith.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-glow">
                <img
                  src={templeHero}
                  alt="Temple History"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lord Vitthal & Rakhumai */}
      <section ref={ref2} className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className={`container mx-auto max-w-6xl ${inView2 ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Lord Vitthal & Goddess Rakhumai
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Lord Vitthal</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lord Vitthal, also known as Vithoba, is a Hindu deity predominantly worshipped in the Indian states of 
                Maharashtra, Karnataka, Goa, and Andhra Pradesh. He is a manifestation of Lord Vishnu and is characterized 
                by his unique standing posture on a brick with his hands on his hips.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Devotees believe that Lord Vitthal represents the perfect balance of divine power and compassion. His 
                presence brings prosperity, removes obstacles, and grants spiritual wisdom to all who seek his blessings 
                with pure devotion.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Goddess Rakhumai</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Goddess Rakhumai, also known as Rukmini, is the divine consort of Lord Vitthal. She represents love, 
                devotion, and the nurturing aspect of the divine feminine. Her presence alongside Lord Vitthal symbolizes 
                the perfect union of Purusha (consciousness) and Prakriti (nature).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Devotees worship Goddess Rakhumai for blessings of family harmony, prosperity, and spiritual growth. Her 
                compassionate nature is believed to fulfill the wishes of sincere devotees and provide guidance in times 
                of difficulty.
              </p>
            </Card>
          </div>
        </div>
      </section>

      

      {/* ABC Village */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 mx-auto text-primary mb-4 animate-float" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About ABC Village</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              ABC Village is a thriving community in Maharashtra, India, known for its rich cultural heritage and deep 
              spiritual roots. The village has been home to the Vitthal-Rakhumai Temple for centuries, making it a 
              significant pilgrimage destination for devotees from across the region.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our village is characterized by its warm hospitality, traditional values, and strong sense of community. 
              The temple serves as the spiritual heart of ABC Village, bringing together people of all backgrounds in 
              shared devotion and celebration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With excellent connectivity to nearby cities and modern amenities, ABC Village beautifully balances 
              tradition with progress. The upcoming temple project represents our community's commitment to preserving 
              our heritage while embracing the future.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
