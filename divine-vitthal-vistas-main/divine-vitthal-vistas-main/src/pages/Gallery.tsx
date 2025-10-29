import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ✅ 12 gallery images (stored in public/gallery/)
  const galleryImages = [
    { src: "/gallery/temple-1.jpg", title: "Main Temple Entrance", category: "Temple" },
    { src: "/gallery/temple-2.jpg", title: "Divine Mandala Art", category: "Art" },
    { src: "/gallery/temple-3.jpg", title: "Evening Aarti", category: "Festival" },
    { src: "/gallery/temple-4.jpg", title: "Temple Architecture", category: "Temple" },
    { src: "/gallery/temple-5.jpg", title: "Sacred Patterns", category: "Art" },
    { src: "/gallery/temple-6.jpg", title: "Kartiki Ekadashi Celebration", category: "Festival" },
    { src: "/gallery/temple-7.jpg", title: "Prayer Hall", category: "Temple" },
    { src: "/gallery/temple-8.jpg", title: "Devotees Gathering", category: "Festival" },
    { src: "/gallery/temple-9.jpg", title: "Temple Decorations", category: "Art" },
    { src: "/gallery/temple-10.jpg", title: "Sunset View", category: "Temple" },
    { src: "/gallery/temple-11.jpg", title: "Festival Lights", category: "Festival" },
    { src: "/gallery/temple-12.jpg", title: "Traditional Motifs", category: "Art" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-6 animate-fade-in">
            Temple Gallery
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Witness the divine beauty and spiritual moments captured through time
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="py-16 px-4">
        <div
          className={`container mx-auto max-w-7xl ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {image.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
              Festival Moments
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the vibrant celebrations and divine atmosphere during our temple festivals,
              especially the grand Kartiki Ekadashi Utsav
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-glow group">
              <img
                src="/gallery/temple-6.jpg"
                alt="Festival Celebration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Kartiki Ekadashi 2024
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thousands of devotees gathered for this sacred celebration
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-glow group">
              <img
                src="/gallery/temple-2.jpg"
                alt="Temple Bhajan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Evening Bhajan Sessions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Divine music and devotional songs every evening
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-all cursor-glow"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
