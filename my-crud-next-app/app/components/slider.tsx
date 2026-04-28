
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Innovative Solutions",
    description: "Transform your business with cutting-edge technology and creative strategies that drive real results.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    buttonText: "Get Started",
    buttonLink: "/get-started",
  },
  {
    id: 2,
    title: "Digital Excellence",
    description: "Experience seamless digital transformation with our expert team of developers and designers.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    id: 3,
    title: "Future Ready",
    description: "Stay ahead of the curve with innovative solutions designed for tomorrow's challenges.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev: number) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback((): void => {
    setCurrentSlide((prev: number) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-linear-to-br from-gray-900 to-gray-800">
      {/* Slides */}
      {slides.map((slide: Slide, index: number) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentSlide 
              ? "opacity-100 translate-x-0" 
              : index < currentSlide 
              ? "opacity-0 -translate-x-full" 
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <a
                href={slide.buttonLink}
                className="inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-105"
              >
                {slide.buttonText}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 group"
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 group"
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_: Slide, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-200 hover:scale-125"
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          >
            {index === currentSlide ? (
              <CircleDot className="h-5 w-5 text-purple-500" />
            ) : (
              <Circle className="h-5 w-5 text-white/50 hover:text-white/80 transition-colors" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Pause/Play Indicator (shows when hovering) */}
      <div className="absolute bottom-8 right-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
          {isAutoPlaying ? "Auto-playing" : "Paused"}
        </div>
      </div>
    </div>
  );
}