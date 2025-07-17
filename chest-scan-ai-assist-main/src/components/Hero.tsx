import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Mail } from 'lucide-react';
import heroXrayBg from '@/assets/hero-xray-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroXrayBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Chest X-Ray
            </span>{' '}
            Diagnosis
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time classification of abnormalities in radiographic images using EfficientNet technology.
            Assisting radiologists with fast, accurate AI-powered diagnostic support.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              EfficientNetB7
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              TensorFlow/Keras
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Binary Classification
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Real-time Prediction
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('how-it-works')}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3 text-lg"
            >
              Explore Model
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('try-model')}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Try It Live
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Team
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary">98.3%</div>
              <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary">&lt;2s</div>
              <div className="text-sm text-muted-foreground mt-1">Processing</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">X-rays Analyzed</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;