import { useEffect, useState } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 150);

      return () => clearInterval(timer);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center">
      {/* Loading Animation Container */}
      <div className="text-center space-y-8">
        
        {/* Brand Logo */}
        <div className="space-y-4">
          <h1 className="font-script text-5xl md:text-6xl font-bold text-primary animate-pulse">
            Karunya
          </h1>
          <p className="font-display text-xl text-muted-foreground">
            Loading...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-body">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Printing Press Animation */}
        <div className="relative w-24 h-16 mx-auto">
          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg">
            <div className="absolute top-2 left-2 right-2 h-1 bg-accent animate-pulse"></div>
            <div className="absolute top-6 left-2 right-2 h-1 bg-primary animate-pulse delay-200"></div>
            <div className="absolute top-10 left-2 right-2 h-1 bg-accent animate-pulse delay-400"></div>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-primary/20 rounded-full animate-pulse delay-100"></div>
        </div>

      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default PageLoader;