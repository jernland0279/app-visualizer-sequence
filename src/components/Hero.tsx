
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Découvrez le 49e numéro du magazine PECB",
    subtitle: "– Disponible dès maintenant!",
    description: "Renforcez la résilience de votre entreprise face aux crises et aux perturbations.",
    buttonText: "En savoir plus",
    buttonLink: "/magazine",
    image: "/lovable-uploads/5f8f319b-5c0f-4eb6-ad85-1ef149588402.png"
  },
  {
    id: 2,
    title: "Formations et certifications",
    subtitle: "Développez vos compétences professionnelles",
    description: "Découvrez nos programmes de formation reconnus mondialement.",
    buttonText: "Explorer les formations",
    buttonLink: "/formation",
    image: "/lovable-uploads/2290727d-3e2d-4640-9710-f7317175aa16.png"
  },
  {
    id: 3,
    title: "Cybersécurité et gestion des risques",
    subtitle: "Protégez votre organisation",
    description: "Formez-vous aux meilleures pratiques en matière de sécurité et conformité.",
    buttonText: "Découvrir",
    buttonLink: "/cybersecurity",
    image: "/lovable-uploads/29c7cb26-cbe1-41e7-a0bc-0c766c3e01a4.png"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom h-full flex items-center">
            <div className="max-w-3xl text-white animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                {slide.title}
                <span className="block mt-2">{slide.subtitle}</span>
              </h1>
              <div className="w-24 h-1 bg-primary my-6"></div>
              <p className="text-lg md:text-xl mb-8">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="btn-primary inline-block"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
