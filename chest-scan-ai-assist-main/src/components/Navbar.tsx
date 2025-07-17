import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Chest X-Ray AI</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                What It Does
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('try-model')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Try It
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Try It Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('try-model')}
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
            >
              Try It Live
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg shadow-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300 w-full text-left"
            >
              What It Does
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('try-model')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300 w-full text-left"
            >
              Try It
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300 w-full text-left"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button
                onClick={() => scrollToSection('try-model')}
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
              >
                Try It Live
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;