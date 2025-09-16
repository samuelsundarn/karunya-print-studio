import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-printing.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional printing press facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-shimmer">Karunya</span>
            <br />
            <span className="font-script text-6xl md:text-8xl text-accent">Offset Printers</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Crafting Excellence in Every Print. From Wedding Cards to Corporate Branding, 
            We Bring Your Vision to Life with Professional Quality & Artistic Touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-medium"
            >
              Explore Services
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="premium-gradient text-foreground hover:shadow-premium transition-all duration-300 hover:scale-105 px-8 py-3 text-lg font-medium"
            >
              Request Callback
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent/20 rounded-full floating"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -right-20 w-12 h-12 bg-accent/30 rounded-full floating" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;