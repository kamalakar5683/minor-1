import { Code, Database, Brain, BarChart3, Shield, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    {
      name: 'TensorFlow',
      description: 'Machine Learning Framework',
      icon: Brain,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Keras',
      description: 'High-level Neural Networks API',
      icon: Code,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'EfficientNetB7',
      description: 'State-of-the-art CNN Architecture',
      icon: Cpu,
      color: 'from-primary to-primary-light',
      bgColor: 'bg-primary/5'
    },
    {
      name: 'Matplotlib',
      description: 'Data Visualization & Plotting',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Supabase',
      description: 'Backend & Database Services',
      icon: Database,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'OpenCV',
      description: 'Computer Vision & Image Processing',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technology <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with industry-leading technologies for reliable, scalable medical AI solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 overflow-hidden relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Usage Indicator */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                      <span>Active in Production</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Flow */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">System Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Data Input */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Data Input</h4>
              <p className="text-xs text-muted-foreground">X-ray Images</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-primary-light"></div>
            </div>

            {/* Processing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">AI Processing</h4>
              <p className="text-xs text-muted-foreground">EfficientNetB7</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-primary-light"></div>
            </div>

            {/* Output */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Results</h4>
              <p className="text-xs text-muted-foreground">Classification</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              End-to-end pipeline processing over <span className="font-semibold text-primary">10,000 X-rays</span> with 
              <span className="font-semibold text-success"> 98.3% accuracy</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;