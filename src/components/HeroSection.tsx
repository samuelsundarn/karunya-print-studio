import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-printing.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const services = [
    'Wedding Cards',
    'Visiting Cards', 
    'Flex Design & Printing',
    'Offset Printing',
    'Brochures & Catalogs',
    'Diaries & Notebooks',
    'Corporate Branding'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentService = services[currentServiceIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentService.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentService.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentServiceIndex, services]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional printing press facility showcasing Karunya Offset Printers quality work"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Subtle Particle Effect */}
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * -8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Company Name */}
        <div className={`${isVisible ? 'hero-content-reveal' : 'opacity-0'} mb-6`}>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
            <span className="text-shimmer block">Karunya</span>
          </h1>
        </div>
        
        {/* Tagline */}
        <div className={`${isVisible ? 'hero-content-reveal delay-1' : 'opacity-0'} mb-8`}>
          <h2 className="font-script text-4xl md:text-6xl lg:text-7xl text-accent leading-relaxed">
            Offset Printers
          </h2>
        </div>
        
        {/* Engaging Quote */}
        <div className={`${isVisible ? 'hero-content-reveal delay-2' : 'opacity-0'} mb-8`}>
          <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-white/90 max-w-4xl mx-auto leading-relaxed">
            "Where Every Print Tells a Story, Every Design Speaks Excellence"
          </p>
        </div>
        
        {/* Typing Animation for Services */}
        <div className={`${isVisible ? 'hero-content-reveal delay-3' : 'opacity-0'} mb-12`}>
          <div className="text-center">
            <p className="font-body text-lg md:text-xl text-white/80 mb-4">
              Specializing in
            </p>
            <div className="font-body text-2xl md:text-3xl lg:text-4xl font-semibold text-accent min-h-[3rem] flex items-center justify-center">
              <span className="relative">
                {displayedText}
                <span className="animate-pulse text-white/70 ml-1">|</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className={`${isVisible ? 'hero-content-reveal delay-4' : 'opacity-0'} mb-12`}>
          <p className="font-body text-base md:text-lg opacity-85 max-w-3xl mx-auto leading-relaxed">
            From elegant wedding invitations to powerful corporate branding, we transform your vision into 
            stunning printed reality with professional quality and artistic excellence.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className={`${isVisible ? 'hero-content-reveal delay-5' : 'opacity-0'} flex flex-col sm:flex-row gap-6 justify-center items-center`}>
          <Button
            onClick={scrollToServices}
            size="lg"
            className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 px-10 py-4 text-lg font-semibold rounded-full shadow-soft hover:shadow-medium"
          >
            <span className="flex items-center gap-3">
              Explore Our Services
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
          
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group premium-gradient text-ink-black hover:shadow-premium transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 px-10 py-4 text-lg font-bold rounded-full shadow-medium hover:shadow-strong"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.01c-.7.4-.7 1.4-.003 1.998C7.6 14.56 9.4 16.36 11 17.84c.6.7 1.6.7 2-.003l1.622-4.062a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Request Callback
            </span>
          </Button>
        </div>
        
        {/* Key Features Tags */}
        <div className={`${isVisible ? 'hero-content-reveal delay-6' : 'opacity-0'} mt-16 flex flex-wrap justify-center gap-4`}>
          {['Premium Quality', 'Fast Delivery', 'Custom Design', 'Expert Craftsmanship'].map((feature, index) => (
            <span 
              key={feature}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/15 rounded-full floating blur-sm"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-primary/20 rounded-full floating blur-sm" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-8 w-16 h-16 bg-white/10 rounded-full floating blur-sm" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/25 rounded-full floating blur-sm" style={{ animationDelay: '2.5s' }}></div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors duration-300 cursor-pointer group" onClick={scrollToServices}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-wide">Discover More</span>
          <div className="animate-bounce group-hover:animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;