import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import weddingCardSketch from '@/assets/wedding-card-sketch.png';
import brochuresSketch from '@/assets/brochures-sketch.png';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestCallback = () => {
    setShowForm(true);
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand Text */}
          <div className="font-handwriting text-2xl text-primary">
            Karunya Offset Printers
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-body text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="font-body text-foreground hover:text-primary transition-colors">Portfolio</a>
            <Button 
              variant="outline" 
              onClick={handleRequestCallback}
              className="font-body"
            >
              Request Callback
            </Button>
            <a href="#contact" className="font-body text-foreground hover:text-primary transition-colors">Contact</a>
            <a href="#about" className="font-body text-foreground hover:text-primary transition-colors">About</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <img 
                src={weddingCardSketch} 
                alt="Hand-drawn wedding card illustration" 
                className="w-64 h-64 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center space-y-8">
            {/* Main Brand Name */}
            <div className="space-y-4">
              <h1 className="font-script text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none">
                Karunya
              </h1>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Offset Printers
              </h2>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-primary italic">
                Design. Print. Deliver.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg"
                onClick={handleRequestCallback}
                className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-medium hover:shadow-strong transition-all"
              >
                Request a Call Back
              </Button>
            </div>
          </div>

          {/* Right Side Details & Illustration */}
          <div className="space-y-8">
            {/* Services List */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-body text-foreground">Offset Printing Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-body text-foreground">Wedding Cards & Invitations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-body text-foreground">Flex Printing & Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-body text-foreground">Visiting Cards, Brochures, Diaries</span>
                </div>
              </div>
            </div>

            {/* Bottom Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={brochuresSketch} 
                  alt="Hand-drawn brochures and visiting cards illustration" 
                  className="w-48 h-48 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/20 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
      </section>

      {/* Callback Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-card rounded-2xl p-8 mx-4 w-full max-w-md shadow-strong">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">Request Callback</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;