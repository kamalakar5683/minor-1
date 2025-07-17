import { Github, ExternalLink, FileText, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Dataset Source', icon: ExternalLink, href: '#' },
    { name: 'Terms of Use', icon: FileText, href: '#' },
    { name: 'Privacy Policy', icon: Shield, href: '#' }
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">Chest X-Ray AI</h3>
            <p className="text-muted-foreground text-sm">
              AI-powered diagnostic assistance for better healthcare outcomes
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Chest X-Ray AI Project
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built to support better diagnosis and healthcare AI
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Medical Disclaimer:</strong> This AI tool is designed to assist radiologists 
              and healthcare professionals. It should not be used as a substitute for professional medical diagnosis, advice, 
              or treatment. Always consult with qualified healthcare providers for medical decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;