import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div className="neu-card p-12 min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <blockquote className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <footer className="space-y-2">
            <div className="font-bold text-xl text-primary">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-lg text-secondary font-semibold">
              {testimonials[currentIndex].role}
            </div>
            <div className="text-gray-600">
              {testimonials[currentIndex].company}
            </div>
          </footer>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={prevSlide}
          className="neu-button btn-outline p-3 rounded-full"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>

        {/* Dots indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-secondary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          className="neu-button btn-outline p-3 rounded-full"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      {/* Progress bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
        <div 
          className="bg-secondary h-full transition-all duration-300 ease-out"
          style={{ 
            width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
          }}
        />
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-advance
        </button>
      </div>
    </div>
  );
}
