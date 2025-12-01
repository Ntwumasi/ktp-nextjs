'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      'Kyle makes basketball more than a game for me. Everytime we worked out we have a clear and structured plan to help achieve my basketball goals. His work is very detail focused, and I have seen drastic improvement in my game since working with Kyle. Kyle and I have developed an extremely strong relationship outside of basketball, and he is more than a trainer to me.',
    name: 'Gabe Cohen',
    title: 'KTP Athlete',
  },
  {
    quote:
      'Kyle Thistle Pierce is a great coach that is very prepared and always is trying to expand and work on new things. Not only is he a good coach but he makes training sessions fun aswell as efficient. Would recommend!',
    name: 'Oliver Li',
    title: 'KTP Athlete',
  },
  {
    quote:
      "I can't recommend Kyle enough! My son has been training with him for the past six months, and the improvement in both skills and confidence is remarkable. Kyle has a unique ability to connect with young athletes, making each session both challenging and fun. He focus on the fundamentals through creative game like drills. My son looks forward to every session and has helped take his game to the next level. If you're looking for a trainer who truly cares about the growth and development of young players, look no further.",
    name: 'Jimmy Hastings',
    title: 'KTP Parent',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-[#222]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#2071fe] text-sm font-medium tracking-wider mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-6 text-[#2071fe] opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-[#2071fe] text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#111] hover:bg-[#2071fe] text-white p-3 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#111] hover:bg-[#2071fe] text-white p-3 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#2071fe]' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
